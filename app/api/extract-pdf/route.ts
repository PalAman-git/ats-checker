import pdf from '@cedrugs/pdf-parse';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return Response.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    let data;
    try {
      data = await pdf(buffer, {
        max: 0, // parse all pages
      });
    } catch (pdfError: any) {
      console.error('PDF parse error:', pdfError);

      return Response.json(
        {
          error: 'Unsupported or corrupted PDF file',
          details: pdfError.message,
        },
        { status: 422 }
      );
    }

    return Response.json({
      text: data.text,
      pages: data.numpages,
    });

  } catch (error) {
    console.error('Server error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

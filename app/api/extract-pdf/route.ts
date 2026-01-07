import pdf from '@cedrugs/pdf-parse';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return Response.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const data = await pdf(buffer);

    return Response.json({
      text: data.text,
      pages: data.numpages,
    });
  } catch (error) {
    console.error('PDF parse failed:', error);
    return Response.json({ error: 'PDF parsing failed' }, { status: 500 });
  }
}

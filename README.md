📝 ATS Resume Checker
=====================

**ATS Resume Checker** is a web-based tool that allows users to upload their resumes (PDF) and compare them against a job description to get an **instant match score**. This helps job seekers optimize their resumes for Applicant Tracking Systems (ATS).

## ⚡ Features

* **PDF Parsing:** Upload PDF resumes and parse text automatically.
* **Job Comparison:** Paste any job description for comparison.
* **Match Scoring:** Calculate ATS match score based on skills and keywords.
* **Keyword Insights:** Highlights matched and missing keywords.
* **Error Handling:** Handles malformed PDFs gracefully.
    

## 🛠️ Tech Stack

* **Frontend:** Next.js 13+, React, TypeScript, Tailwind CSS
* **Backend:** Next.js API routes (Serverless Functions)
* **PDF Parsing:** `@cedrugs/pdf-parse`
* **Icons:** `lucide-react`
    

## 📦 Project Structure

```text
app/
 ├─ api/
 │   └─ extract-pdf/      
 ├─ ats-checker/         
 │   └─ page.tsx
 └─ page.tsx              
components/
 ├─ PdfUploader.tsx
 ├─ JobDescriptionInput.tsx
 └─ MatchScoreCard.tsx
utils/
 ├─ extractPdfText.ts
 └─ calculateAtsScore.ts

```

## ⚙️ Setup Instructions

1.  **Clone the repo**
    
```bash
  git clone   cd ats-resume-checker   
```

2.  **Install dependencies**
```bash
    npm install   
```

3.  **Run the development server**
    
```bash   
    npm run dev   
```

4.  Open [http://localhost:3000](http://localhost:3000/) in your browser
    

## 🖥️ How to Use


1.  Navigate to the **ATS Checker** page
    
2.  **Upload your PDF resume** using the file uploader
    
3.  Paste the **job description** in the textarea
    
4.  Click **Calculate ATS Score**
    
5.  View **matched and missing keywords** and your **score**
    

> Tip: Use **text-based PDFs** for accurate results. Scanned image PDFs may fail.

## 💡 Example


**Job Description:**

```text
   We are looking for a Frontend Developer with strong experience in React, Next.js, TypeScript, and Tailwind CSS. Experience with REST APIs and Git is required.   
```

**Resume Keywords Matched:** react, next, typescript, tailwind, rest, git**Score:** 75%

## 🏗️ Contributing

1.  Fork the repository
2.  Create a branch (git checkout -b feature/my-feature)
3.  Make changes and commit (git commit -m "feat: add new feature") 
4.  Push to the branch (git push origin feature/my-feature)
5.  Open a Pull Request
    

## 📄 License

This project is licensed under the **MIT License**.


## 🚀 Future Improvements

*   Keyword weighting (important skills score higher)
*   OCR fallback for scanned/image PDFs
*   User authentication & saved history
*   Paid plan / limits for premium users
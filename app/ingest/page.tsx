export default function Ingest() {
  return (
    <main className="p-8">
      <h2 className="text-xl font-semibold mb-4">Resume Ingestion</h2>
      <div className="border p-6 text-center mb-4">
        Drag & Drop Resumes
      </div>
      <p>Resumes received: <b>247</b></p>
      <p>Status: Processing...</p>
      <a href="/dashboard" className="inline-block mt-4 underline">
        Go to Screening Dashboard
      </a>
    </main>
  );
}
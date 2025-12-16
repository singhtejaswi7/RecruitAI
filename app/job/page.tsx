export default function JobSetup() {
  return (
    <main className="p-8">
      <h2 className="text-xl font-semibold mb-4">Job Description Setup</h2>
      <textarea
        className="border w-full p-3 h-40 mb-4"
        placeholder="Paste Job Description here..."
      />
      <a href="/ingest" className="bg-black text-white px-4 py-2 inline-block">
        Start Screening
      </a>
    </main>
  );
}
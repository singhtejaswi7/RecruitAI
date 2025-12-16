export default function Dashboard() {
  return (
    <main className="p-8">
      <h2 className="text-xl font-semibold mb-4">Screening Dashboard</h2>
      <table className="w-full border">
        <thead>
          <tr className="border">
            <th>Name</th>
            <th>Fit Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td>Rahul Sharma</td>
            <td>87%</td>
            <td><a href="/candidate">View</a></td>
          </tr>
          <tr className="border">
            <td>Aditi Kapoor</td>
            <td>81%</td>
            <td><a href="/candidate">View</a></td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4 italic text-sm">
        AI Insight: Candidates ranked based on JD match and experience relevance.
      </p>
    </main>
  );
}
export default function Schedule() {
  return (
    <main className="p-8">
      <h2 className="text-xl font-semibold mb-4">Interview Scheduling</h2>
      <ul>
        <li>Tue 11 AM</li>
        <li>Wed 2 PM</li>
        <li>Thu 4 PM</li>
      </ul>
      <button className="bg-black text-white px-4 py-2 mt-4">
        Send Invite
      </button>
    </main>
  );
}
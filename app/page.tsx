export default function Login() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="w-96 border p-6 rounded">
        <h1 className="text-xl font-bold mb-4">Recruit-AI</h1>
        <input className="border w-full p-2 mb-3" placeholder="Email" />
        <button className="bg-black text-white w-full p-2">
          Continue as Hiring Manager
        </button>
      </div>
    </main>
  );
}
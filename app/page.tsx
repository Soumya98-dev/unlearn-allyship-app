import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 flex-col text-center p-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Unlearn 💡</h1>
      <p className="text-gray-600 mb-6">A platform to help men become better allies.</p>
      <Link href="/dashboard">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
          Enter Dashboard
        </button>
      </Link>
    </main>
  );
}

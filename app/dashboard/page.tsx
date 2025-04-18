'use client';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const biasBreakers = [
  {
    title: '"Boys will be boys"',
    explanation:
      'This phrase excuses toxic behavior. Accountability is not optional. Let’s challenge harmful normalization.',
  },
  {
    title: '"Real men don’t cry"',
    explanation:
      'This discourages emotional expression. Vulnerability is strength, not weakness.',
  },
  {
    title: '"She was asking for it"',
    explanation:
      'Victim-blaming perpetuates rape culture. Let’s hold perpetrators accountable, not victims.',
  },
];

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  const randomBias =
    biasBreakers[Math.floor(Math.random() * biasBreakers.length)];

  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome to Unlearn</h1>
      <p className="text-gray-700 mb-6">Today’s Bias-Breaker:</p>

      <div className="bg-blue-100 p-4 rounded-lg shadow max-w-md">
        <h2 className="text-lg font-semibold mb-2">{randomBias.title}</h2>
        <p className="text-sm text-gray-700">{randomBias.explanation}</p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </main>
  );
}

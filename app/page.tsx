import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-8">
      
      {/* Hero Section */}
      <section className="text-center max-w-3xl mb-16">
        <h1 className="text-5xl font-bold mb-4">Earnexx</h1>
        <p className="text-gray-700 text-lg">
          On-Chain Task Rewards and Community Growth Infrastructure on Solana.
        </p>
        <Link
          href="https://linksharing.samsungcloud.com/7egqTvz4Jy8A"
          target="_blank"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View Whitepaper
        </Link>
      </section>

      {/* Founder Section */}
      <section className="flex flex-col items-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Founder</h2>
        <Image
          src="/bullsniperr.png"
          alt="BullSniperr"
          width={150}
          height={150}
          className="rounded-full border-2 border-gray-300"
        />
        <p className="text-gray-700 text-center mt-4 max-w-xl">
          BullSniperr – Founder & Product Lead. Focused on Web3 content, community management, and ecosystem growth.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-3xl mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Core Features</h2>
        <ul className="space-y-4 text-gray-700">
          <li>✅ Task-Based Rewards: Earn by completing verifiable tasks.</li>
          <li>✅ On-Chain Transparency: All actions and rewards recorded on Solana.</li>
          <li>✅ Wallet-Based Identity: Pseudonymous, permissionless participation.</li>
          <li>✅ Scalable Infrastructure: High-volume participation with low fees.</li>
        </ul>
      </section>

      {/* Roadmap Section */}
      <section className="flex flex-col items-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Roadmap</h2>
        <Image
          src="/roadmap.png"
          alt="Earnexx Roadmap"
          width={600}
          height={400}
          className="rounded-lg border border-gray-200"
        />
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm mt-16 text-center">
        &copy; 2026 Earnexx. All rights reserved.
      </footer>
    </main>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '0 20px', maxWidth: '900px', margin: '0 auto' }}>
      
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Earnexx</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
          Solana-based platform for transparent, community-driven Web3 rewards.
        </p>
        <div style={{ marginTop: '20px' }}>
          <Link href="https://github.com/bullsniperr/earnexx">
            <a style={{ marginRight: '15px', textDecoration: 'underline', color: '#1a73e8' }}>GitHub</a>
          </Link>
          <Link href="YOUR_WHITEPAPER_LINK">
            <a style={{ textDecoration: 'underline', color: '#1a73e8' }}>Whitepaper</a>
          </Link>
        </div>
      </section>

      {/* Problem & Solution */}
      <section style={{ marginTop: '60px' }}>
        <h2>Problem & Solution</h2>
        <p>
          Users participate in Web3 ecosystems but often lack consistent, transparent reward mechanisms. 
          <strong> Earnexx solves this by tracking actions on-chain and distributing rewards transparently.</strong>
        </p>
      </section>

      {/* How it Works */}
      <section style={{ marginTop: '60px' }}>
        <h2>How It Works</h2>
        <ol>
          <li>User performs an on-chain action</li>
          <li>Action is verified on Solana</li>
          <li>Rewards are calculated automatically</li>
          <li>Users claim rewards securely</li>
        </ol>
      </section>

      {/* Roadmap */}
      <section style={{ marginTop: '60px' }}>
        <h2>Roadmap</h2>
        <ul>
          <li>Q1 2026: Landing page, whitepaper, architecture</li>
          <li>Q2 2026: Smart contract MVP (testnet)</li>
          <li>Q3 2026: Security audit + mainnet launch</li>
          <li>Q4 2026: Community growth & partnerships</li>
        </ul>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '80px', paddingBottom: '50px' }}>
        <p>Contact: <a href="mailto:earnexx01@gmail.com" style={{ color: '#1a73e8', textDecoration: 'underline' }}>earnexx01@gmail.com</a></p>
        <p>&copy; 2026 Earnexx. All rights reserved.</p>
      </footer>
      
    </main>
  )
          }

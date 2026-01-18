import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1a73e8' }}>Earnexx</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
          On-Chain Task Rewards and Community Growth Infrastructure on Solana
        </p>
        <div style={{ marginTop: '20px' }}>
          <Link href="https://github.com/bullsniperr/earnexx">
            <a style={{ marginRight: '15px', color: '#1a73e8', textDecoration: 'underline' }}>GitHub</a>
          </Link>
          <Link href=https://linksharing.samsungcloud.com/7egqTvz4Jy8A>
            <a style={{ color: '#1a73e8', textDecoration: 'underline' }}>Whitepaper</a>
          </Link>
        </div>
      </section>

      {/* About / Problem & Solution */}
      <section style={{ marginTop: '60px' }}>
        <h2>Problem & Solution</h2>
        <p>
          Web3 projects struggle to grow real communities, measure genuine contributions, and distribute rewards transparently.
          <strong> Earnexx solves this by providing on-chain task tracking, automatic rewards, and verifiable participation.</strong>
        </p>
      </section>

      {/* Core Features */}
      <section style={{ marginTop: '60px' }}>
        <h2>Core Features</h2>
        <ul>
          <li><strong>Task-Based Rewards:</strong> Community engagement, content creation, testing, campaign participation</li>
          <li><strong>On-Chain Transparency:</strong> All claims are verifiable and auditable on Solana</li>
          <li><strong>Wallet-Based Identity:</strong> Pseudonymous participation and on-chain reputation</li>
          <li><strong>Scalable Infrastructure:</strong> Built on Solana for high-volume, low-cost participation</li>
        </ul>
      </section>

      {/* How It Works */}
      <section style={{ marginTop: '60px' }}>
        <h2>How It Works</h2>
        <ol>
          <li>Projects define tasks aligned with real value</li>
          <li>Users complete tasks via Solana wallets</li>
          <li>Rewards are distributed automatically</li>
          <li>Participation history builds verifiable reputation</li>
        </ol>
      </section>

      {/* Roadmap */}
      <section style={{ marginTop: '60px' }}>
        <h2>Roadmap</h2>
        {/* Placeholder for infographic */}
        <div style={{ textAlign: 'center', marginTop: '20px', border: '1px dashed #ccc', padding: '20px' }}>
          <p>Roadmap Infographic Here</p>
        </div>
        <ul style={{ marginTop: '20px' }}>
          <li><strong>Phase 1 – MVP:</strong> Smart contracts, devnet testing</li>
          <li><strong>Phase 2 – Beta Launch:</strong> Web interface, closed testing, initial partners</li>
          <li><strong>Phase 3 – Mainnet Release:</strong> Security audit, public launch, expanded reward logic</li>
          <li><strong>Phase 4 – Ecosystem Expansion:</strong> Multi-project onboarding, analytics, reputation layers</li>
        </ul>
      </section>

      {/* Team */}
      <section style={{ marginTop: '60px' }}>
        <h2>Team</h2>
        <p><strong>BullSniperr – Founder & Product Lead:</strong> Web3 content, community management, ecosystem growth</p>
        <p>External contributors & advisors: Smart contract development, frontend engineering, security review</p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '80px', paddingBottom: '50px' }}>
        <p>Contact: <a href="mailto:earnexx01@gmail.com" style={{ color: '#1a73e8', textDecoration: 'underline' }}>earnexx01@gmail.com</a></p>
        <p>&copy; 2026 Earnexx. All rights reserved.</p>
      </footer>

    </main>
  )
        }

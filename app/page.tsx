import Image from 'next/image';
import roadmapImg from '../public/roadmap.png';
import founderImg from '../public/bullsniperr.png';

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', lineHeight: '1.6', padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Earnexx</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
          On-chain task rewards and community growth infrastructure on Solana.
        </p>
        <a href="https://linksharing.samsungcloud.com/7egqTvz4Jy8A" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1rem', display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#1a73e8', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>
          View Whitepaper
        </a>
      </section>

      {/* Features Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Core Features</h2>
        <ul>
          <li>Task-based rewards with on-chain verification</li>
          <li>Transparent and auditable reward system</li>
          <li>Wallet-based identity & reputation tracking</li>
          <li>Scalable infrastructure on Solana</li>
        </ul>
      </section>

      {/* Founder Section */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Founder</h2>
        <Image src={founderImg} alt="BullSniperr – Founder" width={150} height={150} style={{ borderRadius: '50%' }} />
        <p style={{ marginTop: '1rem' }}>BullSniperr – Founder & Product Lead</p>
        <p>Responsible for product direction, community strategy, and early development coordination.</p>
      </section>

      {/* Roadmap Section */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Roadmap</h2>
        <Image src={roadmapImg} alt="Earnexx Roadmap" width={800} height={400} />
      </section>

      {/* Contact / Footer */}
      <footer style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid #ddd' }}>
        <p>Contact: <a href="mailto:earnexx01@gmail.com">earnexx01@gmail.com</a></p>
        <p>&copy; 2026 Earnexx</p>
      </footer>
    </main>
  );
}

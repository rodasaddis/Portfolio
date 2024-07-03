import Head from 'next/head';
import Link from 'next/link';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects - My Portfolio</title>
      </Head>
      <header>
        <h1>Projects</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <h2>My Projects</h2>
        <p>Here are some of my recent works.</p>
      </main>
      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

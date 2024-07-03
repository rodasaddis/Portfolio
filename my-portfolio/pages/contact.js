import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - My Portfolio</title>
      </Head>
      <header>
        <h1>Contact</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
      <main>
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me!</p>
      </main>
      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

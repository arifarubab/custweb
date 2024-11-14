import Link from 'next/link';

const Header = () => (
  <header className="w-full bg-blue-600 px-2 text-white">
    <nav className="flex gap-4 space-x-4 font-bold">
      <Link href="/" className="hover:underli">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
    </nav>
  </header>
);

export default Header;

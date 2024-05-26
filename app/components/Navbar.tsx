// components/Navbar.js

import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Navbar() {

  const router = useRouter()
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <button type="button" onClick={() => router.push('/blog')}>
            Dashboard
          </button>
        </li>
      </ul>
    </nav>
  );
}
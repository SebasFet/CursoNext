import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Nabvar</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {/* Componente Link sirve para realizar cambios de paginas */  }  
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="../components/Users.jsx">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Tienda",
  description: "Pagina de la Tienda",
  keywords: "Tienda, Productos, Compras",
};

export default function TiendaLayout({ children }) {
  return (
    <>
      <h3>Sección Tienda</h3>
      <ul>
        <li>
          <Link href="/tienda/categorias">categoria</Link>
        </li>
        <li>
          <Link href="/tienda/categorias/computadoras">Productos</Link>
        </li>
      </ul>
      {children}
    </>
  );
}

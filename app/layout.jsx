import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Magnus SIG",
  description: "Pagina Principal de Magnus SIG",
  keywords: "Magnus, SIG, Sistema de Informacion Geografica",
};

const roboto = Roboto({
  weight: ["400", "700", "900"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

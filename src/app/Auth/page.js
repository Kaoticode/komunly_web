import Auth from "./Auth";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
export default function auth() {
  return (
    <main>
      <Navbar />
      <Auth />
      <Footer />
    </main>
  );
}

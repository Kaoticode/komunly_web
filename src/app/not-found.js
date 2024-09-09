import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center gap-7">
        <h1 className="text-3xl">Página no encontrada – 404!</h1>
        <Link
          href="/"
          className="outline outline-2 outline-komunly-gray-light px-5 py-2 rounded-3xl hover:bg-komunly-gray-medium transition-all hover:outline-white hover:outline-2"
        >
          Vuelve al inicio
        </Link>
      </div>
    </div>
  );
}

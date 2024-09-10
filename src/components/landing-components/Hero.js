"use client";

import React from "react";
import Badge from "@/components/Badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { PurpleCirclesBg } from "../PurpleCirclesBg";

export default function Hero() {
  return (
    <div className="flex items-center overflow-hidden">
      <PurpleCirclesBg />
      <div className="container mx-auto px-6 py-24 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex justify-center items-center flex-col">
          <Badge text="Bienvenido a Komunly" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              La nueva red social diseñada para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">
                revolucionar
              </span>
            </h1>
          </motion.div>
          <p className="mb-8 text-lg text-komunly-gray-semilight">
            Nuestra plataforma ofrece una amplia gama de funcionalidades, desde
            la publicación de contenido multimedia hasta la realización de
            transferencias entre usuarios y la creación de eventos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full inline-flex items-center border-2 border-white transition duration-300">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Entrar desde el navegador
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function CardServicios({ title, description }) {
  return (
    <motion.div
      className="p-12 rounded-lg shadow-lg bg-gradient-to-br from-[#414b48] from-0% via-[#121542] to-[#20356a] hover:bg-gradient-to-br hover:from-[#9cb067] hover:from-0% hover:via-[#647090] hover:to-[#4b82bb]"
      initial={{ opacity: 0, y: -150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <h3 className="flex items-center text-lg font-semibold mb-2">
        <CheckIcon className="w-5 mr-2" /> {title}
      </h3>
      <p className="text-sm mb-4">{description}</p>
    </motion.div>
  );
}

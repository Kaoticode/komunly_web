'use client'
import React from 'react'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function ErrorComponent () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-komunly-purple-darkest to-komunly-blue-navy p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md bg-komunly-blue-deep bg-opacity-40 backdrop-filter backdrop-blur-md rounded-lg shadow-xl border border-komunly-blue-steel p-6 sm:p-8 md:p-10">
        <div className="flex flex-col items-center text-center">
          <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 text-komunly-red-bright mb-4" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-komunly-gray-semilight mb-4">
            No se pueden mostrar los datos
          </h2>
          <p className="text-komunly-blue-light text-sm sm:text-base mb-6">
            Ha ocurrido un error al cargar la información. Por favor, intente nuevamente.
          </p>
          <Link className='mt-4 bg-komunly-blue-light hover:bg-opacity-75 py-2 rounded-md px-4' href='/blocks' prefetch={false}>
           Reintentar
          </Link>

        </div>
      </div>
    </div>
  )
}

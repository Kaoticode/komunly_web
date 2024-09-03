import React from 'react'
import Navbar from '@/landing-components/Navbar'
import Hero from '@/landing-components/Hero'
import Counter from '@/landing-components/Counter'
import Servicios from '@/landing-components/Servicios'

export default function Home () {
  return (
    <main>
      <Navbar />
      <Hero />
      <Counter />
      <Servicios />
    </main>
  )
}

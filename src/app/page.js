import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Counter from '@/landing-components/Counter'
import Servicios from '@/landing-components/Servicios'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Counter />
        <Servicios />
      </main>
      <Footer />
    </>
  )
}

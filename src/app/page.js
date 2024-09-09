import Navbar from '@/components/Navbar'
import Hero from '@/components/landing-components/Hero'
import Counter from '@/components/landing-components/Counter'
import Servicios from '@/components/landing-components/Servicios'
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

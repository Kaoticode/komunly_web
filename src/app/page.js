import Navbar from '@/components/Navbar'
import Hero from '@/landing-components/Hero'
import Counter from '@/landing-components/Counter'
import Servicios from '@/landing-components/Servicios'
import { Footer } from '@/components/Footer'
import Auth from '@/components/Auth/Auth'

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Counter />
        <Servicios />
        <Auth />
      </main>
      <Footer />
    </>
  )
}

import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='h-full w-full'>
            <Navbar/>
            <div className='h-screen flex flex-col justify-center items-center gap-7'>
            <h1 className='text-3xl'>Página no encontrada – 404!</h1>
                <Link href="/">Vuelve al inicio</Link>
            </div>
        </div>
    )

}
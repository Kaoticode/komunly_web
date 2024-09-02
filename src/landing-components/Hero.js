import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        
        <div className="flex items-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="absolute -left-[35%] -top-[5%] w-3/4 h-3/4 opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="#FF00FF" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#FF00FF" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="100" cy="100" r="100" fill="url(#glowGradient)" />
                </svg>
                <svg className="hidden lg:flex absolute -right-3/4 w-1/2 lg:-right-1/4  lg:w-3/4 lg:h-3/4 opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="100" fill="url(#glowGradient)" />
                </svg>
            </div>
            <div className="container mx-auto px-6 py-24 md:py-24 relative z-10">
                <div className="max-w-3xl mx-auto text-center flex justify-center items-center flex-col">
                    <p className="text-gray-200 mb-4 text-sm border-2 rounded-2xl w-max p-1 px-3">Bienvenido a Komunly</p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                        La nueva red social diseñada para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">
                            revolucionar
                        </span>
                    </h1>
                    <p className="mb-8 text-lg text-gray-300">
                        Nuestra plataforma ofrece una amplia gama de funcionalidades, desde la publicación
                        de contenido multimedia hasta la realización de transferencias entre usuarios y la
                        creación de eventos.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="#"
                            className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full inline-flex items-center border-2 border-white transition duration-300"
                        >
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            Entrar desde el navegador
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

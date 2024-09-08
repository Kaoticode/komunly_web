export function Footer() {
  const COMMUNITY_LINKS = [
    {
      link: 'K Komunly',
      url: '#Komunly'
    },
    {
      link: 'Instagram',
      url: '#Instagram'
    },
    {
      link: 'WhatsApp',
      url: '#WhatsApp'
    },
    {
      link: 'Email',
      url: '#Email'
    },
    {
      link: 'Discord',
      url: '#Discord'
    }
  ]
  const USEFUL_LINKS = [
    {
      link: 'Términos y condiciones',
      url: '#Términos'
    },
    {
      link: 'Comprar códigos',
      url: '#Comprar'
    },
    {
      link: 'Torneos',
      url: '#Torneos'
    },
    {
      link: 'Trabaja con nosotros',
      url: '#Trabaja'
    }
  ]
  const PROJECTS_LINKS = [
    {
      link: 'Komunly',
      url: '#Komunly'
    },
    {
      link: 'Kanticum',
      url: '#Kanticum'
    },
    {
      link: 'Información',
      url: '#Información'
    },
    {
      link: 'Klickum',
      url: '#Klickum'
    }
  ]
  return (
    <footer className='flex gap-8 flex-col border-t-2 border-white py-6 mx-8 mt-20'>
      <div className='flex flex-wrap md:justify-between justify-center gap-8 px-8'>
        <div className='flex flex-col gap-4 w-full justify-center md:w-auto'>
          <strong className='text-center md:text-left text-xl'>Komunly</strong>
          <p className=' opacity-70 text-sm text-center md:text-left md:text-base md:max-w-40'>
            ¡Bienvenido a Komunly, ponte cómodo y disfruta el espectáculo!
          </p>
        </div>
        <div className='flex flex-col gap-4 w-full md:w-auto'>
          <strong className='text-center md:text-left text-xl'>
            Comunidad
          </strong>
          <div className='flex flex-col gap-2'>
            {COMMUNITY_LINKS.map((e) => (
              <span key={e.link} className='text-center md:text-left'>
                <a
                  href={e.url}
                  key={e.link}
                  className='relative opacity-70 md:after:bg-white md:after:h-[2px] md:after:w-full md:after:absolute md:after:left-0 md:after:bottom-0 md:after:scale-0 md:hover:after:scale-100 md:after:transition-transform'
                >
                  {e.link}
                </a>
              </span>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-4 w-full md:w-auto'>
          <strong className='text-center md:text-left text-xl'>
            Enlaces útiles
          </strong>
          <div className='flex flex-col gap-2'>
            {USEFUL_LINKS.map((e) => (
              <span key={e.link} className='text-center md:text-left'>
                <a
                  href={e.url}
                  key={e.link}
                  className='relative opacity-70 md:after:bg-white md:after:h-[2px] md:after:w-full md:after:absolute md:after:left-0 md:after:bottom-0 md:after:scale-0 md:hover:after:scale-100 md:after:transition-transform'
                >
                  {e.link}
                </a>
              </span>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-4 w-full md:w-auto'>
          <strong className='text-center md:text-left text-xl'>
            Proyectos
          </strong>
          <div className='flex flex-col gap-2'>
            {PROJECTS_LINKS.map((e) => (
              <span key={e.link} className='text-center md:text-left'>
                <a
                  href={e.url}
                  className='relative opacity-70 md:after:bg-white md:after:h-[2px] md:after:w-full md:after:absolute md:after:left-0 md:after:bottom-0 md:after:scale-0 md:hover:after:scale-100 md:after:transition-transform'
                >
                  {e.link}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
      <span className='flex justify-center text-sm md:text-base border-t-2 border-white pt-4'>
        Todos los derechos reservados a Kaoticode 2024 ©
      </span>
    </footer>
  )
}

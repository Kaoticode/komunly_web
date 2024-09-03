export function Footer() {
  const COMMUNITY_LINKS = [
    {
      link: 'K Komunly',
      url: ''
    },
    {
      link: 'Instagram',
      url: ''
    },
    {
      link: 'WhatsApp',
      url: ''
    },
    {
      link: 'Email',
      url: ''
    },
    {
      link: 'Discord',
      url: ''
    }
  ]
  const USEFUL_LINKS = [
    {
      link: 'Términos y condiciones',
      url: ''
    },
    {
      link: 'Comprar códigos',
      url: ''
    },
    {
      link: 'Torneos',
      url: ''
    },
    {
      link: 'Trabaja con nosotros',
      url: ''
    }
  ]
  const PROJECTS_LINKS = [
    {
      link: 'Komunly',
      url: ''
    },
    {
      link: 'Kanticum',
      url: ''
    },
    {
      link: 'Información',
      url: ''
    },
    {
      link: 'Klickum',
      url: ''
    }
  ]
  return (
    <footer className='flex gap-8 flex-col border-t-2 border-white py-6 mx-8 mt-20'>
      <div className='flex flex-wrap md:justify-between justify-center gap-8 px-8'>
        <div className='flex flex-col gap-4 w-full justify-center md:w-auto'>
          <strong className='text-center md:text-left text-base md:text-xl'>
            Komunly
          </strong>
          <p className='text-sm text-center md:text-left md:text-base md:max-w-40'>
            ¡Bienvenido a Komunly, ponte cómodo y disfruta el espectáculo!
          </p>
        </div>
        <div className='flex flex-col gap-4 w-full md:w-auto'>
          <strong className='text-center md:text-left text-base md:text-xl'>
            Comunidad
          </strong>
          <div className='flex flex-col gap-2'>
            {COMMUNITY_LINKS.map((e) => (
              <a
                href={e.url}
                key={e.link}
                className='text-center md:text-left text-sm md:text-base'
              >
                {e.link}
              </a>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-4 w-full md:w-auto'>
          <strong className='text-center md:text-left text-base md:text-xl'>
            Enlaces útiles
          </strong>
          <div className='flex flex-col gap-2'>
            {USEFUL_LINKS.map((e) => (
              <a
                href={e.url}
                key={e.link}
                className='text-center md:text-left text-sm md:text-base'
              >
                {e.link}
              </a>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-4 w-full md:w-auto'>
          <strong className='text-center md:text-left text-base md:text-xl'>
            Proyectos
          </strong>
          <div className='flex flex-col gap-2'>
            {PROJECTS_LINKS.map((e) => (
              <a
                href={e.url}
                key={e.link}
                className='text-center md:text-left text-sm md:text-base'
              >
                {e.link}
              </a>
            ))}
          </div>
        </div>
      </div>
      <span className='flex justify-center text-xs md:text-base border-t-2 border-white pt-2'>
        Todos los derechos reservados a Kaoticode 2024 ©
      </span>
    </footer>
  )
}

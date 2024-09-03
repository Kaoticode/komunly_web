import CardServicios from "@/components/Card-servicios";
import Subtitle from "@/components/Subtitle";

export default function Servicios() {
  return (
    <div className="flex flex-col items-center justify-center my-24 mb-0 lg:my-36 lg:mb-0">
      <Subtitle text="Servicios" />
      <div className="m-12 mt-0 lg:m-36 lg:mt-0 grid grid-cols-1 md:grid-cols-2 gap-3">
        <CardServicios
          title="Publica contenido multimedia"
          description="Comparte imágenes y videos de la mejor calidad con tu comunidad. Conviértete en un Kreator y accede a eventos exclusivos por el mundo de parte de Komunly."
        />
        <CardServicios
          title="Interactua respetuosamente"
          description="Aprovecha las funcionalidades que ofrece Komunly para interactuar con los demás usuarios. Es importante que respetes las normas de la comunidad para evitar ser baneado."
        />
        <CardServicios
          title="!Acción, Reacción!"
          description="En Komunly, las buenas acciones acciones tienen recompensas. Crear contenido entretenido o de valor, ya sea en forma de imágenes, videos o texto, te permitirá ganar puntos y subir de nivel."
        />
        <CardServicios
          title="Monetiza tu cuenta"
          description="Te presentamos los komuns! Una moneda digital que puedes utilizar dentro del universo de Komunly, que podras enviar o recibir de otros usuarios y mucho más."
        />
      </div>
    </div>
  );
}

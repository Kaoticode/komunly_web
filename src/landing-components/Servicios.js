import CardServicios from "@/components/Card-servicios";

export default function Servicios() {
    return (
        <div className="flex flex-col items-center justify-center my-24 lg:my-36">
            <h2 className="text-2xl mb-8">Servicios</h2>
            <div className="m-12 mt-0 lg:m-36 lg:mt-0 grid grid-cols-1 md:grid-cols-2 gap-3">
                <CardServicios
                    title="Publica contenido multimedia"
                    description="Comparte imágenes y videos de la mejor calidad con tu comunidad. Conviértete en un Kreator y accede a eventos exclusivos por el mundo de parte de Komunly."
                />
                <CardServicios
                    title="Card Título 2"
                    description="Texto de ejemplo para la segunda tarjeta. Aquí puedes agregar una descripción breve."
                />
                <CardServicios
                    title="Card Título 3"
                    description="Texto de ejemplo para la tercera tarjeta. Aquí puedes agregar una descripción breve."
                />
                <CardServicios
                    title="Card Título 4"
                    description="Texto de ejemplo para la tercera tarjeta. Aquí puedes agregar una descripción breve."
                />
            </div>
        </div>
    )
}
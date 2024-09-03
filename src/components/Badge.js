export default function Badge({ text }) {
    return (

        <p className="relative overflow-hidden rounded-2xl px-[110px] p-4 mb-4">
            <span className="absolute inset-px z-10 flex items-center justify-center rounded-2xl bg-[#010334] text-white">{text}</span>
            <span aria-hidden className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-fuchsia-400 before:to-purple-200" />
        </p>
    )
}
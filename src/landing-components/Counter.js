"use client"

import { useState, useEffect } from 'react'

const AnimatedCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      const currentCount = Math.floor(end * percentage)

      setCount(currentCount)

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return count
}

export default function Counter() {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <h2 className="text-2xl mb-8">Estadísticas</h2>
      <div className="grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center lg:border-r-2">
          <span className="text-6xl font-bold mb-2">
            <AnimatedCounter end={1900} duration={2000} />
          </span>
          <span className="text-sm">Número de usuarios</span>
        </div>
        <div className="flex flex-col items-center lg:border-r-2">
          <span className="text-6xl lg:text-6xl font-bold mb-2">
            <AnimatedCounter end={1200} duration={2000} />
          </span>
          <span className="text-sm">Kreators</span>
        </div>
        <div className="flex flex-col items-center lg:border-r-2">
          <span className="text-6xl font-bold mb-2">
            <AnimatedCounter end={300} duration={2000} />
          </span>
          <span className="text-sm">Número de Verificados</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-6xl font-bold mb-2">Estado</span>
          <span className="text-sm">Funcionando</span>
        </div>
      </div>
    </div>
  )
}
'use client'

import React, { useState, useEffect } from 'react'
import { AlertTriangle, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Toast ({ message, type, duration = 5000 }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  const variants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="absolute top-0 right-1 left-1 z-50 max-w-sm w-full"
        >
          <div className="bg-komunly-blue-deep bg-opacity-80 backdrop-filter backdrop-blur-md rounded-lg shadow-xl border border-komunly-blue-steel p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {type === 'success'
                ? (
                <CheckCircle className="w-6 h-6 text-komunly-green-sage" />
                  )
                : (
                <AlertTriangle className="w-6 h-6 text-komunly-red-bright" />
                  )}
              <p className="text-komunly-gray-semilight text-sm">{message}</p>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

'use client'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
/* import { actionBlock } from '../actions/block'
/* const toBlockUser = '66e19846753d8b2ce30a1565' */
function Pagination ({ currentPage, totalPages }) {
  const router = useRouter()

  useEffect(() => {
    if (currentPage === totalPages) {
      router.push(`/blocks?page=${totalPages}`)
    }
  }, [currentPage, totalPages, router])

  /* const handleBlock = async () => {
    await actionBlock(toBlockUser)
  } */
  const handlePrevPage = (page) => {
    const prevPage = (Number(page) - 1)
    router.push(`/blocks?page=${prevPage}`)
  }
  const handleNextPage = (page) => {
    const nextPage = (Number(page) + 1)
    router.push(`/blocks?page=${nextPage}`)
  }

  return (
    <>
    <div className="flex items-center justify-between mt-4 sm:mt-6">
      <Button
        onClick={() => handlePrevPage(currentPage)}
        disabled={currentPage === 1}
        size="icon"
        variant="outline"
        className="w-8 h-8 sm:w-10 sm:h-10 bg-komunly-blue-ocean bg-opacity-50 border-komunly-blue-steel text-komunly-gray-semilight hover:bg-komunly-blue-sky hover:bg-opacity-70 hover:text-komunly-gray-semilight disabled:opacity-50"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="sr-only">Página anterior</span>
      </Button>
      <span className="text-xs sm:text-sm text-komunly-gray-semilight">
        Página {currentPage} de {totalPages}
      </span>
      <Button
        onClick={() => handleNextPage(currentPage)}
        disabled={currentPage === totalPages}
        size="icon"
        variant="outline"
        className="w-8 h-8 sm:w-10 sm:h-10 bg-komunly-blue-ocean bg-opacity-50 border-komunly-blue-steel text-komunly-gray-semilight hover:bg-komunly-blue-sky hover:bg-opacity-70 hover:text-komunly-gray-semilight disabled:opacity-50"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="sr-only">Página siguiente</span>
      </Button>
    </div>

    </>
  )
}

export default Pagination

'use client'
import React, { useEffect, useState } from 'react'
import { UserX, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import BlockedUserItem from './blocked-item'
import { initialBlockedUsers } from './data'

export default function BlockedUsers () {
  const [currentPage, setCurrentPage] = useState(1)
  const [blockedUsers, setBlockedUsers] = useState(initialBlockedUsers)

  const handleUnblock = (userId) => {
    setBlockedUsers(blockedUsers.filter(user => user.id !== userId))
  }

  const usersPerPage = 5
  const totalPages = Math.max(1, Math.ceil(blockedUsers.length / usersPerPage))

  useEffect(() => {
    if (totalPages < currentPage) {
      setCurrentPage(totalPages)
    }
  }, [totalPages])

  const getCurrentPageUsers = () => {
    const startIndex = (currentPage - 1) * usersPerPage
    const endIndex = startIndex + usersPerPage
    return blockedUsers.slice(startIndex, endIndex)
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-2 sm:p-4 md:p-6">
      <div className="w-full max-w-md bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md rounded-lg shadow-xl border border-gray-600">
        <div className="p-3 sm:p-4 md:p-6">
          <h2 className="flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">
            <UserX className="mr-2 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-gray-200" />
            Usuarios Bloqueados
          </h2>
          <ScrollArea className="h-[300px] sm:h-[350px] md:h-[400px] rounded-md border border-gray-500 p-2 sm:p-3 md:p-4 bg-gray-900 bg-opacity-50">
            {blockedUsers.length > 0
              ? (
              <div className="space-y-2 sm:space-y-3">
                {getCurrentPageUsers().map((user) => (
                  <BlockedUserItem key={user.id} user={user} handleUnblock={handleUnblock} />
                ))}
              </div>
                )
              : (
              <p className="text-center text-gray-200 text-sm sm:text-base">No hay usuarios bloqueados</p>
                )}
          </ScrollArea>
          <div className="flex items-center justify-between mt-4 sm:mt-6">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              size="icon"
              variant="outline"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 border-gray-500 text-gray-200 hover:bg-gray-600 hover:text-white disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Página anterior</span>
            </Button>
            <span className="text-xs sm:text-sm text-gray-200">
              Página {currentPage} de {totalPages}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              size="icon"
              variant="outline"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 border-gray-500 text-gray-200 hover:bg-gray-600 hover:text-white disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Página siguiente</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

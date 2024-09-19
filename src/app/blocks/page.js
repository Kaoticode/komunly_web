import React from 'react'
import { blockedUsers } from './components/data'
import BlockedUserItem from './components/blocked-item'
import { UserX } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Pagination from './components/pagination'
import ErrorComponent from './components/error-data'
import { cookies } from 'next/headers'
async function Blocks ({ searchParams }) {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('access_token').value
  const refToken = cookieStore.get('refresh_token').value

  const page = parseInt(searchParams.page) || 1
  const { data, currentPage, totalPages, totalItems } = await blockedUsers(page, accessToken, refToken)

  const updatedCurrentPage = Math.min(currentPage, totalPages)
  const blockedList = data

  return (
    <>
      {data
        ? (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-komunly-purple-darkest to-komunly-blue-navy p-2 sm:p-4 md:p-6">
          <div className="w-full max-w-md bg-komunly-blue-deep bg-opacity-40 backdrop-filter backdrop-blur-md rounded-lg shadow-xl border border-komunly-blue-steel">
            <div className="p-3 sm:p-4 md:p-6">
              <h2 className="flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold text-komunly-gray-semilight mb-4 sm:mb-6">
                <UserX className="mr-2 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-komunly-blue-light" />
                Usuarios Bloqueados
              </h2>

              <ScrollArea className="h-[300px] sm:h-[350px] md:h-[400px] rounded-md border border-komunly-blue-steel p-2 sm:p-3 md:p-4 bg-komunly-blue-navy bg-opacity-30">
                {totalItems > 0
                  ? (
                  <div className="space-y-2 sm:space-y-3">
                    {blockedList.map((user) => (
                      <BlockedUserItem
                      key={user._id}
                      user={user}
                      accessToken={accessToken}
                      refToken={refToken}/>
                    ))}
                  </div>
                    )
                  : (
                  <p className="text-center text-komunly-gray-semilight text-sm sm:text-base">
                    No hay usuarios bloqueados
                  </p>
                    )}
              </ScrollArea>

              <Pagination
                currentPage={updatedCurrentPage}
                totalPages={totalPages}
              />
            </div>
          </div>
        </div>
          )
        : (
        <ErrorComponent />
          )}
    </>
  )
}

export default Blocks

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
function BlockedUserItem ({ user, handleUnblock }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 rounded-md bg-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-colors">
      <div className="flex items-center space-x-3 mb-2 sm:mb-0">
        <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback className="bg-gray-600 text-white text-xs sm:text-sm">{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm sm:text-base font-semibold text-white">{user.name}</p>
          <p className="text-xs sm:text-sm text-gray-300">{user.username}</p>
        </div>
      </div>
      <Button
        onClick={() => handleUnblock(user.id)}
        variant="outline"
        size="sm"
        className="text-xs sm:text-sm bg-green-400 border-green-400 hover:bg-green-500 hover:text-white text-white transition-colors w-full sm:w-auto mt-2 sm:mt-0"
      >
        Desbloquear
      </Button>
    </div>
  )
}

export default BlockedUserItem

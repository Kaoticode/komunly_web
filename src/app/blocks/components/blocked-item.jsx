'use client'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { actionUnBlock } from '../actions/unblock'
import Toast from './toast'

function BlockedUserItem ({ user, accessToken, refToken }) {
  const [showToast, setShowToast] = useState()
  const handleUnblock = async (userId) => {
    const { unBlockOK } = await actionUnBlock(userId, accessToken, refToken)
    setShowToast(unBlockOK)
  }

  return (
    <>
     <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 rounded-md bg-komunly-blue-ocean bg-opacity-30 hover:bg-opacity-50 transition-colors">
      {showToast && <Toast message={<>
      Usuario <strong className='font-bold text-komunly-blue-light'>{user.block_to.username}</strong> desbloqueado</>} type={'success'} />}
      <div className="flex items-center space-x-3 mb-2 sm:mb-0">
        <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
          <AvatarImage alt={user.block_to.username} />
          <AvatarFallback className="bg-komunly-purple-medium text-komunly-gray-semilight text-xs sm:text-sm">{user.block_to.username.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm sm:text-base font-semibold text-komunly-gray-semilight">{user.block_to.username}</p>
          <p className="text-xs sm:text-sm text-komunly-blue-light">{user.block_to.username}</p>
        </div>
      </div>
      <Button
        onClick = {() => handleUnblock(user._id)}
        variant="outline"
        disabled={showToast}
        size="sm"
        className='text-xs sm:text-sm hover:bg-opacity-75  bg-komunly-green-deep text-komunly-gray-semilight transition-colors w-full sm:w-auto mt-2 sm:mt-0'
      >
       Desbloquear
      </Button>
    </div>
    </>

  )
}

export default BlockedUserItem

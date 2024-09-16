import React from 'react'
import BlockedUsers from './components/block-users'
async function Blocks ({ searchParams }) {
  const page = searchParams.page || '1'
  console.log(page)

  return (
    <>
    <BlockedUsers page={page}/>
    </>

  )
}

export default Blocks

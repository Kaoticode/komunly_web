'use server'
import { revalidatePath } from 'next/cache'
import { unBlockUser } from '../components/data'

export const actionUnBlock = async (blockId) => {
  const res = await unBlockUser(blockId)
  console.log(res)
  revalidatePath('/blocks')
}

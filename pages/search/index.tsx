import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'

interface indexProps {
  query: string
}

const index: React.FC<indexProps> = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
    return
  }, [])

  return <></>
}

export default index

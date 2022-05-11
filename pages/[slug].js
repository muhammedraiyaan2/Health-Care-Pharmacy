import React from 'react'
import { useRouter } from 'next/router'
const post = () => {
  const router = useRouter()
  const { slug } = router.query
  return( 
    <><br />
    <p className="text-center my-28 text-xl font-bold font-mono">404 error there is no page like: {slug}</p>
    <br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

export default post 
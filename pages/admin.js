import React from 'react'
import dynamic from 'next/dynamic'
import config from '../content/config'

const Loader = () => <p>Loading...</p>

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.init({ config })
    }),
  { ssr: false, loading: <Loader /> }
)

const Admin = () => {
  return <CMS />
}

export default Admin

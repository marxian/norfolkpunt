import dynamic from 'next/dynamic'
import config from '../content/config'

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.init({ config })
    }),
  {
    ssr: false,
    loading: function Loading() {
      return <p>Loading...</p>
    },
  }
)

const Admin = () => {
  return <CMS />
}

export default Admin

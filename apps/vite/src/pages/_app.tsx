import { Notifications } from '@dkimura/ui/notifications'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Notifications position="top-center" />
      <Outlet />
    </>
  )
}

export default Home

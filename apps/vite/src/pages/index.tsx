import { Button } from '@dkimura/ui'
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {user?.name} <button onClick={() => logout()}>Log out</button>
      </div>
    )
  } else {
    return <Button onClick={() => loginWithRedirect()}>Log in</Button>
  }
}

export default Home

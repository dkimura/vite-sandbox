import { useAuth0 } from '@auth0/auth0-react'

const SignIn = () => {
  const { loginWithRedirect, logout } = useAuth0()

  return (
    <>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={() => logout()}>Log Out</button>
    </>
  )
}

export default SignIn

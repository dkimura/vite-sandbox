import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { Routes } from 'generouted/react-router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN ?? ''}
      clientId={process.env.AUTH0_CLIENT_ID ?? ''}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Routes />
    </Auth0Provider>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from '@generouted/react-router'
import { Provider } from '@dkimura/ui'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import '@dkimura/ui/style.css'

const enableMocking = async () => {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser')
    return worker.start()
  }
}

const queryClient = new QueryClient()

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  )
})

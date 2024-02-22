import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from '@generouted/react-router'
import { Provider } from '@dkimura/ui'

import '@dkimura/ui/style.css'

import { setupWorker } from 'msw/browser'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getTaskMock } from './__generated__/task/task.msw'

const queryClient = new QueryClient()

const worker = setupWorker(...getTaskMock())
await worker.start()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)

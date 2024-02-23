import { setupWorker } from 'msw/browser'
import {
  getTasksGetAllMockHandler,
  getTasksUpdateResponseMock,
} from '../__generated__/task/task.msw'
import { HttpResponse, delay, http } from 'msw'

const handlers = [
  getTasksGetAllMockHandler(
    Array.from({ length: 10 }, (_, i) => ({
      id: i.toString(),
      description: `Description ${i}`,
      completed: i % 2 === 0,
    }))
  ),
  http.put('*/task/:taskId', async ({ params: { taskId } }) => {
    await delay(1000)

    if (taskId === '1') {
      return new HttpResponse(JSON.stringify(getTasksUpdateResponseMock()), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    return new HttpResponse(JSON.stringify(getTasksUpdateResponseMock()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }),
]

export const worker = setupWorker(...handlers)

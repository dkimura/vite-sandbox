import { setupWorker } from 'msw/browser'
import { getTaskMock } from '../__generated__/task/task.msw'

export const worker = setupWorker(...getTaskMock())

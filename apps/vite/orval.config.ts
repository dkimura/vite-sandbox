import { defineConfig } from 'orval'

const config = defineConfig({
  todoList: {
    input: './openapi.yml',
    output: {
      baseUrl: 'http://localhost:3000',
      clean: true,
      client: 'react-query',
      mock: true,
      mode: 'tags-split',
      prettier: true,
      schemas: 'src/model',
      target: 'src/__generated__/api.ts',
    },
  },
})

export default config

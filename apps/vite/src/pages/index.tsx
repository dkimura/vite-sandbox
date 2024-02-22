import { Checkbox, Container, Skeleton, Stack, Title } from '@dkimura/ui'

import { useTasksGetAll } from '../__generated__/task/task'

const Home = () => {
  const { data, isLoading } = useTasksGetAll()

  return (
    <Container size="xs">
      <Stack>
        <Title>Tasks</Title>
        <Skeleton visible={isLoading} h="8">
          <Stack>
            {data?.data.map((task) => (
              <Checkbox
                key={task.id}
                checked={task.completed}
                label={task.description}
              />
            ))}
          </Stack>
        </Skeleton>
      </Stack>
    </Container>
  )
}

export default Home

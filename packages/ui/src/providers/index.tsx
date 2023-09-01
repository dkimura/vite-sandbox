import { MantineProvider } from '@mantine/core'

import { theme } from '../theme/index'

export const Provider = ({ children }: { children: React.ReactNode }) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
)

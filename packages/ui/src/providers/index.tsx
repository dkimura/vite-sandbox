import { MantineProvider } from '..'

import { theme } from '../theme/index'

export const Provider = ({ children }: { children: React.ReactNode }) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
)

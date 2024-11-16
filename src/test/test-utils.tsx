import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const rendered = render(ui, {
    ...options,
  })
  
  return {
    user: userEvent.setup(),
    ...rendered,
  }
}

export * from '@testing-library/react'
export { customRender as render }
export { userEvent }

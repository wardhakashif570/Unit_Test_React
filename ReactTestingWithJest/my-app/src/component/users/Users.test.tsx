import { render, screen } from '@testing-library/react'
import { Users } from './Users'
import { rest } from 'msw'
import { server } from '../../mocks/server'

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />)
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(10)
  })

})
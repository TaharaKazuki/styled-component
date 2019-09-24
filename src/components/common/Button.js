import styled, { css } from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.backgroundColor}
  border: 5px solid ${props => props.theme.primaryColor}
`

export default Button
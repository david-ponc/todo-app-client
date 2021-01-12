import styled from 'styled-components'

function Button ({ color = 'primary', design = 'normal', children, ...props }) {
  return (
    <ButtonStyled color={color} design={design} {...props}>{children}</ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  font-size: var(--s-normal);
  font-weight: var(--medium);
  padding: ${({ design }) => design !== 'full' ? DESIGN[design] : DESIGN.normal};
  border-radius: 0.375em;
  background: ${({ theme, color }) => theme.colors.button[COLOR[color]].background};
  color: ${({ theme, color }) => theme.colors.button[COLOR[color]].text};
  box-shadow: ${({ theme, color }) => theme.colors.button[COLOR[color]].shadow};
  user-select: none;
  width: ${({ design }) => design === 'full' ? DESIGN[design] : 'auto'};
`

const COLOR = {
  primary: 'primary',
  neutral: 'neutral',
  'social-github': 'socialGithub'
}

const DESIGN = {
  normal: '0.75rem 2rem',
  compact: '0.5rem 1.5rem',
  full: '100%'
}

export default Button

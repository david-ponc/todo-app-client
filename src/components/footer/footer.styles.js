import styled from 'styled-components'

export const Wrapper = styled.footer`
  width: 100%;
  position: sticky;
  bottom: 0;
  z-index: 3;
  background: ${({ theme }) => theme.colors.footer.background};
  transition: background 320ms ease,
  color 320ms ease,
  border 320ms ease;
`

export const Container = styled.div`
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0.375rem 1em;
  display: grid;
  grid-template-columns: auto 1fr;
`

export const TextStyled = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.footer.color};
`

export const LinkStyled = styled.a`
  font-weight: 500;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.footer.link};
`

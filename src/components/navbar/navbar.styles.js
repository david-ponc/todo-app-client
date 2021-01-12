import styled from 'styled-components'

export const NavbarStyled = styled.header`
  max-width: 1140px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.body.background};
  z-index: 100;
`

export const NavStyled = styled.nav`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    grid-auto-flow: row;
    position: fixed;
    top: 74px;
    right: 0;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.body.background};
    padding: 1.5rem;
    grid-template-rows: repeat(auto-fill, minmax(3.5rem, 1fr));
    font-size: 1.5rem;
    justify-items: center;
    & > button {
      font-size: 1.5rem;
    }
  }
`

export const LinkStyled = styled.a`
  color: ${({ theme }) => theme.colors.link.default};
  ${({ design }) => design === 'full' ? 'display: initial;' : null}
  ${({ design }) => design === 'full' ? 'width: 100%;' : null}
  ${({ design }) => design === 'full' ? 'text-align: center;' : null}
  ${({ design }) => design === 'full' ? 'padding: 0.75rem 2rem;' : null}
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.link.hover};
  }
`

export const ItemOptionTheme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  justify-items: center;
  height: 100%;
  cursor: pointer;
  svg {
    margin-left: 1rem;
  }
`

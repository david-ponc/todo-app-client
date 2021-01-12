import styled from 'styled-components'

export const FooterStyled = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.footer.background};
`

export const ContainerStyled = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: .5rem 1.5rem;

  font-size: var(--s-small);
  color: ${({ theme }) => theme.colors.body.secondText};

  & a {
    color: ${({ theme }) => theme.colors.body.link};
    font-weight: var(--medium);
  }
`

export const AStyled = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: var(--medium);

  & > svg {
    margin-top: -2px;
    margin-left: 2px;
  }
`

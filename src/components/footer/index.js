import { Container, Wrapper, TextStyled, LinkStyled } from './footer.styles'

export default function Footer () {
  return (
    <Wrapper>
      <Container>
        <TextStyled>
          Inspirado en <LinkStyled href="https://www.dona.ai/" target="_blank" >Dona 🍩</LinkStyled>
        </TextStyled>
        <TextStyled style={{ justifySelf: 'center' }}>
          David Ponce • {new Date().getFullYear()} • <LinkStyled href="https://github.com/davidp46" target="_blank" >Github</LinkStyled>
        </TextStyled>
      </Container>
    </Wrapper>
  )
}

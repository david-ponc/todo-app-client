import Link from 'next/link'
import { DiGithubBadge } from 'react-icons/di'
import { FooterStyled, AStyled, ContainerStyled } from './footer.styles'

function Footer ({ content }) {
  return (
    <FooterStyled>
      <ContainerStyled>
        <span>
          {`${content} `}
          <Link href="/dona" ><a>
            Dona 🍩
          </a></Link>
        </span>
        <span>
          David Ponce • {' '}
          {new Date().getFullYear()} • {' '}
          <Link href="/github"><AStyled>
            Github <DiGithubBadge size={21} />
          </AStyled></Link>
        </span>
      </ContainerStyled>
    </FooterStyled>
  )
}

export default Footer

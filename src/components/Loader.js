import styled, { keyframes } from 'styled-components'

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const multicolor = keyframes`
  0% {
    text-shadow: 0 4px 16px #BEBDFF;
  }

  50% {
    text-shadow: 0 4px 16px #BDFFC4;
  }

  100% {
    text-shadow: 0 4px 16px #FFDDBD;
  }
`

const LoaderStyled = styled.div`
  width: ${({ size }) => `${size}`}px;
  height: ${({ size }) => `${size}`}px;
  border-radius: 50%;
  background-color: transparent;
  border: ${({ size }) => 0.125 * parseInt(size)}px solid rgba(0,0,0,0.32) ;
  border-left-color: ${({ theme }) => theme.colors.loader.color};
  margin: 0 auto;
  animation: ${rotate} 1.5s linear infinite;
`

export default function Loader ({ size }) {
  return (
    <LoaderStyled size={size} />
  )
}

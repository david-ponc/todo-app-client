import styled from 'styled-components'

export const Toggle = styled.button`
  cursor: pointer;
  background: transparent;
  margin:0;
  padding: 0;
  border: 0;
  outline: 0;
  width: 21px;
  height: 21px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.body.text}
`

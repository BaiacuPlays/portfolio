import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corborda};
  padding: 16px;
  border-radius: 10px;
  transition: transform 0.3s ease; /* Transição suave para o efeito */

  &:hover {
    transform: translateY(-5px); /* Move o card para cima ao passar o mouse */
  }
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.cordefundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corfundobotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  border-radius: 5px;
`

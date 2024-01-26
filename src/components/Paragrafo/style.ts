import styled from 'styled-components'

import { Props } from './index'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corpricipal
      : props.theme.corsecundaria};
  line-height: 22px;
`

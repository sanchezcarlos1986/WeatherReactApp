import React from 'react';
import styled, { css } from 'styled-components'

const Button = ({ onClick, text, primary }) => {
  return(
    primary ? <ButtonUI primary onClick={onClick}>{text}</ButtonUI> :
      <ButtonUI onClick={onClick}>{text}</ButtonUI>
  )

}

const ButtonUI = styled.button`
  background: orange;
  color: white;
  border: 0;
  padding: 10px;
  margin: 0 10px;
  border-radius:3px;
  cursor: pointer;

  ${props => props.primary && css`
    background: palevioletred;
  `}
`

export default Button;

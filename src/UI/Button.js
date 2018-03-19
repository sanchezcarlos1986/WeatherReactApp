import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({ onClick, text, primary, success, warning, danger }) => {
  if (primary) { return (<ButtonUI primary className='primary' onClick={onClick}>{text}</ButtonUI>) }
  if (success) { return (<ButtonUI success className='success' onClick={onClick}>{text}</ButtonUI>) }
  if (warning) { return (<ButtonUI warning className='warning' onClick={onClick}>{text}</ButtonUI>) }
  if (danger) { return (<ButtonUI danger className='danger' onClick={onClick}>{text}</ButtonUI>) }
  return( 
    <ButtonUI normal onClick={onClick}>{text}</ButtonUI>
  )

}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool
};

const ButtonUI = styled.button`
  background: transparent;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: ${props => props.normal ? 'palevioletred' : 'white'};
  cursor: pointer;
  margin: 0 1em;
  padding: 10px;

  ${props => props.primary && css`
    background: ${state.primary};
    border-color: ${state.primary};
  `}

  ${props => props.success && css`
    background: ${state.success};
    border-color: ${state.success};
  `}

  ${props => props.warning && css`
    background: ${state.warning};
    border-color: ${state.warning};
  `}

  ${props => props.danger && css`
    background: ${state.danger};
    border-color: ${state.danger};
  `}
`

const state = {
  primary: '#2980b9',
  success: '#27ae60',
  warning: '#f39c12',
  danger: '#c0392b',
}

export default Button;

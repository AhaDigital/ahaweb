import React from 'react'
import styled, { css } from 'styled-components'
import { AccessibilityContext } from '@/lib/contexts'
import Icon from './icons'
import { roboto } from '@/pages/styles'

const ButtonStyled = styled.button`
  min-height: 4.6rem;
  min-width: 10rem;
  max-width: 20rem;
  display: flex;
  justify-content: center;
  align-content: center;
  border: none;
  margin: 0 0.5rem;
  cursor: pointer;
  font-family: ${roboto.style.fontFamily},
    ${({ theme, isTabbing, variant }) =>
      theme &&
      variant === 'transparent-button' &&
      css`
        background-color: transparent;
        color: ${theme.palette.negative.black};
        outline-offset: 0.2rem;
        text-decoration: none;
        &:hover {
          color: ${theme.palette.positive.blue.default};
        }
        ${isTabbing &&
        css`
          &:focus {
            outline: 0.4rem solid ${theme.palette.positive.blue.dark};
            color: ${theme.palette.positive.blue.dark};
          }
        `}
      `};
`

const IconStyled = styled.span`
  width: 2.6rem;
  display: block;
  align-self: center;
  margin: ${props => (props.iconRight ? '0 0 0 0.5rem' : '0 0.5rem 0 0')};
`

const Children = styled.span`
  display: flex;
  align-self: center;
`

const Button = ({ icon, iconRight = false, variant, cb, ...rest }) => {
  const { isTabbing } = React.useContext(AccessibilityContext)
  const { children, ariaLabel } = rest
  return (
    <ButtonStyled
      onClick={cb}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      isTabbing={isTabbing}
      variant={variant}
    >
      {typeof icon === 'string' && icon.length > 0 && !iconRight && (
        <IconStyled>
          <Icon iconName={icon} />
        </IconStyled>
      )}
      <Children>{children}</Children>
      {typeof icon === 'string' && icon.length > 0 && iconRight && (
        <IconStyled iconRight={iconRight}>
          <Icon iconName={icon} />
        </IconStyled>
      )}
    </ButtonStyled>
  )
}

export default Button

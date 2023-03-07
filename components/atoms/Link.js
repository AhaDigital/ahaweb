import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import { AccessibilityContext } from '@/lib/contexts'
import Icon from './icons'
import { visuallyHidden } from '@/lib/helpers'

const base = `
  min-height: 4.6rem;
  min-width: 10rem;
  max-width: 20rem;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 0.5rem;
`

const LinkStyled = styled(Link)`
  ${base}
  ${({ theme, isTabbing, variant, srOnly }) =>
    theme &&
    variant === 'transparent-button' &&
    css`
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
      ${srOnly && visuallyHidden}
    `}
`

const ExternalLinkStyled = styled.a`
  ${base}
  ${({ theme, isTabbing, variant, srOnly }) =>
    theme &&
    variant === 'transparent-button' &&
    css`
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
      ${srOnly && visuallyHidden}
    `}
`

const IconStyled = styled.span`
  width: 2.6rem;
  display: block;
  margin: ${props => (props.iconRight ? '0 0 0 0.5rem' : '0 0.5rem 0 0')};
`

const Children = styled.span`
  display: flex;
  align-self: center;
`

// Variant: primary, secondary, primary-button, secondary-button, transparent-button
const NextLink = ({
  href,
  icon,
  iconRight,
  isExternalLink,
  variant = 'primary',
  srOnly,
  children,
}) => {
  const { isTabbing } = React.useContext(AccessibilityContext)
  return isExternalLink ? (
    <LinkStyled
      href={href}
      isTabbing={isTabbing}
      variant={variant}
      srOnly={srOnly}
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
    </LinkStyled>
  ) : (
    <ExternalLinkStyled
      href={href}
      isTabbing={isTabbing}
      variant={variant}
      srOnly={srOnly}
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
    </ExternalLinkStyled>
  )
}

export default NextLink

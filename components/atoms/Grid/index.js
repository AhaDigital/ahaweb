import {
  Container as BootstrapContainer,
  Row as BootstrapRow,
  Col as BootstrapCol,
} from 'styled-bootstrap-grid'
import styled from 'styled-components'

const StyledContainer = styled(BootstrapContainer)`
  max-width: ${props => (props.isLarge ? '1440px' : '1141px')};
`

export const Container = ({ isLarge = false, children, ...rest }) => {
  return (
    <StyledContainer isLarge={isLarge} {...rest}>
      {children}
    </StyledContainer>
  )
}

export const Row = ({ children, ...rest }) => (
  <BootstrapRow {...rest}>{children}</BootstrapRow>
)

export const Col = ({ children, ...rest }) => (
  <BootstrapCol {...rest}>{children}</BootstrapCol>
)

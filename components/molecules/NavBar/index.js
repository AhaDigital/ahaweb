import React, { useContext } from 'react'
import NextLink from '@/components/atoms/Link'
import AhaDigitalLogo from '../../atoms/AhaDigitalLogo'
import { Container, Row, Col } from '../../atoms/Grid'
import Button from '../../atoms/Button'
import { MainNav, TopNavigation, NavigationBar } from './styles'
import { AccessibilityContext } from '../../../lib/contexts'

const NavBar = ({ mainMenu = [] }) => {
  const { isTabbing } = useContext(AccessibilityContext)
  return (
    <header>
      <Container isLarge>
        <Row justifyContent="between">
          <Col col sm={6} md={2}>
            <AhaDigitalLogo />
          </Col>
          <Col col sm={6} md={8}>
            <TopNavigation isTabbing={isTabbing}>
              <TopNavigation.Item>
                <NextLink
                  href="#mainContent"
                  isTabbing={isTabbing}
                  variant="transparent-button"
                  srOnly={true}
                >
                  Till huvudinnehåll
                </NextLink>
              </TopNavigation.Item>
              <TopNavigation.Item>
                <Button
                  icon="English"
                  isTabbing={isTabbing}
                  variant="transparent-button"
                >
                  In English
                </Button>
              </TopNavigation.Item>
              <TopNavigation.Item>
                <NextLink
                  href="/kontakt"
                  isTabbing={isTabbing}
                  icon="Phone"
                  variant="transparent-button"
                >
                  Kontakt
                </NextLink>
              </TopNavigation.Item>
            </TopNavigation>
            {/* TODO: arrows...translations */}
            <MainNav aria-label="huvudmeny">
              <NavigationBar role="menubar">
                <NavigationBar.Item role="none">
                  <NextLink href="/">Start</NextLink>
                </NavigationBar.Item>
                {mainMenu.map(item => {
                  const {
                    _key,
                    page: { title = null, slug = {} },
                  } = item

                  return (
                    <NavigationBar.Item key={_key} role="none">
                      <NextLink href={slug.current}>{title}</NextLink>
                    </NavigationBar.Item>
                  )
                })}
              </NavigationBar>
            </MainNav>
          </Col>
          <Col col>Sök</Col>
        </Row>
      </Container>
    </header>
  )
}

export default NavBar

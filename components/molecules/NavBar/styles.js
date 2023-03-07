import styled, { css } from 'styled-components'

const TopNavigation = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Item = styled.div``

const MainNav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

const NavigationBar = styled.ol`
  display: flex;
`

const NavItem = styled.li`
  display: flex;
`
TopNavigation.Item = Item
NavigationBar.Item = NavItem

export { TopNavigation, MainNav, NavigationBar }

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Container, View, Menu } from 'unstyled'

const Header = ({ siteTitle }) => (
  <Component>
    <Container>
      <Menu borderless color="white">
        <Menu.Item as={Link}>{siteTitle}</Menu.Item>
      </Menu>
    </Container>
  </Component>
)

export default Header

const Component = styled(View)`
  background-color: rebeccapurple;
`

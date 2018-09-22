import React from 'react'
import styled from 'styled-components'
import { Container, Link, View } from 'unstyled'

const Footer = () => {
  return (
    <Element>
      <Container>
        <Link external to="https://www.gatsbycentral.com" color="white">
          gatsbycentral.com
        </Link>
      </Container>
    </Element>
  )
}

export default Footer

const Element = styled(View)`
  background-color: black;
  color: white;
  padding: 1rem 0;
`

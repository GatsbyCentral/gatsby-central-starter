import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'

import { Container, View } from 'unstyled'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Starter for GatsbyJS by Gatsby Central',
            },
            { name: 'keywords', content: 'gatsbyjs,gatsby,starter' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container style={{ flex: 1 }}>
          <View>{children}</View>
        </Container>
        <Footer />
      </Wrapper>
    )}
  />
)

export default Layout

const Wrapper = styled(View)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

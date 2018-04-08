import React from "react";
import BasicLink from "gatsby-link";
import styled from "styled-components";

const Element = styled.div`
  background-color: #3d348b;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
`;

const Footer = () => (
  <Element>
    <Container>
      <Link href="https://superlumen.io" target="_blank">
        Powered by superlumen
      </Link>
    </Container>
  </Element>
);

export default Footer;

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  padding: 0px 1.0875rem 1.45rem;
`;

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet
      title="Gatsby Central Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <Content>{children()}</Content>
    <Footer />
  </Wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

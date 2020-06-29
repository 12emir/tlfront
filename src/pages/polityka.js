import React from "react";
import "../style/index.scss";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Counter from "../components/counter";
import Faq from "../components/faq";
import Cta from "../components/cta";

const Polityka = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title='Page two' />
        polityka
        <Cta />
        <Faq />
        <Counter />
      </Layout>
    </>
  );
};

export default Polityka;

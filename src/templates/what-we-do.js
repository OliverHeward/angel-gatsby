import React, { useEffect } from "react"
import Layout from "../components/layout"
import Hero from "../components/AboutPage/Hero"
import ContentBelowHero from "../components/UI/ContentBelowHero"
import List from "../components/UI/List"
import InAction from "../components/Homepage/InAction"

export default ({ pageContext }) => {
  const {
    acf: { page_hero, copy, methods },
  } = pageContext

  return (
    <Layout>
      <Hero {...page_hero} />
      <ContentBelowHero title="What we do, for you." content={copy} />
      <div className="method-wrapper">
        {methods.map(method => (
          <List title={method.title} list={method.methods_list} />
        ))}
      </div>
      <InAction />
    </Layout>
  )
}

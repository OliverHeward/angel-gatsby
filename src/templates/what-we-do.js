import React from "react"
import Layout from "../components/layout"
import ContentBelowHero from "../components/UI/ContentBelowHero"
import List from "../components/UI/List"
import InAction from "../components/Homepage/InAction"
import CircleHero from "../components/UI/CircleHero"

export default ({ pageContext }) => {
  const {
    acf: { page_hero, copy, methods },
  } = pageContext

  return (
    <Layout>
      <CircleHero {...page_hero} />
      <div className="wwd-entry-header content-width">
        <ContentBelowHero
          title="What we do, for you."
          content={copy}
          page={"what-we-do"}
        />
      </div>
      <div className="method-wrapper content-width">
        {methods.map(method => (
          <List title={method.title} list={method.methods_list} />
        ))}
      </div>
      <InAction />
    </Layout>
  )
}

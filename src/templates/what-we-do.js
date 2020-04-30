import React, { useEffect } from "react"
import Layout from "../components/layout"
import Hero from "../components/AboutPage/Hero"
import ContentBelowHero from "../components/UI/ContentBelowHero";
import List from "../components/UI/List";
import InAction from "../components/Homepage/InAction";

export default ({ pageContext }) => {
  const {
    acf: {
      page_hero,
      copy
    },
  } = pageContext
  useEffect(() => {
    console.log(pageContext)
  })
  return (
    <Layout>
      <Hero {...page_hero} />
      <ContentBelowHero title="What we do, for you." content={copy}/>
      <div className="method-wrapper">
        <List />
        <List />
        <List />
      </div>
      <InAction />
    </Layout>
  )
}

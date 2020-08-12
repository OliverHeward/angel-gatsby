import React, { useEffect } from "react"

import Layout from "../components/layout"
import Hero from "../components/AboutPage/Hero"
import ContentBelowHero from "../components/UI/ContentBelowHero"
import CompanyList from "../components/AboutPage/CompanyList"
import Title from "../components/UI/Title"
import TeamGrid from "../components/AboutPage/TeamGrid/TeamGrid"
import InAction from "../components/Homepage/InAction"
import LetsTalk from "../components/UI/LetsTalk";

export default ({ pageContext }) => {

  const {
    acf: { image, about_angel, page_title, company_logos, angel_team },
  } = pageContext
  return (
    <Layout>
      <Hero {...image} />
      <ContentBelowHero title={page_title} content={about_angel} />
      <CompanyList {...company_logos} />
      <Title title={angel_team} setSVG={true} />
      <TeamGrid />
      <InAction />
      <LetsTalk />
    </Layout>
  )
}

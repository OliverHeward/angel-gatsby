/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react"
import HomeHero from "../components/HomeHero";
import Layout from '../components/layout';
import WorkSection from "../components/Homepage/WorkSection";
import InAction from "../components/Homepage/InAction";
import Story from "../components/Homepage/Story";
import WhatWeDo from "../components/WhatWeDo";
import BlogList from "../components/BlogList/BlogList";
import LetsTalk from "../components/UI/LetsTalk";
export default ({ pageContext }) => {
  // destructure from pageContext
  const { acf } = pageContext
  // This will need to change to a .map() when multiple hero elements
  // But this might never change
  // Will provide the code later on and comment out.
  const { slide_content } = acf.hero_slider[0];
  const { about_angel, bio } = acf.page_content;

  return (
    <Layout>
      <HomeHero {...slide_content} />
      <WorkSection {...bio} />
      <InAction />
      <Story {...about_angel} />
      <WhatWeDo />
      <BlogList />
      <LetsTalk />
    </Layout>
  )
}

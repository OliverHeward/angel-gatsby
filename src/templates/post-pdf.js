import React from "react"
import PDFHero from "../components/UI/pdf-hero"
import BlogContent from "../components/UI/BlogContent";
import Layout from "../components/layout";
import BlogList from "../components/BlogList/BlogList";
import ShareToSocial from "../components/UI/ShareToSocial";
import LetsTalk from "../components/UI/LetsTalk";

export default ({ pageContext }) => {
    const { title, acf: { pdf_post: { content } } } = pageContext;
    console.log(pageContext);

  return (
    <Layout>
      <PDFHero title={title} />
      <BlogContent content={content} />
      <ShareToSocial content={title}/>
      <BlogList />
      <LetsTalk />
    </Layout>
  )
}

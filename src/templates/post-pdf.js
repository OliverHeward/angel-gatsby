import React, { useState } from "react"
import PDFHero from "../components/UI/pdf-hero"
import BlogContent from "../components/UI/BlogContent"
import Layout from "../components/layout"
import BlogList from "../components/BlogList/BlogList"
import ShareToSocial from "../components/UI/ShareToSocial"
import LetsTalk from "../components/UI/LetsTalk"
import Modal from "../components/UI/Modal"
import Form from "../components/UI/Form"

export default ({ pageContext }) => {
  const [modal, setModal] = useState(false)

  const {
    title,
    acf: {
      pdf_post: { content },
    },
  } = pageContext

  const cancelForm = () => {
    setModal(!setModal)
  }
  const divTest = event => {
    setModal(true)
  }
  
  return (
    <Layout>
      <PDFHero title={title} clicked={divTest} />
      <Modal show={modal} modalClosed={cancelForm}>
        <Form />
      </Modal>
      <BlogContent content={content} />
      <ShareToSocial content={title} />
      <BlogList />
      <LetsTalk />
    </Layout>
  )
}

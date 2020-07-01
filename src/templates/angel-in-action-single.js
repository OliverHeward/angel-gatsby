import React, { useEffect } from "react"
import Layout from "../components/layout"
import Hero from "../components/AboutPage/Hero"
import ContentBelowHero from "../components/UI/ContentBelowHero"
import InAction from "../components/Homepage/InAction"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default ({ pageContext }) => {
  useEffect(() => {
    console.log(pageContext)
  })

  const {
    title,
    acf: {
      subtitle,
      quotes,
      hero: { hero_image },
      image_section_one,
      text_section_one,
      project_group,
    },
  } = pageContext

  let project_choice = project_group.project_choice.label
  let project, carousel

  // !TODO Check how many project choices are on the backend
  if (project_choice === "Video") {
    project = (
      <div className="project-video">
        <video className="silent-video" autoPlay playsInline muted loop>
          <source src={project_group.project_video.source_url}></source>
        </video>
        <p className="copy-under-image">{project_group.project_text}</p>
      </div>
    )
  } else if (project_choice === "Image") {
    project = <div className="project-image">project image</div>
  }

  // Check the window with before choosing with image carousel type to use
  if (window.innerWidth < 1000) {
    carousel = <Carousel showArrows={true}>{image_section_one.map(one => (
      <div>
        <img src={one.image.source_url} alt="Angel In Action" />
      </div>
    ))}</Carousel>
  } else {
    carousel = image_section_one.map(one => <img src={one.image.source_url} alt="Angel In Action" />)
  }

  return (
    <Layout>
      <Hero {...hero_image} />
      <ContentBelowHero title={title} content={subtitle} />
      <div className="quote-box">
        <h2 className="quote">{quotes.quote_one}</h2>
      </div>
      <div className="images-carousel">
        {carousel}
      </div>
      <div className="text-container">
        <p className="copy-under-image">{text_section_one}</p>
      </div>
      <div className="quote-box">
        <h2 className="quote">{quotes.quote_two}</h2>
      </div>

      <div className="project-container">{project}</div>

      <div className="quote-box">
        <h2 className="quote">{quotes.quote_third}</h2>
      </div>
      <InAction />
    </Layout>
  )
}

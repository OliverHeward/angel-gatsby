import React, { useEffect } from "react"
import Layout from "../components/layout"
import HeroSquare from "../components/Heros/hero-square"
import ContentBelowHero from "../components/UI/ContentBelowHero"
import InAction from "../components/Homepage/InAction"
// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import LetsTalk from "../components/UI/LetsTalk"
import QuoteBox from "../components/UI/QuoteBox"

export default ({ pageContext }) => {

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

  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  }
  // !TODO Check how many project choices are on the backend
  if (project_choice === "Video") {
    project = (
      <div className="project-video">
        <video className="silent-video" autoPlay playsInline muted loop>
          <source src={project_group.project_video.source_url}></source>
        </video>
        <p className="copy-under-image content-width">
          {project_group.project_text}
        </p>
      </div>
    )
  } else if (project_choice === "Showreel") {
    project = (
      <div className="images-carousel">
        <Slider {...settings}>
          <div>
            <img src={project_group.showreel_group.image_0.source_url} />
          </div>
          <div>
            <img src={project_group.showreel_group.image_1.source_url} />
          </div>
          <div>
            <img src={project_group.showreel_group.image_2.source_url} />
          </div>
        </Slider>
        <p className="copy-under-image content-width">
          {project_group.project_text}
        </p>
      </div>
    )
  }

  return (
    <Layout>
      <HeroSquare {...hero_image} />
      <ContentBelowHero
        page="angel-in-action-single"
        title={title}
        content={subtitle}
      />
      <QuoteBox copy={quotes.quote_one} />
      <div className="images-carousel">
        <Slider {...settings}>
          {image_section_one.map(one => (
            <div>
              <img src={one.image.source_url} alt="Angel In Action" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-container">
        <p className="copy-under-image content-width">{text_section_one}</p>
      </div>
      {quotes.quote_two ? <QuoteBox copy={quotes.quote_two} /> : null}
      {project ? <div className="project-container">{project}</div> : null}
      {quotes.quote_third ? <QuoteBox copy={quotes.quote_third} /> : null}

      <InAction />
      <LetsTalk />
    </Layout>
  )
}

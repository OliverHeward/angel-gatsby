import React, { useEffect } from "react"
import Layout from "../components/layout"

export default ({ pageContext }) => {
  const {
    acf: { title, contact_info },
  } = pageContext

  // When Contact page mounts, set page to black
  useEffect(() => {
    document.body.classList.add("contact-page")
    return () => {
      document.body.classList.remove("contact-page")
    }
  })
  return (
    <Layout>
      <div className="contact-container">
        <h1 className="page-title">{title}</h1>
        {contact_info.map(info => (
          <h2 className="contact-title">
            {info.text}{" "}
            <a className="pink" href="">
              {info.email}
            </a>
          </h2>
        ))}
        <h2 className="contact-title">
          Wanna drop in?
          <span className="pink">WeWork 145 City Road, London EC1V 1AZ</span>
        </h2>
      </div>
      <a href="https://goo.gl/maps/FmzcdwGAyvF2" target="_blank" className="map-wrapper" rel="noopener noreferrer">
        <img src="https://www.angellondon.co.uk/wp-content/themes/angel-starter-master/assets/angel_map.jpg" className="map" alt="Angel Office on Google Maps" />
      </a>
    </Layout>
  )
}

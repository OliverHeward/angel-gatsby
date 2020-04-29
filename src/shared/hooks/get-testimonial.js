import { useStaticQuery, graphql } from "gatsby"

// filter used to set filter string value
const useWordpressTestimonial = () => {
  const { allWordpressWpTestimonials } = useStaticQuery(graphql`
    query sitePostWordpressAndSitePostWordpress {
      allWordpressWpTestimonials {
        edges {
          node {
            id
            title
            acf {
              testimonial
              referee
              company
            }
          }
        }
      }
    }
  `)
  return allWordpressWpTestimonials
}

export default useWordpressTestimonial

import { useStaticQuery, graphql } from "gatsby"

const useWordpressCaseStudy = () => {
  const { allWordpressWpAngelInAction } = useStaticQuery(graphql`
    query SitePostWordpress {
  allWordpressWpAngelInAction(limit: 4) {
    edges {
      node {
        title
        link
        id
        slug
        acf {
          hero {
            hero_image {
                source_url
            }
          }
        }
      }
    }
  }
    }`)
    return allWordpressWpAngelInAction
}

export default useWordpressCaseStudy;

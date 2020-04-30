import { useStaticQuery } from "gatsby"
const useWordpressInAction = () => {
  const { allWordpressPage } = useStaticQuery(graphql`
    query sitePageWordpress {
      allWordpressPage(filter: { title: { regex: "/Home/" } }) {
        edges {
          node {
            id
            title
            acf {
              page_content {
                in_action {
                  title
                  text
                }
              }
            }
          }
        }
      }
    }
  `)
  return allWordpressPage
}

export default useWordpressInAction

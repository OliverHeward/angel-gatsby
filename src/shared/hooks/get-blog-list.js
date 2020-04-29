import { useStaticQuery, graphql } from "gatsby"

const useWordpressBlogList = () => {
  const { allWordpressPost } = useStaticQuery(graphql`
    query sitePostWordpress {
      allWordpressPost(limit: 6) {
        edges {
          node {
            id
            title
            slug
            modified
            author {
                name
            }
            date
            link
            acf {
              insight_type
              pdf_post {
                title
                content
              }
              blog_post {
                image
                content
              }
              instagram {
                title
                photo_cover {
                    source_url
                }
                link
              }
              music {
                song
                artist
                cover_photo {
                    source_url

                }
                spotify_uri
              }
              notes {
                note_text
              }
            }
          }
        }
      }
    }
  `)
  return allWordpressPost
}

export default useWordpressBlogList;

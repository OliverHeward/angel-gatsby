/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // create homeslice redirect to /home
  createRedirect({
    fromPath: "/",
    toPath: "/home",
    redirectInBrowser: true,
    isPermenant: true,
  })

  return new Promise((resolve, reject) => {
    // ====== Pages (Wordpress Native) ======
    graphql(`
    {
        allWordpressPage {
        edges {
          node {
            id
            title
            slug
            template
            content
            acf {
              cta_text
              page_title
              hero_image
              info
              legal_copy
              copy
              company_logos {
                logo {
                  source_url
                }
                dummy
              }
              methods {
                title
                methods_list {
                  bold_word
                }
              }
              page_hero {
                id
                title
                source_url
              }
                        title
              subtitle
              contact_info {
                text
                email
              }
              about_angel
              angel_team
              image {
                source_url
                id
                title
              }
              hero_slider {
                is_video
                slide_content {
                  svg_title
                  slide_text_line_1
                     slide_text_line_2
                  slide_text_line_3
                  upper_subtitle
                  main_title
                  lower_subtitle
                  full_image {
                    id
                    title
                    source_url
                  }
                  mobile_image {
                    id
                    title
                    source_url
                  }
                  slide_video {
                    source_url
                  }
                  svg_headline_video {
                    source_url
                  }
                }
              }
              page_content {
                bio {
                  title
                  text
                  gif_image {
                    source_url
                  }
                  mp4_file {
                    source_url
                  }
                }
                about_angel {
                  title
                  text
                  cta_text
                  gif_image {
                    source_url
                  }
                  mp4_file {
                    source_url
                  }
                }
                sip {
                  title
                  text
                  cta_text
                }
              }
            }
          }
        }
      }
    }
    
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      const pageTemplate = path.resolve("./src/templates/page.js")
      const homepageTemplate = path.resolve("./src/templates/home.js")
      const aboutTemplate = path.resolve("./src/templates/about-page.js")
      const whatWeDoTemplate = path.resolve("./src/templates/what-we-do.js");
      const angelInAction = path.resolve("./src/templates/angel-in-action.js");
      _.each(result.data.allWordpressPage.edges, edge => {
        let edgeSwitch = edge.node.template
        // Set RESULT -> default template to /page.js
        let result = slash(pageTemplate)
        switch (edgeSwitch) {
          case "front-page.php":
            result = slash(homepageTemplate)
            break;
          case "page-about.php":
            result = slash(aboutTemplate);
            break;
          case "page-what-we-do.php":
            result = slash(whatWeDoTemplate);
            break;
          case "archive-angel-in-action.php":
            result = slash(angelInAction);
            break;
          default:
            result = slash(pageTemplate)
            break;
        }

        createPage({
          path: `/${edge.node.slug}/`,
          component: result,
          context: edge.node,
        })
      })
      resolve()
    })
  })
}

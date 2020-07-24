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
    `)
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pageTemplate = path.resolve("./src/templates/page.js")
        const homepageTemplate = path.resolve("./src/templates/home.js")
        const aboutTemplate = path.resolve("./src/templates/about-page.js")
        const whatWeDoTemplate = path.resolve("./src/templates/what-we-do.js")
        const angelInAction = path.resolve("./src/templates/angel-in-action.js")
        const contactPage = path.resolve("./src/templates/contact.js")
        _.each(result.data.allWordpressPage.edges, edge => {
          let edgeSwitch = edge.node.template
          // Set RESULT -> default template to /page.js
          let result = slash(pageTemplate)
          switch (edgeSwitch) {
            case "front-page.php":
              result = slash(homepageTemplate)
              break
            case "page-about.php":
              result = slash(aboutTemplate)
              break
            case "page-what-we-do.php":
              result = slash(whatWeDoTemplate)
              break
            case "archive-angel-in-action.php":
              result = slash(angelInAction)
              break
            case "page-contact.php":
              result = slash(contactPage)
              break
            default:
              result = slash(pageTemplate)
              break
          }

          createPage({
            path: `/${edge.node.slug}/`,
            component: result,
            context: edge.node,
          })
        })
        resolve()
      })

      .then(() => {
        graphql(
          `
            {
              allWordpressWpAngelInAction {
                edges {
                  node {
                    title
                    slug
                    excerpt
                    acf {
                      quotes {
                        quote_one
                        quote_two
                        quote_third
                      }
                      subtitle
                      hero {
                        hero_image {
                          title
                          source_url
                        }
                      }
                      image_section_one {
                        image {
                          source_url
                        }
                      }
                      text_section_one
                      project_group {
                        project_choice {
                          value
                          label
                        }
                        project_video {
                          source_url
                        }
                        showreel_group {
                          image_0 {
                            source_url
                          }
                          image_1 {
                            source_url
                          }
                          image_2 {
                            source_url
                          }
                        }
                        project_text

                      }
                      text_section_two
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.error) {
            console.log(result.errors)
            reject(result.errors)
          }
          const angelInAction = path.resolve(
            "./src/templates/angel-in-action-single.js"
          )
          // Create a detailed page for each post node
          // Using the Wordpress slug for the slug
          _.each(result.data.allWordpressWpAngelInAction.edges, edge => {
            createPage({
              path: `/angel-in-action/${edge.node.slug}/`,
              component: slash(angelInAction),
              context: edge.node,
            })
          })
          resolve()
        })
      })
      // ==== End -> Angel In Action Single Post Type ====
      // ==== Posts (Wordpress Native and ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressPost {
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
                        image {
                          source_url
                        }
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
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const posts = result.data.allWordpressPost.edges
          const postsPerPage = 10
          const numberOfPages = Math.ceil(posts.length / postsPerPage)
          const blogTemplate = path.resolve("./src/templates/insightsList.js")

          Array.from({ length: numberOfPages }).forEach((page, index) => {
            createPage({
              component: slash(blogTemplate),
              path: index === 0 ? "/insights/" : `/insights/${index + 1}`,
              context: {
                posts: posts.slice(
                  index * postsPerPage,
                  index * postsPerPage + postsPerPage
                ),
                numberOfPages,
                currentPage: index + 1,
              },
            })
          })

          // Post Template
          const postTemplate = path.resolve("./src/templates/post.js")
          const pdfTemplate = path.resolve("./src/templates/post-pdf.js")
          _.each(posts, post => {
            let postSwitch = post.node.acf.insight_type
            let postResult = slash(postTemplate)
            switch (postSwitch) {
              case "PDF Post":
                postResult = slash(pdfTemplate)
                break
              default:
                postResult = slash(postTemplate)
                break
            }
            createPage({
              path: `/insight/${post.node.slug}`,
              component: slash(postResult),
              context: post.node,
            })
          })
          resolve()
        })
      })
  })
}

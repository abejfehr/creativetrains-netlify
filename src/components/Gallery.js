import React from "react"
import { StaticQuery, graphql } from "gatsby"
export const Gallery = () => (
  <StaticQuery
    query={graphql`
      query GalleryImageQuery {
        allMarkdownRemark(
          # sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "gallery-image" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
              }
            }
          }
        }
      }
    `}
    render={data => <div></div>}
  />
)

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Gallery = () => (
  <StaticQuery
    query={graphql`
      query GalleryImageQuery {
        allMarkdownRemark(
          # sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { type: { eq: "gallery-image" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
        ))}
      </div>
    )}
  />
)

import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import { ContactForm } from "../components/ContactForm"

import cratedTrain from "../img/crated-train.jpg"

export const RollingStockPageTemplates = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description
}) => (
  <>
    <div>rolling stock</div>
  </>
)

RollingStockPageTemplates.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
}

const RollingStockPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout heading={frontmatter.heading} subheading={frontmatter.subheading}>
      <RollingStockPageTemplates
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
      />
    </Layout>
  )
}

RollingStockPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default RollingStockPage

export const pageQuery = graphql`
  query RollingStockPageTemplates {
    markdownRemark(frontmatter: { templateKey: { eq: "rolling-stock-page" } }) {
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`

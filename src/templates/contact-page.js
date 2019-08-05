import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import { ContactForm } from "../components/ContactForm"

import cratedTrain from "../img/crated-train.jpg"

export const ContactPageTemplates = ({
  image,
  title,
  heading,
  description
}) => (
  <>
    <section>
      <div style={{ flex: 1 }}>
        <p>
          Contact Creative Train Company by phone or email or by filling out the
          form to the right to discuss your scale trains and see how we can work
          together to fit your needs.
        </p>

        <p>
          Phone: <a href="tel:+12047249827">+1 (204) 332-0492</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:henry@creativetrains.ca">henry@creativetrains.ca</a>
        </p>
      </div>

      <div style={{ flex: 1 }}>
        <ContactForm />
      </div>
    </section>
  </>
)

ContactPageTemplates.propTypes = {
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

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout heading={frontmatter.heading} subheading={frontmatter.subheading}>
      <ContactPageTemplates
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query ContactPageTemplates {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`

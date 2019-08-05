import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import { ContactForm } from "../components/ContactForm"

import cratedTrain from "../img/crated-train.jpg"

export const ShippingInfoPageTemplates = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description
}) => (
  <>
    <style>
      {`
    .shipping-info-page {
      flex-direction: column;
    }

    .shipping-info-page h1 {
      text-align: left;
    }

    .shipping-info-page > figure > img {
      max-width: 65%;
      margin: 0 auto;
    }

    .shipping-info-page > figure {
      text-align: center;
    }

    .shipping-info-page figcaption {
      font-size: 14px;
    }

  `}
    </style>
    <section class="shipping-info-page">
      <h1>Shipping Info</h1>
      <figure>
        <img src={cratedTrain} alt="crated train car" />
        <figcaption>A Creative Train Company crate</figcaption>
      </figure>
      <p>
        All Creative Train Company cars are shipped by freight, and we're proud
        to announce that we're able to ship our train cars anywhere within
        Canada and the continental United States.
      </p>
      <p>
        Shipping cost for train cars varies greatly from order to order because
        of the weight of the train car being shipped and the destination.
        Residential delivery is not currently possible; instead, train cars will
        be conveniently sent to the shipping depot nearest to you for pickup.
        Crating costs are factored into the shipping fee, so there's no hidden
        costs.
      </p>
      <p>
        <Link to="/contact">Inquire today</Link> for more personalized pricing
        information!
      </p>
    </section>
  </>
)

ShippingInfoPageTemplates.propTypes = {
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
      <ShippingInfoPageTemplates
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
  query ShippingInfoPageTemplates {
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

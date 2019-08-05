import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import { ContactForm } from "../components/ContactForm"
import { Gallery } from "../components/Gallery"

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description
}) => (
  <div>
    <section>
      <div style={{ flex: 2 }}>
        <p>
          Creative Train Company manufactures and sells quality 1.5&quot; and
          1.6&quot; scale train cars.
        </p>

        <p>
          Whether you're a hobbyist who's looking for a head-start or a train
          complete with paint and decals, Creative Train Company is the right
          place.
        </p>

        <p>
          Creative Train Company is accepting new orders! Contact us by phone or
          email to discuss your scale trains and see how we can work together to
          fit your needs.
        </p>

        <p>
          Phone: <a href="tel:+12043320492">+1 (204) 332-0492</a>
        </p>
        <p>
          Email:
          <a href="mailto:henry@creativetrains.ca">henry@creativetrains.ca</a>
        </p>
      </div>

      <div style={{ flex: 1 }}>
        <h3>Interested in trains?</h3>
        <p>Let us know and we'll talk.</p>
        <ContactForm />
      </div>
    </section>

    <section>
      <div style={{ flex: 2 }}>
        <h2>Gallery</h2>
        <p>
          See some of the train cars and accessories that have been built by
          Creative Train Company in the past. Not looking for anything custom?{" "}
          <Link to="/contact">Contact us</Link> for details.
        </p>
        <ul className="new gallery">
          <Gallery />
          {/* {% for post in site.posts %}
          <li>
            <a href="{{ post.url }}">
              <figure>
                <img src="{{ post.headline_image_url }}" />
                <figcaption>{{ post.title }}</figcaption>
              </figure>
            </a>
          </li>
          {% endfor %} */}
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <h3>Client Testimonial</h3>
        <blockquote>
          <p>
            ...what a great job you did on the Shorty Tank Car. We love the
            detail, and the quality of the car. The new tanker will now be
            servicing towns along the Great Western Island Railroad. Looking
            forward to buying more rolling stock from Creative Train Company.
          </p>
        </blockquote>
        <cite>– Wayne and Barbara, Great Western Island Railroad</cite>
      </div>
    </section>

    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </div>
)

IndexPageTemplate.propTypes = {
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
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`

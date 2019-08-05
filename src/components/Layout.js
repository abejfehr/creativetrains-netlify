import React from "react"
import { Helmet } from "react-helmet"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import useSiteMetadata from "./SiteMetadata"

const TemplateWrapper = ({ children, heading, subheading }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"
        />
        <style>
          {`
              body {
                font-family: tahoma;
                background-color: #ecf0f1;
                margin: 0;
                padding: 0;
              }

              h1 {
                text-align: center;
                margin-top: 0;
              }

              .logo {
                /* margin: 0 auto; */
                display: block;
                width: 160px;
                height: 160px;
              }

              .tagline {
                text-align: center;
                font-style: italic;
              }

              main {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
              }

              .container {
                box-sizing: border-box;
                padding: 15px;
              }

              .gallery-link {
                padding: 5px;
                display: inline-block;
                position: relative;
                border: 1px solid lightgray;
                overflow: hidden;
              }

              nav {
                text-align: center;
              }

              nav a {
                margin: 0 20px;
              }

              section {
                display: flex;
                flex-direction: column;
                padding: 4px;
              }

              .gallery-link > div {
                width: 100%;
                text-align: center;
              }

              input {
                height: 24px;
              }

              input,
              textarea {
                margin: 4px;
                font-size: 14px;
                padding: 3px;
              }

              textarea {
                font-family: tahoma;
                min-height: 60px;
              }

              input[type="submit"] {
                border-radius: 0;
                height: 38px;
              }

              @media only screen and (min-width: 1050px) {
                .container {
                  width: 1000px;
                  margin: 0px auto;
                }

                section {
                  flex-direction: row;
                }
              }

          `}
        </style>
        {/*

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" /> */}
      </Helmet>
      <Navbar heading={heading} subheading={subheading} />
      <div class="container" style={{ flex: 1 }}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper

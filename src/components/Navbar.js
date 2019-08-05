import React from "react"
import { Link } from "gatsby"
import logo from "../img/logo.png"

export const Navbar = ({ heading, subheading }) => (
  <header>
    <style>
      {`
    nav {
      background-color: #7f8c8d;
      color: #ecf0f1;
      border-top: 1px solid lightgray;
      border-bottom: 1px solid lightgray;
      margin: 20px 0;
      padding: 5px 0;
    }

    nav a {
      color: #ecf0f1;
    }
    `}
    </style>

    <div>
      <div
        class="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={logo}
          alt="Creative Train Company"
          class="logo"
          style={{ marginRight: "20px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <h1 style={{ textAlign: "center", marginTop: 0 }}>{heading}</h1>
          <p class="tagline">{subheading}</p>
          <p style={{ textAlign: "right" }}>
            Check us out on{" "}
            <a href="https://www.facebook.com/creativetraincompany/">
              Facebook
            </a>
          </p>
        </div>
      </div>

      <nav>
        <div class="container">
          <Link to="/">Home</Link>
          <Link to="/rolling-stock">Rolling Stock</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
    {/*// <nav
      //   className="navbar is-transparent"
      //   role="navigation"
      //   aria-label="main-navigation"
      // >
      //   <div className="container">
      //     <div className="navbar-brand">
      //       <Link to="/" className="navbar-item" title="Logo">
      //         <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
      //       </Link>
      //       <div
      //         className={`navbar-burger burger ${this.state.navBarActiveClass}`}
      //         data-target="navMenu"
      //         onClick={() => this.toggleHamburger()}
      //       >
      //         <span />
      //         <span />
      //         <span />
      //       </div>
      //     </div>
      //     <div
      //       id="navMenu"
      //       className={`navbar-menu ${this.state.navBarActiveClass}`}
      //     >
      //       <div className="navbar-start has-text-centered">
      //         <Link className="navbar-item" to="/about">
      //           About
      //         </Link>
      //         <Link className="navbar-item" to="/products">
      //           Products
      //         </Link>
      //         <Link className="navbar-item" to="/blog">
      //           Blog
      //         </Link>
      //         <Link className="navbar-item" to="/contact">
      //           Contact
      //         </Link>
      //         <Link className="navbar-item" to="/contact/examples">
      //           Form Examples
      //         </Link>
      //       </div>
      //       <div className="navbar-end has-text-centered">
      //         <a
      //           className="navbar-item"
      //           href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
      //           target="_blank"
      //           rel="noopener noreferrer"
      //         >
      //           <span className="icon">
      //             <img src={github} alt="Github" />
      //           </span>
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </nav>*/}
  </header>
)

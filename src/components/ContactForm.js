import React from "react"

export const ContactForm = () => (
  <form
    action="https://formspree.io/abe@creativetrains.ca"
    method="post"
    style={{ display: "flex", flexDirection: "column" }}
  >
    <input type="text" name="name" placeholder="Your name" />
    <input type="email" name="_replyto" placeholder="Your email" />
    <textarea
      name="message"
      placeholder="Write us a nice message here"
    ></textarea>
    <input type="hidden" name="_cc" value="henry@creativetrains.ca" />
    <input type="submit" value="Send" />
  </form>
)

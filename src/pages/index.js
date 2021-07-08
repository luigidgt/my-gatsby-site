import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://images.ctfassets.net/l893v89mix1e/5eszeTLjcnuOuhrALPhk92/67838bc65dcfe79ccc0e14cf511a2749/Book_1x1.jpg?w=1600&h=1600&q=90"
      />
    </Layout>
  )
}

export default IndexPage

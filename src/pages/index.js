import React from 'react'
import { graphql } from 'gatsby'
import { SectionTitle } from '../components/Section'
import { Container } from '../components/Container'
import { Hero, HeroIntro, HeroTitle, HeroTeaser } from '../containers/Hero'
import { LatestArticles } from '../containers/LatestArticles'
import { Seo } from '../containers/Seo'

export default function IndexPage({ data }) {
  return (
    <>
      <Hero>
        <Seo />
        <HeroIntro>Hi, my name is</HeroIntro>
        <HeroTitle>
          <strong>Ö. Faruk Çakı.</strong>
          {/* <br />I help people make the web great. */}
        </HeroTitle>
        <HeroTeaser>
          I am CSE student at Marmara University(3rd), Istanbul. I love Node.js
          and my main interest is web applications. I write React.js
        </HeroTeaser>
      </Hero>
      <Container forwardedAs="section" pb={5}>
        <SectionTitle forwardedAs="h2">Social</SectionTitle>
      </Container>
      <Container forwardedAs="section" pb={5}>
        <SectionTitle forwardedAs="h2">Blog</SectionTitle>
        <LatestArticles edges={data.allMdx.edges} />
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query($langKey: String!) {
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { ne: false } }
        fields: { langKey: { eq: $langKey } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            link
          }
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

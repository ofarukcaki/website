import React from 'react'
import styled from '@xstyled/styled-components'
import { Link } from 'gatsby'
import { SectionTitle } from '../components/Section'
import { Container } from '../components/Container'
import { Hero, HeroIntro, HeroTitle, HeroTeaser } from '../containers/Hero'
import { LatestArticles } from '../containers/LatestArticles'
import { Seo } from '../containers/Seo'
import Socials from '../components/Socials'

const Small = styled.small`
  color: accent;
`

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
          I am a CSE student at Marmara University, Istanbul. I love Node.js and
          my main area of interest is web applications. <Small><Link to="/about">read more</Link></Small>
        </HeroTeaser>
      </Hero>
      <Container forwardedAs="section" pb={5}>
        <SectionTitle forwardedAs="h2">Social</SectionTitle>
        <Socials />
      </Container>
      <Container forwardedAs="section" pb={5}>
        <SectionTitle forwardedAs="h2">Blog</SectionTitle>
        {/* <LatestArticles edges={data.allMdx.edges} /> */}
        <LatestArticles />
      </Container>
    </>
  )
}
/*
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
*/

import React from 'react'
import { graphql } from 'gatsby'
import { SectionTitle, SectionDescription } from '../components/Section'
import { PageContainer } from '../components/Container'
import { LatestArticles } from '../containers/LatestArticles'
import { Seo } from '../containers/Seo'

export default function Blog({ data }) {
  return (
    <>
      <Seo title="Ö. Faruk Çakı — Blog" />
      <PageContainer>
        <SectionTitle>Blog</SectionTitle>
        <SectionDescription>
          I write about Bitcoin <small>(in Turkish)</small>, React and Node.js
          on my{' '}
          <a
            style={{ textDecoration: 'underline' }}
            target="_blank"
            href="https://medium.com/@ofarukcaki"
          >
            Medium
          </a>
        </SectionDescription>
        <LatestArticles edges={data.allMdx.edges} />
      </PageContainer>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { ne: false } }
        fields: { langKey: { eq: "en" } }
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

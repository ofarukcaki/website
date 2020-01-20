import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { SectionTitle, SectionDescription } from '../components/Section'
import { Container } from '../components/Container'
import { Seo } from '../containers/Seo'
import { AboutContainer, AboutText, AboutImage } from '../containers/About'

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "react-europe.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <Seo title="About Ömer Faruk Çakı" />
      <AboutContainer>
        <Container>
          <SectionTitle>Hi I&#39;m Faruk!</SectionTitle>
          <SectionDescription>
            I&#39;m a Computer Science & Engineering student
            <small>
              (3
              <span style={{ verticalAlign: 'super', fontSize: '10px' }}>
                rd
              </span>
              )
            </small>{' '}
            at Marmara University.
          </SectionDescription>
        </Container>
        {/* <AboutImage img={data.photo.childImageSharp} /> */}
        <AboutText>
          <p>
            Don&apos;t hesitate to reach out on{' '}
            <a href="https://twitter.com/ofarukcaki">Twitter</a> or by{' '}
            <a href="mailto:contact@gofarukcaki.com">email</a>.
          </p>
        </AboutText>
      </AboutContainer>
    </>
  )
}

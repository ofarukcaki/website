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

const ResumeLink = styled.a`
  color: lighter;
`
const P = styled.p`
  font-size: 1.15rem;
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
          my main area of interest is web applications.{' '}
          <Small>
            <Link to="/about">read more</Link>
          </Small>
        </HeroTeaser>
        <P>
          Check out my <ResumeLink href="/resume.pdf">Resume</ResumeLink>{' '}
        </P>
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

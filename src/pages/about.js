import React from 'react'
import { SectionTitle, SectionDescription } from '../components/Section'
import { Container } from '../components/Container'
import { Seo } from '../containers/Seo'
import { AboutContainer, AboutText, AboutImage } from '../containers/About'
import styled from '@xstyled/styled-components'

const Link = styled.a`
  // text-decoration: underline;
  // box-shadow: inset 0 0px 0 #eeeeee82, inset 0 -1px 0 #eeeeee82
  color: lighter;
`

export default function AboutPage() {
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
          <SectionDescription>
            <p>
              Even I have sufficient knowledge in various programming languages;
              my favorite one is Node.js. I can call myself as a Web Developer
              but I'm not only limited with web, I also enjoy coding C++. {'  '}
              Here is my{' '}
              <Link href="https://www.hackerrank.com/ofarukcaki">
                Hackerrank
              </Link>{' '}
              profile.
            </p>
            <p>
              My open-source project can be found on my{' '}
              <Link href="https://github.com/ofarukcaki">Github</Link>, I also
              publish Node.js packages on{' '}
              <Link href="https://www.npmjs.com/~ofarukcaki">NPM</Link>.
            </p>
            <p>
              Besides these, I have a special interest in Bitcoin and a little
              bit for the blockchain. I try to write about bitcoin
              <small>(usually technical stuff)</small> on my{' '}
              <Link href="https://medium.com/@ofarukcaki">blog</Link>, in
              Turkish.
            </p>
          </SectionDescription>
        </Container>
        {/* <AboutImage img={data.photo.childImageSharp} /> */}
        <AboutText>
          <p>
            Don&apos;t hesitate to reach out on{' '}
            <a href="https://twitter.com/ofarukcaki">Twitter</a> or by{' '}
            <a href="mailto:contact@ofarukcaki.com">email</a>.
          </p>
        </AboutText>
      </AboutContainer>
    </>
  )
}

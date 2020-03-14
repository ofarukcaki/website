import React from 'react'
import styled, { keyframes, th, css, Box } from '@xstyled/styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import humanNumber from 'human-number'
import { FaGithub } from 'react-icons/fa'
import { Seo } from './Seo'
import { SectionTitle, SectionDescription } from '../components/Section'
import { useLangKey } from '../components/I18nContext'
import { PageContainer } from '../components/Container'
import { ProjectShape } from '../components/Project'
import { Card, CardBody, CardText } from '../components/Card'
import '../assets/projects.css'

export function ProjectsPageTemplate({ title, intro }) {
  return (
    <>
      <Seo title={`Ö. Faruk Çakı — ${title}`} />
      <PageContainer>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription>{intro}</SectionDescription>
        {/* <Projects data={data} projects={projects} /> */}
        <Bok />
        {/* <p>Page under construction...</p> */}
      </PageContainer>
    </>
  )
}

const Title = styled.a`
  color: lighter;
  font-size: 1.3rem;
  display: inline-block;
  margin: 0;
`

const Description = styled.p`
  color: light300;
  margin-top: 8px;
`

const Badge = styled.span`
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.8rem;
  color: light300;
  background-color: light700;
`

const BlobShape = props => (
  <svg width={100} height={100} viewBox="0 0 600 600" {...props}>
    <path
      d="M395.3 259c29.4 37 55.4 90 38.9 110.8-16.4 20.9-75.3 9.5-140 12.9-64.6 3.3-135.1 21.3-167.1-8.5-32.1-29.9-25.7-107.5 9.5-147.9C171.8 186 235.9 183 284.4 192c48.5 9 81.4 30 110.9 67z"
      fill="white"
    />
  </svg>
)

const ProjectItem = styled.div`
  margin-bottom: 35px;
`

const projects = [
  {
    name: 'Duckimport',
    description:
      'An open-source csv indexing tool for Elasticsearch. It is downloaded more than 250+ times. Coded in Node.js',
    url: 'https://github.com/ofarukcaki/duckimport',
  },
  {
    name: 'Smsfor.me',
    description:
      'Temporary phone number rental platform and SMS verification service. React, Express, Firebase, Mongodb.',
    badge: 'project suspended',
    url: 'https://sms-web101.firebaseapp.com/',
  },
  {
    name: 'Dataleaks',
    description:
      'Database search engine for security researchers. PHP, MySQL web app',
    url: 'https://github.com/ofarukcaki/dataleaks',
  },
  {
    name: 'Habeibeenpwned Chatbot',
    description:
      "Multiplatform AI Chatbot made for haveibeenpwned.com search. Written in Node.js using Microsoft Bot Framework and Microsoft's Language Understanding (LUIS).",
    url: 'https://github.com/ofarukcaki/HaveIBeenPwned-AI-ChatBot',
  },
]

const Bok = () => (
  <div>
    {projects.map(x => (
      <ProjectItem>
        <Title href={x.url}>{x.name}</Title> {x.badge ? <Badge>{x.badge}</Badge> : null}
        <Description>{x.description}</Description>
      </ProjectItem>
    ))}
  </div>
)

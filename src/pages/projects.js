import React from 'react'
import { ProjectsPageTemplate } from '../containers/Projects'
import styled from '@xstyled/styled-components'

const Link = styled.a`
  // text-decoration: underline;
  // box-shadow: inset 0 0px 0 #eeeeee82, inset 0 -1px 0 #eeeeee82
  color: lighter;
`

export default function ProjectsPage() {
  return (
    <ProjectsPageTemplate
      title="Projects"
      intro={
        <>
          Here I collected some of my personal projects. My course homeworks and
          other open source projects can be found on my{' '}
          <Link href="https://github.com/ofarukcaki">Github</Link> and{' '}
          <Link href="https://www.npmjs.com/~ofarukcaki">NPM</Link> pages.
        </>
      }
    />
  )
}

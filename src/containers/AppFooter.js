/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Link } from 'gatsby'
import styled, { Box } from '@xstyled/styled-components'
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Location } from '@reach/router'
import { Container } from '../components/Container'
import { useLangKey, toEnglish, toFrench } from '../components/I18nContext'

const Copyright = styled.div`
  color: light400;
  font-size: 12;
  font-family: monospace;
`

const Socials = styled.div`
  margin-left: auto;
  margin-right: -2;
  display: flex;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44;
  width: 44;
  color: lighter;
  transition: base;

  &:hover,
  &:focus {
    outline: none;
    color: accent;
  }
`

const Url = styled.a`
  color: #a4a4a4;
  text-decoration: underline;
`

const locales = {
  en: {
    twitter: 'My Twitter profile',
    github: 'My GitHub profile',
    linkedin: 'My LinkedIn profile',
    email: 'Send me an email',
  }
}

const currentYear = new Date().getFullYear()

export function AppFooter() {
  const t = locales["en"]
  return (
    <div>
      <Container display="flex" alignItems="center" mt={4} pb={0}>
        <Copyright>Ömer Faruk Çakı © {currentYear}</Copyright>
        <Socials>
          <SocialLink title={t.twitter} href="https://twitter.com/ofarukcaki">
            <FaTwitter />
          </SocialLink>
          <SocialLink title={t.github} href="https://github.com/ofarukcaki">
            <FaGithub />
          </SocialLink>
          <SocialLink
            title={t.linkedin}
            href="https://www.linkedin.com/in/ofarukcaki"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink title={t.email} href="mailto:contact@ofarukcaki.com">
            <FaEnvelope />
          </SocialLink>
        </Socials>
      </Container>
      <p style={{ textAlign: 'center', opacity: 0.5, fontSize: '13px' }}>
        This website is a{' '}
        <Url href="https://github.com/ofarukcaki/website">fork</Url> and
        originally made by{' '}
        <Url href="https://github.com/gregberge/gregberge.com">Greg Bergé</Url>{' '}
      </p>
    </div>
  )
}

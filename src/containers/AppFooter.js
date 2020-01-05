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

const currentYear = new Date().getFullYear()

const locales = {
  en: {
    twitter: 'My Twitter profile',
    github: 'My GitHub profile',
    linkedin: 'My LinkedIn profile',
    email: 'Send me an email',
  },
  fr: {
    twitter: 'Mon profil Twitter',
    github: 'Mon profil GitHub',
    linkedin: 'Mon profil LinkedIn',
    email: 'Écrivez-moi',
  },
}

export function AppFooter() {
  const langKey = useLangKey()
  const t = locales[langKey]
  return (
    <div>
      <Container display="flex" alignItems="center" mt={4} pb={4}>
        <Copyright>Ömer Faruk Çakı © {currentYear}</Copyright>
        <Socials>
          <Location>
            {({ location }) => (
              <>
                {langKey === 'en' && (
                  <SocialLink title="French" as={Link} to={toFrench(location)}>
                    <Box as="span" fontSize={20} role="img" aria-label="French">
                      🇫🇷
                    </Box>
                  </SocialLink>
                )}
                {langKey === 'fr' && (
                  <SocialLink
                    title="English"
                    as={Link}
                    to={toEnglish(location)}
                  >
                    <Box
                      as="span"
                      fontSize={20}
                      role="img"
                      aria-label="Anglais"
                    >
                      🇬🇧
                    </Box>
                  </SocialLink>
                )}
              </>
            )}
          </Location>
          <SocialLink title={t.twitter} href="https://twitter.com/neoziro">
            <FaTwitter />
          </SocialLink>
          <SocialLink title={t.github} href="https://github.com/gregberge">
            <FaGithub />
          </SocialLink>
          <SocialLink
            title={t.linkedin}
            href="https://www.linkedin.com/in/gregberge"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink title={t.email} href="mailto:hey@gregberge.com">
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

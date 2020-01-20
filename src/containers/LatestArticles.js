import React, { useState } from 'react'
import styled, { Box } from '@xstyled/styled-components'
import { Link } from 'gatsby'
import {
  Card,
  CardLink,
  CardTitle,
  CardBody,
  CardText,
} from '../components/Card'

const htmlToText = require('html-to-text')
const RSSParser = require('rss-parser')
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const parser = new RSSParser()

const Centered = styled.span`
  display: flex;
  justify-content: center;
`

const Loading = props => (
  <svg width={38} height={38} viewBox="0 0 38 38" {...props}>
    <defs>
      <linearGradient
        x1="8.042%"
        y1="0%"
        x2="65.682%"
        y2="23.865%"
        id="prefix__a"
      >
        <stop stopColor="#fff" stopOpacity={0} offset="0%" />
        <stop stopColor="#fff" stopOpacity={0.631} offset="63.146%" />
        <stop stopColor="#fff" offset="100%" />
      </linearGradient>
    </defs>
    <g transform="translate(1 1)" fill="none" fillRule="evenodd">
      <path
        d="M36 18c0-9.94-8.06-18-18-18"
        stroke="url(#prefix__a)"
        strokeWidth={2}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
      <circle fill="#fff" cx={36} cy={18} r={1}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
)

export class LatestArticles extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts: null }
  }

  componentDidMount() {
    // const p = getPosts()
    parser.parseURL(
      CORS_PROXY + 'https://medium.com/feed/@ofarukcaki',
      (err, feed) => {
        if (err) throw err

        // exclude comments
        let publishings = []
        feed.items.forEach(x => {
          if (x.categories && x.categories.length > 0) {
            publishings.push(x)
          } // its comment otherwise
        })
        // console.log(publishings)
        this.setState({ posts: publishings })
      },
    )
  }

  render() {
    if (this.state.posts === null) {
      return (
        <Centered>
          <Loading />
        </Centered>
      )
    } else {
      return (
        <Box row my={-2}>
          Check out my latest posts:
          {this.state.posts.map(edge => (
            <Box key={edge.guid} col={1} py={2}>
              <CardLink href={edge.link}>
                <Card>
                  <CardBody>
                    <CardTitle>{edge.title}</CardTitle>
                    {/* <CardText>
                      {htmlToText
                        .fromString(edge['content:encoded']).replace(/\[http.*]/g, "")
                        .slice(0, 200)}
                    </CardText> */}
                  </CardBody>
                </Card>
              </CardLink>
            </Box>
          ))}
        </Box>
      )
    }
  }
}

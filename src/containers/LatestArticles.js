import React, { useState } from 'react'
import { Box } from '@xstyled/styled-components'
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

function strip_html_tags(str) {
  if (str === null || str === '') return false
  else str = str.toString()
  return str.replace(/<[^>]*>/g, '')
}

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
        console.log(publishings)
        this.setState({ posts: publishings })
      },
    )
  }

  render() {
    if (this.state.posts === null) {
      return 'Loading...'
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

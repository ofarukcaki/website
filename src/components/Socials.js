import React from 'react'
import styled from '@xstyled/styled-components'

const List = styled.ul`
  color: #fff;
  letter-spacing: -0.025em;
  cursor: default;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  list-style: none;
  display: flex;
  justify-content: space-around;
`

const Path = styled.path`
  fill: lighter;
`

const ListElement = styled.li`
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.15);
  }
`

const Socials = () => {
  return (
    <div>
      <List>
        <ListElement>
          <a
            href="https://github.com/ofarukcaki/"
            target="_blank"
            title="Github"
          >
            {/* <span class="label">Github</span> */}
            <Github h={32} />
          </a>
        </ListElement>
        <ListElement>
          <a
            href="https://www.linkedin.com/in/ofarukcaki/"
            target="_blank"
            title="LinkedIn"
          >
            {/* <span class="label" title="">
              Linkedin
            </span> */}
            <Linkedin2 h={32} w={32} />
          </a>
        </ListElement>
        <ListElement>
          <a
            href="https://medium.com/@ofarukcaki"
            target="_blank"
            title="Medium (Blog)"
          >
            {/* <span class="label">Medium</span> */}
            <Medium h={32} w={32} />
          </a>
        </ListElement>
        <ListElement>
          <a
            href="https://unsplash.com/@ofarukcaki"
            target="_blank"
            title="Unsplash"
          >
            {/* <span class="label">Unsplash</span> */}
            <Unsplash h={32} w={32} />
          </a>
        </ListElement>
        <ListElement>
          <a
            href="https://twitter.com/ofarukcaki"
            target="_blank"
            class="icon fa-twitter"
            title="Twitter"
          >
            {/* <span class="label">Twitter</span> */}
            <Twitter h={32} w={32} />
          </a>
        </ListElement>
        {/* <li>
          <a
            href="mailto:contact@ofarukcaki.com"
            class="icon fa-envelope-o"
            title="Contact with me"
          >
            <Email h={32} w={32}/>
          </a>
        </li> */}
      </List>
    </div>
  )
}

const Github = p => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={p.h}>
    <g data-name="Layer 2">
      <rect width={24} height={24} transform="rotate(180 12 12)" opacity={0} />
      <Path
        fill="white"
        d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1"
        data-name="github"
      />
    </g>
  </svg>
)

const Linkedin = p => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={p.h}>
    <g data-name="Layer 2">
      <g data-name="linkedin">
        <rect
          width={24}
          height={24}
          transform="rotate(180 12 12)"
          opacity={0}
        />
        <Path
          fill="white"
          d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z"
        />
        <rect x={3} y="9.3" width="4.5" height="11.7" rx=".9" ry=".9" />
        <circle cx="5.25" cy="5.25" r="2.25" />
      </g>
    </g>
  </svg>
)

const Linkedin2 = p => (
  <svg width={p.w} height={p.h} viewBox="0 0 510 510" {...p}>
    <Path
      fill="white"
      d="M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zM153 433.5H76.5V204H153v229.5zm-38.25-272.85c-25.5 0-45.9-20.4-45.9-45.9s20.4-45.9 45.9-45.9 45.9 20.4 45.9 45.9-20.4 45.9-45.9 45.9zM433.5 433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25 17.851-38.25 38.25V433.5H204V204h76.5v30.6c12.75-20.4 40.8-35.7 63.75-35.7 48.45 0 89.25 40.8 89.25 89.25V433.5z"
    />
  </svg>
)

const Medium = p => (
  <svg width={p.w} height={p.h} viewBox="0 0 24 24" {...p}>
    <Path
      fill="white"
      d="M22.085 4.733L24 2.901V2.5h-6.634l-4.728 11.768L7.259 2.5H.303v.401L2.54 5.594c.218.199.332.49.303.783V16.96c.069.381-.055.773-.323 1.05L0 21.064v.396h7.145v-.401l-2.52-3.049a1.244 1.244 0 01-.347-1.05V7.806l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831a.556.556 0 01-.214-.534V5.267a.554.554 0 01.213-.534z"
    />
  </svg>
)

const Unsplash = p => (
  <svg
    className="prefix___2m4hn"
    viewBox="0 0 32 32"
    width={p.w}
    height={p.h}
    aria-labelledby="unsplash-home"
    aria-hidden="false"
    {...p}
  >
    <Path fill="white" d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
  </svg>
)

const Twitter = p => (
  <svg viewBox="0 0 512 512" {...p} width={p.w} height={p.h}>
    <Path
      fill="white"
      d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
    />
  </svg>
)

const Email = p => (
  <svg width={p.w} height={p.h} viewBox="0 0 479.058 479.058" {...p}>
    <Path
      fill="white"
      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 015.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
    />
  </svg>
)

export default Socials

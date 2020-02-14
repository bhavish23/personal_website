/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

import Image from './shared/Image'
import { Heading, Paragraph } from './shared/Typography'
import {
  SectionContainer,
  ContentContainer,
  CardGrid,
} from './shared/Containers'
import ProjectCard from './ProjectCard'

import WorkRightSideBarSVG from '../images/WorkRightSideBar.svg'
import WorkLeftSideBarSVG from '../images/WorkLeftSideBar.svg'

import stockIcon from '../images/bull.svg'
import MoreIcon from '../images/MoreIcon.svg'

const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Hero = () => (
  <SectionContainer id="projects">
    <Image
      src={WorkLeftSideBarSVG}
      sx={{ position: 'absolute', left: 0 }}
      lighten
    />
    <Image
      src={WorkRightSideBarSVG}
      sx={{ position: 'absolute', right: 0 }}
      lighten
    />
    <ContentContainer style={{ gridGap: 30 }} numColumns={1}>
      <Description>
        <Heading>Projects</Heading>
        <Paragraph size="xlarge" weight="bold">
          Some things I've built
        </Paragraph>
      </Description>
      <CardGrid>
        <ProjectCard
          icon={stockIcon}
          title="Stocks app"
          desc="A marketXLS powered, data-driven web app to discover Stock market Status"
          link="https://stocks.marketXLS.com"
          repoName="synthetic"
        />
        <ProjectCard
          icon={MoreIcon}
          title="More"
          desc="I’ve made all sorts of apps, bots, and side projects that live on my Github"
          link="https://github.com/bhavish23"
        />
      </CardGrid>
    </ContentContainer>
  </SectionContainer>
)

export default Hero
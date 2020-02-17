import React from 'react'
import styled from '@emotion/styled'
import jsx from 'theme-ui'

import Git from '../images/logos/git.png'
import Linked  from '../images/logos/linked.png'
import mail from '../images/logos/mail.png'
import { ContactContainer } from '../components/shared/Containers'
import Image from './shared/Image'
import { BORDER_RADIUS, SHADOW, TRANSITION, COLORS } from '../styles/constants'

const Wraper = styled.div`
   position: fixed;
  //grid-template-row: repeat(1);
  //grid-gap: 30px;
  top: 35%;
  left: 5px;
`;

const Contactcard = styled.div`
  z-index: 1000;
  box-shadow: ${SHADOW};
  border-radius: ${BORDER_RADIUS.card};
  padding: 20px;
  margin-bottom: 5px;
  max-height: 100px;
  max-width: 100px;
  background-color: ${COLORS.lightGray};
  transition: ${TRANSITION};
  &:hover {
    transform: scale(1.06);
    cursor: pointer;
}
`;

const ContactCardImage = styled(Image)`
 // height: 60px;
  width: 40px;
  border-radius: 8px;
`

const contactLinks = [
    { profile: 'https://github.com/bhavish23', logo: Git },
    { profile: 'https://www.linkedin.com/in/bhavishya-kumar-047b5918b/', logo: Linked },
    { profile: 'mailto:bhavishsharma236@gmail.com', logo: mail },
  ]

const Contact = () => {
  const openLink = link => {
    let newPage = window.open(link, '_blank')
    newPage.focus()
  }
    return (
      <Wraper>
        {contactLinks.map(node => (
            <Contactcard onClick={() => openLink(node.profile)}>
              <ContactCardImage src={node.logo} />
            </Contactcard>
          ))}
      </Wraper>
    )
}

export default Contact
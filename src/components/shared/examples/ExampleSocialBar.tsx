import React from 'react'

import SocialBar from '@/components/shared/SocialBar'

import { SocialMediaData } from '@/types/types'

const ExampleSocialBar = () => {

    const socialMedia: SocialMediaData[] = [
        {
            href: 'https://www.instagram.com',
            ariaLabel: 'Instagram',
            type: 'instagram'
        },
        {
            href: 'https://www.facebook.com',
            ariaLabel: 'Facebook',
            type: 'facebook'
        },
        {
            href: 'https://www.twitter.com',
            ariaLabel: 'Twitter',
            type: 'twitter'
        },
        {
            href: 'https://www.linkedin.com',
            ariaLabel: 'Linkedin',
            type: 'linkedin'
        },
        {
            href: 'https://www.youtube.com',
            ariaLabel: 'Youtube',
            type: 'youtube'
        }
    ]

  return (
    <SocialBar socialMedia={socialMedia} />
  )
}

export default ExampleSocialBar
import React, { Suspense } from 'react';

const iconComponents = {
    instagram: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaInstagram }))),
    facebook: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaFacebook }))),
    twitter: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaTwitter }))),
    linkedin: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaLinkedin }))),
    youtube: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaYoutube }))),
    github: React.lazy(() => import('react-icons/fa').then(module => ({ default: module.FaGithub }))),
}

const Icon = ({
    href, type, ariaLabel
}: {
    href: string,
    type: 'instagram' | 'facebook' | 'twitter' | 'linkedin' | 'youtube' | 'github',
    ariaLabel?: string
}) => {

    const IconComponent = iconComponents[type]

    return (
        <a href={href} aria-label={ariaLabel}>
            <Suspense fallback={<div>Loading...</div>}>
                <IconComponent size={32} />
            </Suspense>
        </a>
    );
}

export default Icon;
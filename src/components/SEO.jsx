import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description }) {
  const siteName = 'Taste of Budapest'
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Taste of Budapest — authentic Hungarian cuisine and fine dining in Budapest.'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1a3a52" />
    </Helmet>
  )
}

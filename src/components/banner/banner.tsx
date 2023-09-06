/**
 * Banner component
 */

import * as React from 'react'
import * as bannerStyles from './banner.module.css'

interface BannerProps {
  title: string
}

const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <div className={`${bannerStyles.banner}`}>
      <div className={`${bannerStyles.bannerContent}`}>
        <h1 className={`${bannerStyles.title}`}>{title}</h1>
      </div>
    </div>
  )
}

export default Banner

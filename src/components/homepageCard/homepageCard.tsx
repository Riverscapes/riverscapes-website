/**
 * HomepageCard component
 */

import * as React from 'react'
import * as homepageCardStyles from './homepageCard.module.css'

const HomepageCard: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={`${homepageCardStyles.homepageCard}`}>{children}</div>
}

interface HomepageCardProps {
  background: 'blue' | 'white'
  children: React.ReactNode
}

export const HomepageCardContent: React.FC<HomepageCardProps> = ({ children, background }) => {
  const backgroundStyle = background === 'blue' ? homepageCardStyles.blueContent : homepageCardStyles.whiteContent
  return <div className={`${homepageCardStyles.contentRegion} ${backgroundStyle}`}>{children}</div>
}

interface HomepageCardHighlightProps {
  type: 'image' | 'text'
  align?: 'left' | 'center' | 'right'
  children: React.ReactNode
}

export const HomepageCardHighlight: React.FC<HomepageCardHighlightProps> = ({
  children = [],
  type = 'left',
  align = 'left',
}) => {
  const highlightType = type === 'image' ? homepageCardStyles.imageHighlight : homepageCardStyles.textHighlight
  const alignment = align === 'center' ? homepageCardStyles.flexCenter : homepageCardStyles.flexLeft

  return <div className={`${homepageCardStyles.homepageRegion} ${highlightType} ${alignment}`}>{children}</div>
}

interface HomepageCardStatProps {
  value: string
  label: string
}

export const HomepageCardStat: React.FC<HomepageCardStatProps> = ({ value, label }) => {
  return (
    <div className={`${homepageCardStyles.stat}`}>
      <div className={`${homepageCardStyles.statValue}`}>{value}</div>
      <div className={`${homepageCardStyles.statLabel}`}>{label}</div>
    </div>
  )
}

export default HomepageCard

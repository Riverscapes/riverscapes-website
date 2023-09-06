/**
 * Hero component
 */

import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import * as HeroStyles from './hero.module.css'

interface HeroProps {
  children: React.ReactNode
  image: string
}

const Hero: React.FC<HeroProps> = ({ children, image }) => {
  return (
    <Card className={`${HeroStyles.hero}`}>
      <CardMedia component="img" image={image} />
      <CardContent className={`${HeroStyles.content}`}>{children}</CardContent>
    </Card>
  )
}

export default Hero

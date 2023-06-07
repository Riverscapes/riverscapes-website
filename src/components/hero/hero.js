/**
 * Hero component
 */

import * as React from 'react'
import propTypes from "prop-types"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import * as HeroStyles from './hero.module.css'

export default function Hero( {children, image} ) {
  return (
    <Card
      className={`${HeroStyles.hero}`}
    >
      <CardMedia
        component="img"
        image={image}
      />
      <CardContent
        className={`${HeroStyles.content}`}
      >
        {children}
      </CardContent>
    </Card>
  );
}

Hero.propTypes = {
  children: propTypes.oneOfType([
      propTypes.arrayOf(propTypes.node),
      propTypes.node
  ]).isRequired,
  image: propTypes.string.isRequired
}
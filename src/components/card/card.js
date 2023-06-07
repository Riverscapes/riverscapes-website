/**
 * Card component
 */

import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import propTypes from "prop-types"
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import * as cardStyles from "./card.module.css"

const ImgCard = (props) => {
    const { to, img, imgAlt, heading, headingVariant, children } = props;
    
    return (
        <Card>
            <CardActionArea
                component={Link}
                to={to}>
                <GatsbyImage 
                    image={img} 
                    alt={imgAlt} />
                <CardContent>
                    <Typography gutterBottom variant={headingVariant} component="div">
                        {heading}
                    </Typography>
                    <div>
                        {children}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ImgCard

ImgCard.propTypes = {
    to: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
    imgAlt: propTypes.string.isRequired,
    heading: propTypes.string.isRequired,
    headingVariant: propTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
    children: propTypes.node
}
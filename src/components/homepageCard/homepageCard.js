/**
 * HomepageCard component
 */

import * as React from "react"
import propTypes from "prop-types"
import * as homepageCardStyles from "./homepageCard.module.css"

const HomepageCard = ({children}) => {
  return (
    <div className={`${homepageCardStyles.homepageCard}`}>
        {children}
    </div>
  )
}

export const HomepageCardContent = ({children, background}) => {

    const backgroundStyle = (background === 'blue')?homepageCardStyles.blueContent:homepageCardStyles.whiteContent
    return (
        <div className={`${homepageCardStyles.contentRegion} ${backgroundStyle}`}>
            {children}
        </div>
    )
}

export const HomepageCardHighlight = ({children, type, align}) => {

    const highlightType = (type === 'image')?homepageCardStyles.imageHighlight:homepageCardStyles.textHighlight
    const alignment = (align === 'center')?homepageCardStyles.flexCenter:homepageCardStyles.flexLeft

    return (
        <div className={`${homepageCardStyles.homepageRegion} ${highlightType} ${alignment}`}>
            {children}
        </div>
    )
}

export const HomepageCardStat = ({value, label}) => {
    return (
        <div className={`${homepageCardStyles.stat}`}>
            <div className={`${homepageCardStyles.statValue}`}>{value}</div>
            <div className={`${homepageCardStyles.statLabel}`}>{label}</div>
        </div>
    )
}

export default HomepageCard

HomepageCardHighlight.propTypes = {
    type: propTypes.oneOf(['image', 'text']).isRequired,
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.node),
        propTypes.node
    ]).isRequired,
    align: propTypes.oneOf(['left', 'center', 'right'])
}

HomepageCardStat.propTypes = {
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired
}

HomepageCardContent.propTypes = {
    background: propTypes.oneOf(['blue', 'white']).isRequired,
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.node),
        propTypes.node
    ]).isRequired
}

HomepageCardHighlight.defaultProp = {
    align: 'left',
    children: [],
    type: 'text'
}
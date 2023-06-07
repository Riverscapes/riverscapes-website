/**
 * Banner component
 */

import * as React from "react"
import propTypes from "prop-types"
import * as bannerStyles from "./banner.module.css"

const Banner = ({title}) => {

    return (
        <div className={`${bannerStyles.banner}`}>
            <div className={`${bannerStyles.bannerContent}`}>
                <h1 className={`${bannerStyles.title}`}>{title}</h1>
            </div>
        </div>
    )
}

export default Banner

Banner.propTypes = {
    title: propTypes.string.isRequired
}
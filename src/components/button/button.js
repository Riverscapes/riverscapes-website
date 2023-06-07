/**
 * LinkButton component
 */

import * as React from "react"
import { Link } from "gatsby"
import propTypes from "prop-types"
import Button from '@mui/material/Button';
import * as buttonStyles from "./button.module.css"

const LinkButton = (props) => {
    const { to, children } = props;

    const CustomLink = React.forwardRef((props, ref) => 
        <Link to={to} {...props}  ref={ref} />);
    
    return (
        <Button 
            variant="contained" 
            className={`${buttonStyles.button}`}
            component={CustomLink}>
            {children}
        </Button>
    )
}

export default LinkButton

LinkButton.propTypes = {
    to: propTypes.string.isRequired,
    children: propTypes.node
}
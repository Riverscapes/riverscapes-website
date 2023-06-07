/**
 * TreeItemLink component
 */

import * as React from "react"
import { Link } from "gatsby"
import TreeItem from "@mui/lab/TreeItem";

const TreeItemLink = ({ to, label, children, ...rest}) => {
    return (
        <TreeItem
            label={<Link to={to}>{label}</Link>}
            {...rest}
        >
            {children}
        </TreeItem>
    )
}

export default TreeItemLink
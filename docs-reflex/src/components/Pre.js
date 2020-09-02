import React from "react"
import PrismCodeBlock from "@theme-ui/prism"
import { Div } from "@reflexjs/components"
import { CopyButton } from "@reflexjs/gatsby-theme-core"

export const Pre = props => {
    const { children } = props;
    const code = children && children[0].props && children[0].props.children && children[0].props.children[0] ? children[0].props.children[0] : null;

    return code ? (
        <Div position="relative" {...props}>
            <PrismCodeBlock {...props}>{code}</PrismCodeBlock>
            <CopyButton value={code} position="absolute" top="4" right="4" />
        </Div>
    ) : null;
};

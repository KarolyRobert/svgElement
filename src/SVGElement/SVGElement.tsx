import { useRef, FC } from "react";
import { SVGElementProps, RootRef } from "./types";
import Svg from "./Svg";
import Group from "./Group";
import Rect from "./Rect";
import Ellipse from "./Ellipse";
import Path from "./Path";


const SVGElement : FC<SVGElementProps> = ({rootRef = useRef<RootRef>({}),path = [],type,...props}) => {
    switch (type) {
        case "svg":
            return (<Svg rootRef={rootRef} path={path} {...props} />);
        case "group":
            return (<Group rootRef={rootRef} path={path} {...props}/>);
        case "rect":
            return (<Rect rootRef={rootRef} path={path} {...props} />);
        case "ellipse":
            return (<Ellipse rootRef={rootRef} path={path} {...props} />);
        case "path":
            return (<Path rootRef={rootRef} path={path} {...props} />);
    }
}

export default SVGElement;
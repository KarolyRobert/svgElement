import { useRef, FC } from 'react';
import { SVGInstance } from './types';

import { useChildren, useRefHandler } from './hooks';


const Svg : FC<SVGInstance> = ({rootRef,nodeList,path,props}) => {
    const Ref = useRef<SVGSVGElement>(null);

    const children = useChildren(rootRef,nodeList,path);

    useRefHandler(rootRef,Ref,path);

    
    return (<svg ref={Ref} {...props} style={{overflow: 'visible'}} >
                <rect width="100%" height="100%" fill={props.background} />
                {children}
            </svg>)
}

export default Svg;
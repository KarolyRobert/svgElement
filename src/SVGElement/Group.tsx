import {useRef ,FC } from 'react';
import { SVGInstance, UniformTransform } from './types';


import {useChildren, useRefHandler, useTransform } from './hooks';
/*
const UniformTransform : Transform = {
    translate : {x:0,y:0},
    scale: {x:1,y:1},
    skew: {x:0,y:0},
    rotate : 0,
    origin: {x:0,y:0}
}
*/
const Group : FC<SVGInstance> =  ({rootRef,nodeList,path,transform = UniformTransform,props}) => {
    const Ref = useRef<SVGSVGElement>(null);

    const trans = useTransform(transform);

    const children = useChildren(rootRef,nodeList,path);

    useRefHandler(rootRef,Ref,path);

   
    
    return (<g ref={Ref} transform={trans.transform} transform-origin={trans.origin} {...props} >
                {children}
            </g>)
}

export default Group;
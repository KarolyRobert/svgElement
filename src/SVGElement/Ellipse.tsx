import {useRef, FC } from 'react';
import { SVGInstance, UniformTransform } from './types';
import { useChildren, useRefHandler, useTransform } from './hooks';

const Ellipse : FC<SVGInstance> = ({id,rootRef,nodeList,path,transform  = UniformTransform,props}) => {
    const Ref = useRef<SVGEllipseElement>(null);

    const trans = useTransform(transform);

    const children = useChildren(rootRef,nodeList,path);

    useRefHandler(rootRef,Ref,path);
    
    return (<ellipse ref={Ref} id={id} transform={trans.transform} transform-origin={trans.origin} {...props} >
                {children}
            </ellipse>)
}

export default Ellipse;
import { useEffect,RefObject,ReactElement, useMemo } from 'react';
import SVGElement from './SVGElement';
import { SVGNode, Transform, RootRef, SVGRef } from './types';
import { createTransformProps } from './utils';

export const useChildren = (rootRef: RefObject<RootRef>,nodeList : Array<SVGNode>,path : Array<number>) : Array<ReactElement> => {
    return (nodeList && nodeList.map((svgNode ,index ) => {
        let {key,type,...props} = svgNode;
        return (<SVGElement type={type} key={key} rootRef={rootRef} path={[...path,index]} {...props} />);
    }))
}


export const useRefHandler = (root : RefObject<RootRef>,ref : SVGRef ,path : Array<number>) : void => {
    useEffect(() => {

        if(root.current) root.current[path.join('_')] = ref;
    
        return () => {
            if(root.current) delete root.current[path.join('_')];
        }
    },[path])
}

export const useTransform = (transform : Transform) => {
    return useMemo(() => createTransformProps(transform),[transform])
}


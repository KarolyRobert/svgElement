import { useRef, useMemo, FC } from 'react';
import { SVGInstance, PathNode, UniformTransform } from './types';
import { useChildren, useRefHandler, useTransform } from './hooks';

const pathReducer = (result : string,currentNode : PathNode,index : number,array : Array<PathNode>) : string => {
    const createCommand = (end = '') => {
        let prevNode = array[index-1];
        let curve = prevNode.x !== prevNode.x1 || prevNode.y !== prevNode.y1 || currentNode.x !== currentNode.x0 || currentNode.y !== currentNode.y0;
        if(curve){
            if(prevNode.break || prevNode.type === 'startNode'){
                return `${result}C${prevNode.x1},${prevNode.y1} ${currentNode.x0},${currentNode.y0} ${currentNode.x},${currentNode.y}${end}`;
            }else{
                return `${result}S${currentNode.x0},${currentNode.y0} ${currentNode.x},${currentNode.y}${end}`;
            }
        }else{
            return `${result}L${currentNode.x},${currentNode.y}${end}`;
        }
    }
    switch(currentNode.type){
        case 'startNode':
            return `${result}M${currentNode.x},${currentNode.y}`;
        case 'node':
        case 'endNode':
            return createCommand();
        case 'endLoopNode':
            return createCommand('z');
    }
    return result;
}

const Path : FC<SVGInstance> = ({id,rootRef,nodeList,path,transform = UniformTransform,segments = [],props}) => {
    const Ref = useRef<SVGPathElement>(null);
    const trans = useTransform(transform);

    const children = useChildren(rootRef,nodeList,path);

    const data = useMemo(() => {
        return segments.reduce(pathReducer,'');
    },[segments]);

    useRefHandler(rootRef,Ref,path);
    
    return (<path ref={Ref} id={id} d={data} transform={trans.transform} transform-origin={trans.origin} {...props} >
                {children}
            </path>)
}

export default Path;
import { RefObject } from "react";


type Vector = {
    x: number;
    y: number;
}


export type SVGRef = RefObject<SVGSVGElement> | RefObject<SVGRectElement> | RefObject<SVGEllipseElement> | RefObject<SVGPathElement>;

export type RootRef = {
    [Name: string]: SVGRef;
}

export type PathNode = {
    x: number;
    y: number;
    x0: number;
    y0: number;
    x1: number;
    y1: number;
    break: boolean;
    type: string;
}

export type Svg = {
    width: number,
    height: number,
    background: string
}


export type Transform = {
    translate: Vector;
    scale: Vector;
    skew: Vector;
    rotate: number;
    origin: Vector;
}

export type Trans = {
    transform: string;
    origin: string;
}

export interface SVGNode {
    type: string;
    key: string;
    name: string;
    nodeList: Array<SVGNode>;
    props: Svg;
}



export interface SVGElementProps extends SVGNode{
    rootRef: RefObject<RootRef>;
    path: Array<number>;
    transform?: Transform;
    segments?: Array<PathNode>;
    id?: string;
}

export type SVGInstance = Omit<SVGElementProps,"type">



export const UniformTransform : Transform = {
    translate : {x:0,y:0},
    scale: {x:1,y:1},
    skew: {x:0,y:0},
    rotate : 0,
    origin: {x:0,y:0}
}

import { Transform, Trans }  from './types';

export const createTransformProps = (transform : Transform) : Trans => {
    let value = `translate(${transform.translate.x},${transform.translate.y}) rotate(${transform.rotate}) scale(${transform.scale.x},${transform.scale.y}) skewX(${transform.skew.x}) skewY(${transform.skew.y})`;
    let origin = `${transform.origin.x} ${transform.origin.y}`;
    return {transform:value,origin:origin}
}
import _ from 'lodash';
import _fp from 'lodash/fp';

interface Converter {
  (key: string): string;
}

interface WalkFn {
  (node: any): any;
}

function createIteratee(converter: Converter, walk: WalkFn) {
  return (result: any, value: any, key: string) =>
    _.set(
      result,
      converter(key),
      _fp.isObjectLike(value) ? walk(value) : value
    );
}

function createTransformer(keyConverter: Converter) {
  return function walk(node: any): any {
    if (_.isArray(node)) return _fp.map(walk, node);
    if (_fp.isPlainObject(node))
      return _.transform(node, createIteratee(keyConverter, walk));
    return node;
  };
}

export function camelCase(o: any) {
  return createTransformer(_fp.camelCase)(o);
}

export function snakeCase(o: any) {
  return createTransformer(_fp.snakeCase)(o);
}

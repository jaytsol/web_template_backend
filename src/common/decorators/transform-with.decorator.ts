import {
  Transform,
  TransformFnParams,
  TransformOptions,
} from 'class-transformer';
import { Types } from 'mongoose';

export function TransformWith(
  transformFunction: (
    value: any,
    transformParameters?: TransformFnParams,
  ) => any,
  options?: TransformOptions & { each?: boolean },
) {
  return Transform((parameters) => {
    const { key, obj } = parameters;
    const value = obj[key];

    if (value === undefined) {
      return;
    }

    if (value instanceof Types.ObjectId) {
      return transformFunction(value, parameters);
    }

    if (options?.each && Array.isArray(value)) {
      return value.map((item) => transformFunction(item, parameters));
    }

    return transformFunction(value, parameters);
  }, options);
}

// Array
export const combine = (...arrays) => [].concat(...arrays)

export const compact = arr => arr.filter(Boolean)

export const contains = (() => Array.prototype.includes
  ? (arr, value) => arr.includes(value)
  : (arr, value) => arr.some(el => el === value)
)()

export const difference = (arr, ...others) => {
  var combined = [].concat(...others)
  return arr.filter(el => !combined.some(exclude => el === exclude))
}

export const head = arr => arr[0]

export const initial = arr => arr.slice(0, -1)

export const intersection = (...arrays) =>
  [...Set([].concat(...arrays))].filter(toFind =>
    arrays.every(arr => arr.some(el => el === toFind))
  )

export const last = arr => arr.slice(-1)[0]

export const sortedIndex = (arr, value) => [value].concat(arr).sort().indexOf(value)

export const tail = arr => arr.slice(1)

export const toArray = (() => Array.from ? Array.from : obj => [].slice.call(obj))()

export const union = (...arrays) => [...Set([].concat(...arrays))]

export const unique = arr => [...Set(arr)]

export const without = (arr, ...values) => arr.filter(el => !values.some(exclude => el === exclude))


// object 
export const getValues = obj => Object.keys(obj).map(key => obj[key])

export const merge = (() => {
  const extend = Object.assign ? Object.assign : (target, ...sources) => {
    sources.forEach(source =>
      Object.keys(source).forEach(prop => target[prop] = source[prop])
    );
    return target;
  };
  return (...objects) => extend({}, ...objects)
})()

export const toMap = (() => {
  const convert = obj => new Map(Object.keys(obj).map(key => [key, obj[key]]));
  return obj => obj instanceof Map ? obj : convert(obj);
})();


// math
export const min = arr => Math.min(...arr)

export const max = arr => Math.max(...arr)

export const sum = arr => arr.reduce((a, b) => a + b)

export const product = arr => arr.reduce((a, b) => a * b)


// function decorators
export const not = fn => (...args) => !fn(...args)

export const maybe = fn =>
  (...args) => {
    if (args.length < fn.length || args.some(arg => arg == null)) return;
    return fn(...args);
  };

export const once = fn => {
  var done = false;
  return (...args) => {
    if (done) return;
    done = true;
    fn(...args);
  };
}

export const curry = fn => {
  const arity = fn.length;
  const curried = (...args) =>
    args.length < arity ? (...more) => curried(...args, ...more) : fn(...args);
  return curried;
}

export const pipeline = (...funcs) => value => funcs.reduce((a, b) => b(a), value)

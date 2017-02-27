export const partial = (fn, ...args) => fn.bind(null, ...args) //comma seperated arguments bundled in to an array(1), second one is a spread operator(spread as arguments)

const _pipe = (f, g) => (...args) => g(f(...args))

export const pipe = (...fns) => fns.reduce(_pipe)

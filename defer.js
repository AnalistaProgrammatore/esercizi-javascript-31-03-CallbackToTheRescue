Function.prototype.defer = function (ms) {
  let myProto = this
  return function (args) {
  setTimeout(() => myProto.apply(this, [args]), ms)
  }
}

function myProto(name) {
  console.log(`Hello ${name}`)
}

myProto.defer(5000)('Edoardo')

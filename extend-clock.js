/**
* Copia e incolla il codice di clock.js come prima cosa per avere accesso alla classe Clock sviluppata nell'esercizio 1
*/
class Clock {
  constructor({ template }) {
    this.template = template
  }

  render() {
    let date = new Date()

    let hours = date.getHours()
    if (hours < 10) hours = '0' + hours

    let mins = date.getMinutes()
    if (mins < 10) mins = '0' + mins

    let secs = date.getSeconds()
    if (secs < 10) secs = '0' + secs

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs)

    console.log(output)
  }

  stop() {
    clearInterval(this.timer)
  }

  start() {
    this.timer = setInterval(() => this.render(), 1000)
  }

}


class ExtendedClock extends Clock {
  constructor(props, { precision = 1000 } = {}) {
    super(props)
    this.precision = precision
    console.log('props contiene',props,precision)
  }

  stop() {
    clearInterval(this.timer)
  }

  start() {
    this.render()
    this.timer = setInterval(() => this.render(), this.precision)
  }
}

let clock = new ExtendedClock({ template: 'h:m:s', precision: 666666666})
clock.start()

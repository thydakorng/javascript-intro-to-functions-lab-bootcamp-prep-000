function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO'.toUpperCase())
}

function logWhisper(string) {
  console.log('HELLO'.toLowerCase())
}

function sayHiToGrandma(string) {
    expect(sayHiToGrandma('hello'.toLowerCase)).toEqual("I can't hear you!")
  }

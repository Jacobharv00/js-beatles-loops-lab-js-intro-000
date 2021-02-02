// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for ( let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts (facts) {
  let i = 0
  while(i < facts.length) {
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}

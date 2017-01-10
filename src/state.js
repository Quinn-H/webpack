module.exports = {
  getState: getState,
  setState: setState,
  getHeader: getHeader,
  getFooter: getFooter
}

var wombles = [{
  name: 'Orinocco',
  email: 'orinocco@wimbledoncommon.net',
  details: 'Tin cans',
  showingDetails: false
}, {
  name: 'Tomsk',
  email: 'tomsk@wimbledoncommon.net',
  details: 'Plastic bags',
  showingDetails: false
}, {
  name: 'Bungo',
  email: 'bungo@wimbledoncommon.net',
  details: 'Discarded wombat poop',
  showingDetails: false
}]


var headers = {
  title: 'Home',
  subtitle: 'wombles list'
}


var footers = {
  copyright: 'All Rights Reserved.'
}

function getState () {
  return wombles
}

function setState (state) {
  wombles = state
}

function getHeader () {
  return headers
}

function getFooter () {
  return footers
}

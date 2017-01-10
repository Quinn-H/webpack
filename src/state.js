module.exports = {
  getState: getState
}

// var wombles = [{
//   name: 'Orinocco',
//   email: 'orinocco@wimbledoncommon.net',
//   details: 'Tin cans',
//   showingDetails: false
// }, {
//   name: 'Tomsk',
//   email: 'tomsk@wimbledoncommon.net',
//   details: 'Plastic bags',
//   showingDetails: false
// }, {
//   name: 'Bungo',
//   email: 'bungo@wimbledoncommon.net',
//   details: 'Discarded wombat poop',
//   showingDetails: false
// }]

var state = {
  header: {
    title: 'wombles',
    subtitle: 'wombles-list'
  },
  footer: {
    copyright: 'All Rights Reserved'
  },
  pages: {
    home: {
      name: 'home',
      isActive: true
    },
    about: {
      name: 'about',
      isActive: false
    }
  },
  wombles: [{
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
}

function getState () {
  return state
}

function updateWombles (wombles) {
  state.wombles = wombles
}

function makePageActive (pageName) {
  Object.getOwnPropertyNames(state.pages).forEach(function (page) {
    state.pages[page].isActive = page === pageName
  })
}

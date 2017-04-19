// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC6W7mU-n86DRi_4yaIQMrnquKqy1GRSss',
  authDomain: 'joke-a-tron-9000-bfd4b.firebaseapp.com',
  databaseURL: 'https://joke-a-tron-9000-bfd4b.firebaseio.com',
  projectId: 'joke-a-tron-9000-bfd4b',
  storageBucket: 'joke-a-tron-9000-bfd4b.appspot.com',
  messagingSenderId: '376737576954'
}
firebase.initializeApp(config)

firebase.auth().signInAnonymously()

// CREATE a new woof in Firebase
function createWoofInDatabase (woofs) {
  firebase.database().ref('woofs').child('new woof').set({
    created_at: '1491613778000',
    text: 'That homework looks hard. Want me to eat it?'
  })
}

// READ from Firebase when woofs are added, changed, or removed
// Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
function readWoofsInDatabase () {
  firebase.database().ref('woofs')
    .on('child_added', function (addWoofRow) {
      console.log('Key:', woofRow.key)
      console.log('Created At:', woofRow.val().created_at)
      console.log('Text:', woofRow.val().text)
    })
    .on('child_changed', function (updateWoofRow) {
      console.log('Key:', woofRow.key)
      console.log('Created At:', woofRow.val().created_at)
      console.log('Text:', woofRow.val().text)
    })
    .on('child_removed', function (deleteWoofRow) {
      console.log('Key:', woofRow.key)
      console.log('Created At:', woofRow.val().created_at)
      console.log('Text:', woofRow.val().text)
    })
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  firebase.database().ref('woofs').child('new woof').set({
    created_at: '1491613778000',
    text: 'That homework looks hard. Want me to eat it? THIS IS NEW'
  })
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  firebase.database().ref('woofs/new woof').remove()
}

// Load all of the data
readWoofsInDatabase()

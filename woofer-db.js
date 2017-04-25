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

var nowDate = new Date().getTime()

// CREATE a new woof in Firebase
function createWoofInDatabase (woof) {
  var newWoof = document.getElementById('woof-text').value
  firebase.database().ref('woofs').push({
    created_at: nowDate,
    text: newWoof
  })
}

// READ from Firebase when woofs are added, changed, or removed
// Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
function readWoofsInDatabase () {
  firebase.database().ref('woofs')
    .on('child_added', function (addWoofSnapshot) {
      addWoofRow(addWoofSnapshot.key, addWoofSnapshot.val())
    })
  firebase.database().ref('woofs')
    .on('child_changed', function (updateWoofSnapshot) {
      updateWoofRow(updateWoofSnapshot.key, updateWoofSnapshot.val())
    })
  firebase.database().ref('woofs')
    .on('child_removed', function (deleteWoofSnapshot) {
      deleteWoofRow(deleteWoofSnapshot.key, deleteWoofSnapshot.val())
    })
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  firebase.database().ref('woofs/' + woofKey + '/text').set(
    woofText
  )
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  firebase.database().ref('woofs/' + woofKey).remove()
}

// Load all of the data
readWoofsInDatabase()

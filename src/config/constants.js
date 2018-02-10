import firebase from 'firebase'

const config = {
  	apiKey: "AIzaSyDScO21xjk6zf6pg9pxStdoh6Dygps7rxI",
    authDomain: "fir-test-48220.firebaseapp.com",
    databaseURL: "https://fir-test-48220.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
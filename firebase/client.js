import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB7beKbfDNMIR7TG0BwUDoAm50T8cbajU8',
  authDomain: 'devtter-evertcode.firebaseapp.com',
  projectId: 'devtter-evertcode',
  storageBucket: 'devtter-evertcode.appspot.com',
  messagingSenderId: '206836771008',
  appId: '1:206836771008:web:800c5e921d48858e646525',
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user

  return {
    username: displayName,
    avatar: photoURL,
    email
  }
}

export const auth = firebase.auth()

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged(user => {
    const normalizxedUser = mapUserFromFirebaseAuthToUser(user)
    onChange(normalizxedUser)
  })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()

  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}

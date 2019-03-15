import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC7azbYkHYSvnG-eMtZh_ierLmuPG6_cec",
    authDomain: "photo-carousel-9a4f4.firebaseapp.com",
    databaseURL: "https://photo-carousel-9a4f4.firebaseio.com",
    projectId: "photo-carousel-9a4f4",
    storageBucket: "photo-carousel-9a4f4.appspot.com",
    messagingSenderId: "254550951040"
};
firebase.initializeApp(config);

export default firebase;
const config = {
  apiKey: "AIzaSyB56eR1lYctfGjYvK8SaWyrLXO48NtsPxU",
  authDomain: "front-apps-test.firebaseapp.com",
  projectId: "front-apps-test",
  storageBucket: "front-apps-test.appspot.com",
  messagingSenderId: "1053506184560",
  appId: "1:1053506184560:web:95952635743867ba94dbb5",
  measurementId: "G-SFPQ28000G",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.ts"
    );
  } else {
    return config;
  }
}

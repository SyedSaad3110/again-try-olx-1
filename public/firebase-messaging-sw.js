
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
const firebaseConfig = {
  apiKey: "AIzaSyDbsszGsDxh8QnkBzEZFhfzrSSfXQSG324",
  authDomain: "react-ecommerce-contact-7eb3b.firebaseapp.com",
  databaseURL: "https://react-ecommerce-contact-7eb3b-default-rtdb.firebaseio.com",
  projectId: "react-ecommerce-contact-7eb3b",
  storageBucket: "react-ecommerce-contact-7eb3b.appspot.com",
  messagingSenderId: "73279323952",
  appId: "1:73279323952:web:985451ef8f64332d62d2f5",
  // databaseURL:"https://react-ecommerce-contact-7eb3b-default-rtdb.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
    
    // icon: '/firebase-logo.png' // You can use a custom icon here
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
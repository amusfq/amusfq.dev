import { initializeApp, getApps, getApp } from "firebase/app";

export const firebaseConfig = {
  "projectId": process.env.NEXT_PUBLIC_PROJECT_ID,
  "appId": process.env.NEXT_PUBLIC_APP_ID,
  "storageBucket": process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  "locationId": process.env.NEXT_PUBLIC_LOCATION_ID,
  "apiKey": process.env.NEXT_PUBLIC_API_KEY,
  "authDomain": process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  "messagingSenderId": process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  "measurementId": process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}

export const firebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

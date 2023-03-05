/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY:"AIzaSyCOOx8VxYOExzuKsx1Vrna2KGfX7qyXUV8",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:"reddit-clone-f516e.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "reddit-clone-f516e",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "reddit-clone-f516e.appspot.com",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "541114021593",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:541114021593:web:60189fb70d5f789df230c8"
  }
}

module.exports = nextConfig

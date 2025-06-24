# Environment Setup Guide

## Server Environment Variables

Create a file named `.env` in the `server/` directory with the following content:

```
MONGODB_URI=mongodb://localhost:27017/share-dish
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

## Client Environment Variables

Create a file named `.env` in the `client/` directory with the following content:

```
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_API_URL=http://localhost:5000
```

## How to get these values:

1. **MongoDB**: Install MongoDB locally or use MongoDB Atlas
2. **Cloudinary**: Sign up at cloudinary.com and get your credentials
3. **Firebase**: Create a project at firebase.google.com and get your config
4. **JWT_SECRET**: Use any random string for security

## Quick Start (without external services):

For testing purposes, you can use these minimal values:

**Server .env:**
```
MONGODB_URI=mongodb://localhost:27017/share-dish
JWT_SECRET=mysecretkey123
PORT=5000
```

**Client .env:**
```
REACT_APP_API_URL=http://localhost:5000
``` 
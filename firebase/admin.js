const admin = require("firebase-admin");

const certificate = require("./credentials.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(certificate),
    databaseURL: process.env.DATABASE_URL,
  });
}

const firestore = admin.firestore;
const database = admin.firestore();

module.exports = { database, firestore };

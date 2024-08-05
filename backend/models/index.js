// Importiere das 'mongoose'-Modul, um eine Verbindung zu MongoDB herzustellen
import mongoose from "mongoose";

// Verbinde dich mit der MongoDB-Datenbank unter Verwendung der Umgebungsvariablen 'MONGO_URI'
mongoose.connect(process.env.MONGO_URI);

// Importiere die benötigten Module 'MongoClient' und 'ServerApiVersion' von 'mongodb'
import { MongoClient, ServerApiVersion } from "mongodb";

// Hole die Verbindungs-URI aus der Umgebungsvariable 'MONGO_URI'
const uri = process.env.MONGO_URI;

// Erstelle einen neuen MongoClient und konfiguriere ihn mit einer 'MongoClientOptions'-Objekt
// um die Stabile API-Version (v1) festzulegen, sowie einige Optionen für das Verhalten
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Definiere eine asynchrone Funktion 'run', die die MongoDB-Verbindung herstellt und einen Ping an die Datenbank sendet
async function run() {
  try {
    // Verbinde den Client mit dem Server (optional ab v4.7)
    await client.connect();

    // Sende einen Ping an die 'admin'-Datenbank, um eine erfolgreiche Verbindung zu bestätigen
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Stellt sicher, dass der Client geschlossen wird, wenn die Funktion abgeschlossen oder ein Fehler aufgetreten ist
    await client.close();
  }
}

// Rufe die Funktion 'run' auf und fange mögliche Fehler mit 'catch'
run().catch(console.dir);

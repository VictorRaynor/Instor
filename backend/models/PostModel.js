// Importiere das 'mongoose'-Modul, um mit MongoDB zu interagieren
import mongoose from "mongoose";

// Definiere ein Mongoose-Schema namens 'postsSchema' für die 'Furniture'-Dokumente in der Datenbank
const postsSchema = new mongoose.Schema({
  // Feld 'title': Eine Zeichenkette (String) ist erforderlich (required),
  // mit einer Mindestlänge von 5 Zeichen und einer maximalen Länge von 100 Zeichen
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  // Feld 'description': Eine Zeichenkette (String) ist erforderlich (required),
  // mit einer Mindestlänge von 5 Zeichen und einer maximalen Länge von 1000 Zeichen
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1000,
  },
  // Feld 'room': Eine Zeichenkette (String) ist erforderlich (required),
  // mit einer Mindestlänge von 2 Zeichen und einer maximalen Länge von 20 Zeichen
  room: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  // Feld 'size': Eine Zeichenkette (String), die aus einer festen Liste von Werten (enum) ausgewählt werden muss,
  // der Wert muss entweder "klein", "mittel" oder "gross" sein und ist erforderlich (required)
  size: {
    type: String,
    enum: ["klein", "mittel", "gross"],
    required: true,
  },
  // Feld 'image': Ein verschachteltes Objekt, das aus den Feldern 'url' und 'imageId' besteht,
  // beide Felder sind Zeichenketten (String) und sind erforderlich (required)
  image: {
    type: {
      url: String,
      imageId: String,
    },
    required: true,
  },
});

// Exportiere das Mongoose-Modell 'Furniture', das auf dem definierten 'postsSchema' basiert
export const Furniture = mongoose.model("Furniture", postsSchema);

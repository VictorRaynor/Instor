// Importiere die Cloudinary-Bibliothek und benenne sie als 'cloudinary'
import { v2 as cloudinary } from "cloudinary";
// Importiere die Konfigurationsdatei '../config/config.js', die Umgebungsvariablen enthält
import "../config/config.js";

// Konfiguriere Cloudinary mit den Umgebungsvariablen
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Definiere die Funktion 'uploadToCloudinary', die eine Datei zu Cloudinary hochlädt
// Die Funktion erhält den Datei-Buffer (fileBuffer) und einen Callback als Parameter
export const uploadToCloudinaryDirUser = (fileBuffer, callback) => {
  // Rufe den Cloudinary-Uploader auf und übergebe das 'image'-Ressourcentyp und den Ordner 'MyFurniture'
  // Der Callback wird ausgeführt, wenn der Upload abgeschlossen ist
  cloudinary.uploader
    .upload_stream({ resource_type: "image", folder: "MyUsers" }, callback)
    .end(fileBuffer); // Übergebe den Datei-Buffer an den Uploader
};

// Definiere die Funktion 'deleteFromCloudinary', die ein Bild mit der angegebenen Image-ID aus Cloudinary löscht
// Die Funktion erhält die Image-ID als Parameter
export const deleteFromCloudinaryDirUser = (imageId) => {
  // Rufe den Cloudinary-Uploader auf und übergebe die Image-ID, die gelöscht werden soll
  // Ein Callback wird ausgeführt, um den Erfolg oder Fehler des Löschvorgangs zu behandeln
  cloudinary.uploader.destroy(imageId, (err) => {
    if (err) {
      // Bei einem Fehler logge den Fehler in der Konsole
      console.log("Cloudinary delete error:", err);
    } else {
      // Wenn das Bild erfolgreich gelöscht wurde, gebe eine Bestätigung in der Konsole aus
      console.log("Cloudinary delete success");
    }
  });
};

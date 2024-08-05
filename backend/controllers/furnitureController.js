// Importiere das 'Furniture'-Modell aus der '../models/PostModel.js'-Datei
// sowie die Funktionen 'uploadToCloudinary' und 'deleteFromCloudinary'
// aus der '../helpers/cloudinaryHelper.js'-Datei
import { Furniture } from "../models/PostModel.js";
import {
  uploadToCloudinaryDirFurniture,
  deleteFromCloudinaryDirFurniture,
} from "../helpers/cloudinaryHelper.js";

// Definiere die Funktion 'getAllFurniture', die alle Möbelstücke aus der Datenbank abruft
export const getAllFurniture = async (req, res) => {
  try {
    // Rufe alle Möbelstücke aus der Datenbank basierend auf den Anfragenparametern (req.query) ab. Wenn keine query übermittelt werden, dann werden alle Möbelstücke aus der Datenbank geladen. zb die Url "./api/furniture?size=gross"
    const furniture = await Furniture.find(req.query);
    console.log("hi", furniture);

    // Sende die Möbelstücke als Antwort zurück
    res.send(furniture);
    // Gebe die Möbelstücke auch in der Konsole aus
    console.log(furniture);
  } catch (err) {
    // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
    console.log(err);
    res.sendStatus(500);
  }
};

// export const getAllFurnitureTwo = async (req, res) => {
//   const { title, description, room, size, sortBy } = req.query;

//   try {
//     let responseData = await Furniture.find();

//     if (title) {
//       responseData = responseData.filter((data) => {
//         return data.title.toLowerCase().includes(title.toLowerCase());
//       });
//     }
//     if (room) {
//       responseData = responseData.filter((data) => {
//         return data.room.toLowerCase().includes(room.toLowerCase());
//       });
//     }
//     if (size) {
//       responseData = responseData.filter((data) => {
//         return data.size.toLowerCase().includes(size.toLowerCase());
//       });
//     }
//     if (description) {
//       responseData = responseData.filter((data) => {
//         return data.description
//           .toLowerCase()
//           .includes(description.toLowerCase());
//       });
//     }
//     if (sortBy) {
//       // Validiere den Sortierparameter
//       if (!["title", "room", "anotherProperty"].includes(sortBy)) {
//         return res.status(400).json({ error: "Invalid 'sortBy' parameter." });
//       }

//       responseData.sort((dataA, dataB) => {
//         return dataA[sortBy].localeCompare(dataB[sortBy]);
//       });
//     }

//     res.json(responseData);
//   } catch (err) {
//     console.error(err);
//     res
//       .status(500)
//       .json({ error: "There was an error fetching the Big Stuff" });
//   }
// };
export const getAllFurnitureTwo = async (req, res) => {
  try {
    // Daten von außen über den Request erhalten
    const filters = req.query;

    // Beispiel Query:
    // req.query = {
    //   room: "Wohnzimmer",
    //   size: "klein"
    // };

    const sortBy = filters.sortBy; // Zwischenspeichern der sortBy Query

    // Erstellen eines Filterobjekts für die Datenbankabfrage
    // Angenommen, die "key" in den Filtern entspricht dem Datenbankfeld
    const filterObject = {};
    for (const key in filters) {
      if (key !== "sortBy") {
        filterObject[key] = { $regex: new RegExp(filters[key], "i") };
      }
    }
    // Output:
    // filterObject = {
    //   room: { $regex: /Wohnzimmmer/i },
    //   size: { $regex: /klein/i }
    // };
    let query = Furniture.find(filterObject);

    // Sortierung basierend auf dem sortBy-Schlüssel
    if (sortBy) {
      // Wenn sortBy mit "asc" angegeben ist, wird aufsteigend sortiert
      // Ansonsten wird standardmäßig absteigend sortiert
      const sortOrder = sortBy === "asc" ? 1 : -1;
      query = query.sort({ [sortBy]: sortOrder });
    }

    let responseData = await query.exec();
    res.json(responseData);
    console.log(responseData.length);
  } catch (error) {
    console.error("Fehler beim Verarbeiten der Anfrage:", error);
    res.status(500).send("Interner Serverfehler");
  }
};

// Definiere die Funktion 'getFurnitureById', die ein Möbelstück anhand seiner ID aus der Datenbank abruft
export const getFurnitureById = async (req, res) => {
  try {
    // Rufe das Möbelstück aus der Datenbank anhand seiner ID (req.params.id) ab
    const furniture = await Furniture.findById(req.params.id);
    // Sende das Möbelstück als Antwort zurück
    res.send(furniture);
    // Gebe das Möbelstück auch in der Konsole aus
    console.log(furniture);
  } catch (err) {
    // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
    console.log(err);
    res.sendStatus(500);
  }
};

// Definiere die Funktion 'addFurniture', die ein neues Möbelstück zur Datenbank hinzufügt
export const addFurniture = async (req, res) => {
  // Gebe das empfangene Dateiobjekt in der Konsole aus
  console.log(req.file);
  try {
    // Überprüfen, ob das Bild erfolgreich hochgeladen wurde
    if (!req.file) {
      // Wenn keine Datei gefunden wurde, sende den Statuscode 400 mit einer Fehlermeldung zurück
      return res.status(400).send("No image file found.");
    }

    // Cloudinary-Upload-Stream-Ereignis mit Fehlerbehandlung
    uploadToCloudinaryDirFurniture(req.file.buffer, async (err, result) => {
      if (err) {
        // Bei einem Cloudinary-Upload-Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
        console.log("Cloudinary upload error:", err);
        return res.status(500).send("Error uploading image to Cloudinary.");
      }

      // Gebe das Ergebnis des Cloudinary-Uploads in der Konsole aus
      console.log("Cloudinary upload result:", result);
      try {
        // Erstelle ein neues Möbelstück in der Datenbank mit den empfangenen Daten sowie der URL und Image-ID des hochgeladenen Bildes. Dabei wird das Body der Anfrage übernommen und gleichzeitig um den key image erweitert, welcher die Values von Cloudinary enthält
        const response = await Furniture.create({
          ...req.body,
          image: { url: result.secure_url, imageId: result.public_id },
        });
        // Sende die Antwort als JSON zurück
        res.json(response);
      } catch (err) {
        // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
        console.log("Error creating furniture:", err);
        res.status(500).send("Error creating furniture.");
      }
    });
  } catch (err) {
    // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
    console.log("Error:", err);
    res.status(500).send("There was an error.");
  }
};

// Definiere die Funktion 'updateFurniture', die ein Möbelstück in der Datenbank aktualisiert
export const updateFurniture = async (req, res) => {
  // Gebe das empfangene Dateiobjekt und die empfangenen Daten in der Konsole aus
  console.log(req.file);
  console.log(req.body);
  try {
    // Extrahiere die Möbelstück-ID und die aktualisierten Daten aus der Anfrage
    const furnitureId = req.params.id;
    const updatedData = req.body;

    // Rufe das vorhandene Möbelstück aus der Datenbank basierend auf der ID ab
    const existingFurniture = await Furniture.findById(furnitureId);

    // Prüfen, ob ein Bild in der Request vorhanden ist
    if (req.file) {
      // Cloudinary-Upload-Stream-Ereignis mit Fehlerbehandlung. Das neue Bild wird hochgeladen
      uploadToCloudinaryDirFurniture(req.file.buffer, async (err, result) => {
        if (err) {
          // Bei einem Cloudinary-Upload-Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
          console.log("Cloudinary upload error:", err);
          return res.status(500).send("Error uploading image to Cloudinary.");
        }

        // Gebe das Ergebnis des Cloudinary-Uploads in der Konsole aus
        console.log("Cloudinary upload result:", result);
        try {
          // Nach dem Upload der neuen Bilddatei, wird die alte Bilddatei gelöscht.
          // Die Bedingung überprüft, ob ein Bild in dem jeweiligen Furniture Item mit ImageID enthalten ist
          if (existingFurniture.image && existingFurniture.image.imageId) {
            deleteFromCloudinaryDirFurniture(existingFurniture.image.imageId);
          }
          // Das jeweilige Furniture Item wird überschrieben mit den neuen Bilddaten
          const updatedFurniture = await Furniture.findByIdAndUpdate(
            furnitureId,
            {
              ...updatedData,
              image: {
                url: result.secure_url,
                imageId: result.public_id,
              },
            }
          );
          // Sende das aktualisierte Möbelstück als Antwort zurück und gebe es in der Konsole aus
          res.json(updatedFurniture);
          console.log(
            "Updated furniture with replaced image:",
            updatedFurniture
          );
        } catch (err) {
          // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
          console.log("Error updating furniture:", err);
          res.status(500).send("Error updating furniture.");
        }
      });
    } else {
      // Ist keine Bilddatei in der Request vorhanden, wird das Item ohne Dateien überschrieben.
      // Es werden nur die reinen Daten geschrieben
      try {
        const updatedFurniture = await Furniture.findByIdAndUpdate(
          furnitureId,
          updatedData
        );
        // Sende das aktualisierte Möbelstück als Antwort zurück und gebe es in der Konsole aus
        res.json(updatedFurniture);
        console.log("Updated furniture without image:", updatedFurniture);
      } catch (err) {
        // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
        console.log("Error updating furniture:", err);
        res.status(500).send("Error updating furniture.");
      }
    }
  } catch (err) {
    // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
    console.log("Error:", err);
    res.status(500).send("There was an error.");
  }
};

// Definiere die Funktion 'deleteFurniture', die ein Möbelstück aus der Datenbank löscht
export const deleteFurniture = async (req, res) => {
  try {
    // Extrahiere die Möbelstück-ID aus der Anfrage
    const furnitureId = req.params.id;
    // Lösche das Möbelstück aus der Datenbank anhand seiner ID
    const deletedFurniture = await Furniture.findByIdAndDelete(furnitureId);

    // Prüfen, ob das gelöschte Möbelstück ein Bild hatte und ob eine Image-ID vorhanden ist
    if (deletedFurniture.image && deletedFurniture.image.imageId) {
      // Lösche das Bild aus Cloudinary mit der Image-ID
      deleteFromCloudinaryDirFurniture(deletedFurniture.image.imageId);
    }

    // Sende das gelöschte Möbelstück als Antwort zurück und gebe es in der Konsole aus
    res.json(deletedFurniture);
    console.log(deletedFurniture);
  } catch (err) {
    // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
    console.log(err);
    res.status(500).send("There was an error");
  }
};

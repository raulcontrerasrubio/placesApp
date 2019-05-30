const functions = require("firebase-functions");
const cors = require("cors")({
  origin: true
});
const fs = require("fs");
const UUID = require("uuid-v4");

const gcconfig = {
  projectId: "placesapp-29404",
  keyFilename: "placesApp.json"
};

const { Storage } = require("@google-cloud/storage");

const gcs = new Storage(gcconfig);

exports.storeImage = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    const body = request.body;
    fs.writeFileSync("/tmp/uploaded-image.jpg", body.image, "base64", err => {
      console.log(err);
      return response.status(500).json({
        error: err
      });
    });
    const bucket = gcs.bucket("placesapp-29404.appspot.com");
    const uuid = UUID();
    return bucket.upload(
      "/tmp/uploaded-image.jpg",
      {
        uploadType: "media",
        destination: "/places/" + uuid + ".jpg",
        metadata: {
          metadata: {
            contentType: "image/jpeg",
            firebaseStorageDownloadTokens: uuid
          }
        }
      },
      (err, file) => {
        if (!err) {
          return response.status(201).json({
            imageUrl: `https://firebasestorage.googleapis.com/v0/b/${
              bucket.name
            }/o/${encodeURIComponent(file.name)}?alt=media&token=${uuid}`
          });
        } else {
          console.log(err);
          return response.status(500).json({
            error: err
          });
        }
      }
    );
  });
});

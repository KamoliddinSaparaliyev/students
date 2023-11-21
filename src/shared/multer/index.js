const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file format. Only images (jpeg, png, gif) are allowed."
      )
    );
  }
};

const generateUniqueFileName = (file) => {
  const fileExtension = file.mimetype.split("/")[1];
  return `avatar-${uuidv4()}.${fileExtension}`;
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads", "students"));
  },
  filename: function (req, file, cb) {
    cb(null, "Users-avatar/" + generateUniqueFileName(file));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;

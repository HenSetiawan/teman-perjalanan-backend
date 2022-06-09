const multer = require('multer');
const memoryStorage = multer.memoryStorage();

const filter = (req, file, cb) => {
  if (
    file.mimetype == 'image/png' ||
    file.mimetype == 'image/jpg' ||
    file.mimetype == 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
};

const fileUpload = multer({ storage: memoryStorage, fileFilter: filter });
module.exports = fileUpload;

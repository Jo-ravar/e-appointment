const multer = require('multer');
const randomString = require('random-string');

function certificateUpload() {
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/image/certificate/uploads');
    },
    filename: function(req, file, cb) {
      cb(null, randomString({ length: 10 }) + '.jpg'); //Appending .jpg
    },
  });
  const upload = multer({ storage: storage });
  return upload;
}

module.exports = {
  certificateUpload: certificateUpload,
};

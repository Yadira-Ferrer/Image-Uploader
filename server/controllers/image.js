const { response } = require('express');
const AWS = require('aws-sdk');
const uniqid = require('uniqid');

const BUCKET_URL = process.env.BUCKET_URL;
const BUCKET_DIRECTORY = 'upimages';

const uploadImage = (req, res = response) => {
  const img = req.body.image.split('base64,')[1];
  const ext = req.body.ext;
  const buff = new Buffer.from(String(img), 'base64');
  const uid_name = uniqid('image_');

  const fileKey = `${BUCKET_DIRECTORY}/${uid_name}.${ext}`;

  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileKey,
    Body: buff,
    ACL: 'public-read',
  };

  AWS.config.update({
    region: process.env.S3_REGION,
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  });

  const s3 = new AWS.S3();

  s3.putObject(params, (err, data) => {
    if (!err) {
      res.json({
        ok: true,
        url: `${BUCKET_URL}${fileKey}`,
      });
    } else {
      console.log(err);
      res.json({
        ok: false,
        msg: "Can't upload image.",
      });
    }
  });
};

module.exports = {
  uploadImage,
};

'use strict';
const AWS = require("aws-sdk");
const S3 = new AWS.S3();
const BUCKET_NAME = "suzukima-iam-share-test-bucket";

module.exports.index = async event => {

  console.log(`[event] ${JSON.stringify(event)}`);

  await main();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'finished'
      }
    )
  };
};

async function main() {
  try{
    await getObject();
    console.info('GetObject Succeeded');
  } catch(e) {
    console.warn(`[GetObject Error] ${e.message}`);
    console.warn('GetObject Failed');
  }

  try{
    await listObjects();
    console.info('listObjects Succeeded');
  } catch(ex) {
    console.warn(`[listObjects Error] ${ex.message}`);
    console.warn('listObjects Failed');
  }

  return;
}

async function getObject() {
  const params = {
    Bucket: BUCKET_NAME,
    Key: "iamTest.txt"
  };

  const data = await S3.getObject(params).promise();
  console.info(`[GetObject Body] ${data.Body.toString()}`);

  return;
}

async function listObjects() {
  const params = {
    Bucket: BUCKET_NAME,
  };

  const lists = await S3.listObjects(params).promise();
  for(const content of lists.Contents) {
    console.info(`[listObjects Key] ${content.Key}`);
  }

  return;
}
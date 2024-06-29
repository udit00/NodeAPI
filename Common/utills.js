import fs from 'fs';
import mime from 'mime';

export function encodeBase64(base64Str,imagePath) {
  var base64Image="data:image/png;base64,"+base64Str;

  var baseUrl="http://localhost:5000"
  var matches = base64Image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
  response = {};
   
  if (matches.length !== 3) {
  return new Error('Invalid input string');
  }
   
  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');
  let decodedImg = response;
  let imageBuffer = decodedImg.data;
  let type = decodedImg.type;
  let extension = mime.extension(type);
  let fileName = Date.now()+"."+ extension;
  try {
  fs.writeFileSync("."+imagePath + fileName, imageBuffer, 'utf8');
  return baseUrl+imagePath+fileName;
  } catch (e) {
    return e;
  }
  

 
}








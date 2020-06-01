import fs from "fs";

export const loadJSON = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFileSync(filepath,  (err, content) => {
      if (err) {
        reject(err);
      } else {
        try {
          resolve(JSON.parse(content));
        } catch (err) {
          reject(err);
        }
      }
    });
  });
};
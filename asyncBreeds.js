const fs = require("fs");
const breedDetailsFromFile = function(breed, cb) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    return cb(data);
  });
};

module.exports = breedDetailsFromFile;
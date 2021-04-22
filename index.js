const scrape = require("website-scraper");
let websiteURL = ""; // website URL goes here

scrape({
  urls: [websiteURL],
  urlFilter: function (url) {
    return url.indexOf(websiteURL) === 0;
  },
  recursive: true,
  maxDepth: 20, //increase the depth value if the website is huge
  prettifyUrls: true,
  filenameGenerator: "bySiteStructure",
  directory: "./node-website",
})
  .then((data) => {
    console.log("Done");
  })
  .catch((err) => {
    console.log(err);
  });

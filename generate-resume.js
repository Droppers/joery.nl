const express = require("express");
const path = require("path");
const puppeteer = require("puppeteer");

const generatePdf = async (url, path) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: "light" },
  ]);
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: "networkidle2" });
  await page.$eval("a", (e) => e.removeAttribute("href")); // Removes links from PDF

  await page.pdf({
    path: path,
    pageRanges: "1",
    format: "A4",
    printBackground: true,
  });
  await browser.close();
};

const port = process.env.PORT || 3001;
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
const server = app.listen(port, async () => {
  await generatePdf(
    `http://localhost:${port}/about`,
    "build/static/cv-joery-droppers.pdf"
  );
  server.close();
});

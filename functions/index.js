/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const chromium = require("chrome-aws-lambda");
const path = require("path");
const os = require("os");

admin.initializeApp();

const generatePdf = async (url, output) => {
  let browser = null;
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath:
        process.env.NODE_ENV !== "production"
          ? undefined
          : await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();
    await page.emulateMediaFeatures([
      { name: "prefers-color-scheme", value: "light" },
    ]);
    await page.goto(url, { waitUntil: "networkidle2" });
    await page.$eval("a", (e) => e.removeAttribute("href")); // Removes links from PDF

    await page.pdf({
      path: output,
      format: "A4",
      printBackground: true,
    });
  } catch (e) {
    console.error(e);
    return false;
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  return true;
};

exports.scheduledFunction = functions
  .runWith({ memory: "512MB", timeoutSeconds: 540 })
  .pubsub.schedule("0 3 * * *")
  .timeZone("Europe/Amsterdam")
  // eslint-disable-next-line no-unused-vars
  .onRun(async (context) => {
    const bucket = admin.storage().bucket("joery-f5c2d.appspot.com");
    // eslint-disable-next-line no-restricted-syntax
    for (const locale of ["en", "nl"]) {
      const output = path.join(os.tmpdir(), `cv-joery-droppers.${locale}.pdf`);
      const success = await generatePdf(
        `https://joery-${locale}.web.app/resume`,
        output
      );
      if (success) {
        bucket.upload(output, {
          destination: `resumes/cv-joery-droppers.${locale}.pdf`,
        });
      }
    }

    return "done";
  });

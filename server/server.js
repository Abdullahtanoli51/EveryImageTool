// server.js
import express from 'express';
import puppeteer from 'puppeteer';
const app = express();
const port = 3001;

app.use(express.json());

app.post('/capture-screenshot', async (req, res) => {
  try {
    const { url } = req.body;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const screenshotBuffer = await page.screenshot();
    await browser.close();

    res.set('Content-Type', 'image/png');
    res.send(screenshotBuffer);
  } catch (error) {
    console.error('Error capturing screenshot:', error);
    res.status(500).send('Error capturing screenshot');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

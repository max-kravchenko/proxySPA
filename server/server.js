const express = require('express');
const process = require('process');
const puppeteer = require('puppeteer');
const absolutify = require('absolutify');
const cors = require('cors');
const uppercase = require('@stdlib/string-base-uppercase');

require('events').EventEmitter.defaultMaxListeners = 10;

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    res.send('No url was provided');
  } else {
    try {
      const browser = await puppeteer.launch();

      const page = await browser.newPage();

      await page.goto(`https://${url}`, { waitUntil: 'networkidle0' });

      let html = await page.content();

      html = absolutify(html, `/?url=${url.split('/')[0]}`);

      await browser.close();

      res.send(html);
    } catch (err) {
      res.send(err);
    }
  }
});

app.listen(PORT, () => {
  console.log('Me is running');
});

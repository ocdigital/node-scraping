const express = require("express");
const app = express();
const puppeteer = require("puppeteer");

app.get("/test", async (req, res) => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto("https://example.com");

   const pageData = await page.evaluate(() => {
         return {
             h1: document.querySelector("h1").textContent,
             p: document.querySelector("p").textContent
        } 
    });

    await browser.close();

    res.json(pageData);
});

app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000");
});


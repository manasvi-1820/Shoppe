const express = require("express");
const next = require("next");
const port = 3000 || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  //   server.get("/home/:id", (req, res) => {
  //     const queryParams = { id: req.params.id }; // pass params to URL
  //     app.render(req, res, "/", queryParams);
  //   });

  server.get("/shop/:id", (req, res) => {
    const queryParams = { id: req.params.id }; // pass params to URL
    app.render(req, res, "/Shop", queryParams);
  });

  server.get("/", (req, res) => {
    app.render(req, res, "/");
  });

  server.get("/blog", (req, res) => {
    app.render(req, res, "/Blog");
  });

  server.get("/our-story", (req, res) => {
    app.render(req, res, "/OurStory");
  });

  server.get("/shop", (req, res) => {
    app.render(req, res, "/Shop");
  });

  server.get("/product-details", (req, res) => {
    app.render(req, res, "/ProductDetails");
  });

  //   server.get("/category-list/:subcategory", (req, res) => {
  //     const queryParams = { subcategory: req.params.subcategory }; // pass params to URL
  //     // console.log(":djsj",queryParams);
  //     app.render(req, res, "/CategoryList", queryParams);
  //   });

  server.all("*", (req, res) => {
    return handle(req, res, "/");
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${3000}`);
  });
});

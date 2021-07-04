const express = require("express");
const router = express.Router();
// const path = require("path");
const blogs = require("../data/blogs");

router.get("/", (req, res) => {
  res.render("home"); //Handlebar code
  //   res.sendFile(path.join(__dirname, "../templates/index.html"));
});

router.get("/blog", (req, res) => {
  res.render("blogHome", {
    blogs: blogs,
  });
  //   res.sendFile(path.join(__dirname, "../templates/bloghome.html"));
});

router.get("/blogpost/:slug", (req, res) => {
  const myBlog = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });
  res.render("blogPage", {
    title: myBlog[0].title,
    content: myBlog[0].content,
  });
  //   res.sendFile(path.join(__dirname, "../templates/blogPage.handlebars"));
});

module.exports = router;

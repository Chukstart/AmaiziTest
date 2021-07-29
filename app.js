const app = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("it works!");
  res.end();
};

module.exports = app;

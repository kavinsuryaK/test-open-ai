exports.getHelloMessage = (req, res) => {
  res.json({ message: "Hello from Advanced API!" });
};

exports.postData = (req, res) => {
  const data = req.body;
  res.json({ message: "Data received successfully!", data });
};

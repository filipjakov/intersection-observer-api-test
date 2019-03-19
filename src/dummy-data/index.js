module.exports = (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.writeHead(200, {"Content-Type": "application/json"});

  const images = [...Array(20).keys()].map(_ => 'https://via.placeholder.com/600x200');
  console.log(images);
  res.send({ images });
};
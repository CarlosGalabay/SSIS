const express = require('express');
const router = express.Router();

const server = express();

router.post('/persona', function(req, res, next) {

    res.status(200).json(req.body);
  
});

server.use(express.json());
server.use("/", router);

server.listen(3000, () => console.log("Server on!"));

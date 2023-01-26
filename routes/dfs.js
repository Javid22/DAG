var express = require('express');
var router = express.Router();

router.post('/dfs', function(req, res, next) {
  response = dfs(req.body.params.newData)
  console.log("request");
  console.log(req.body.params.newData);
  console.log("response");
  console.log(response);
  res.status(200).send(response);
});

function dfs(data) {
  let startNode = Object.keys(data)[0];
  let path = [startNode];
  let allPaths = [];
  function traverse(node) {
    if (Array.isArray(data[node])) {
      for (let child of data[node]) {
        path.push(child);
        traverse(child);
        path.pop();
      }
    }
    if (!data[node]) {
      allPaths.push([...path]);
    }
  }
  traverse(startNode);
  return { paths: allPaths };
}


module.exports = router;

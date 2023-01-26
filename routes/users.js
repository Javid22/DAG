var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// req
// {
//     "data": {
//         "1": [
//             2,
//             3,
//             4,
//             5
//         ],
//         "2": [
//             6
//         ],
//         "3": [
//             6,
//             7
//         ],
//         "4": [
//             7,
//             8
//         ],
//         "5": [
//             8
//         ]
//     }
// }

router.post('/dfs', function(req, res, next) {
  console.log("AAAAAAA");
  console.log(req.body);
  // {
  //   paths : [[1, 2, 6], [1, 3, 6], [1, 3, 7], [1, 4, 7], [1, 4, 8], [1, 5, 8]]
  // }
  let graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
  };
  generatePaths(graph, []);
  res.status(200).send(req.body);
});


function generatePaths(graph, startNode) {
  console.log("wwwwwwww");
  let allPaths = [];
  dfs(graph, startNode, [], allPaths);
  return allPaths;
}

function dfs(graph, node, path, allPaths) {
  path.push(node);
  if (graph[node].length === 0) {
    allPaths.push([...path]);
  } else {
    for (let i = 0; i < graph[node].length; i++) {
      dfs(graph, graph[node][i], path, allPaths);
    }
  }
  path.pop();
}

module.exports = router;

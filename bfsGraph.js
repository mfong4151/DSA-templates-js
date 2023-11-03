const bfs = (graph, startNode) => {
  const res = [];
  const queue = [startNode];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
      res.push(node);
      graph[node].forEach((neighbour) => {
        if (!visited.has(neighbour)) {
          queue.push(neighbour);
        }
      });
    }
  }

  return res;
};

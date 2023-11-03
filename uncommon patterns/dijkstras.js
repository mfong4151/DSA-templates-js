//Double check this one for sure

const dijkstra = (graph, start) => {
  const distances = new Map(Object.keys(graph).map(node => [node, Infinity]));
  distances.set(start, 0);

  const pq = [[0, start]];

  while (pq.length > 0) {
    const [dist, node] = pq.sort((a, b) => a[0] - b[0]).shift(); // Simulating priority queue

    if (dist > distances.get(node)) continue;

    for (const [neighbour, weight] of Object.entries(graph[node])) {
      const newDist = dist + weight;
      if (newDist < distances.get(neighbour)) {
        distances.set(neighbour, newDist);
        pq.push([newDist, neighbour]);
      }
    }
  }

  return Object.fromEntries(distances);
};

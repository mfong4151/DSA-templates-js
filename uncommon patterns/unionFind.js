class UnionFind {
  constructor() {
    this.parent = new Map();
  }

  find(x) {
    if (!this.parent.has(x)) {
      this.parent.set(x, x);
    }
    if (x !== this.parent.get(x)) {
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }

  union(x, y) {
    const xRoot = this.find(x);
    const yRoot = this.find(y);
    this.parent.set(xRoot, yRoot);
 
 }
}
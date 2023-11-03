class TrieNode {
  constructor() {
    this.children = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert = (word) => {
    let curr = this.root;
    for (const c of word) {
      if (!( curr.children[c])) {
        curr.children[c] = new TrieNode();
      }
      curr = curr.children[c];
    }
    curr.end = true;
  };

  search = (word) => {
    let curr = this.root;
    for (const c of word) {
      if (!( curr.children[c])) {
        return false;
      }
      curr = curr.children[c];
    }
    return curr.end;
  };

  startsWith = (prefix) => {
    let curr = this.root;
    for (const c of prefix) {
      if (!( curr.children[c])) {
        return false;
      }
      curr = curr.children[c];
    }
    return true;
  };
}

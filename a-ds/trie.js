// A simple trie that builds words composed from [a-z]
function Trie() {
  this.root = new TrieNode();
}

Trie.prototype.add = function(word, meaning) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const slot = word.charCodeAt(i) - 97;
    if (!(node.children[slot] instanceof TrieNode)) {
      node.children[slot] = new TrieNode();
    }
    node = node.children[slot];
  }
  node.store.meaning = meaning;
}

Trie.prototype.lookup = function(word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const slot = word.charCodeAt(i) - 97;
    if (!(node.children[slot] instanceof TrieNode)) {
      return null;
    }
    node = node.children[slot];
  }
  return node.store.meaning;
}

function TrieNode() {
  this.children = [];
  this.children.length = 26;  // [a-z]
  this.store = {};
}

// test cases
const t = new Trie();
t.add('hello', 'a form of common greeting');
t.add('world', 'everything we care about');
t.add('life', '42');
t.add('hell', 'opposite of heaven');
t.add('heaven', 'opposite of hell');
t.add('heavenly', 'holy damn it is good');

console.log(t.lookup('hell'));
console.log(t.lookup('hello'));
console.log(t.lookup('heaven'));
console.log(t.lookup('heavenly'));
console.log(t.lookup('life'));
console.log(t.lookup('sun'));
console.log(t.lookup('a short sentence should\'t break the trie'));

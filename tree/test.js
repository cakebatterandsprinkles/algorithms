const TreeHelper = require("./index");
const Node = TreeHelper.Node;
const Tree = TreeHelper.Tree;

describe("Node", () => {
  test("Node is a function", () => {
    expect(typeof Node.prototype.constructor).toEqual("function");
  });

  test("Node has data and children properties", () => {
    const node = new Node("a");
    expect(node.data).toEqual("a");
    expect(node.children.length).toEqual(0);
  });

  test("Node can add children", () => {
    const node = new Node(1);
    node.add([2, 3]);
    expect(node.children.length).toEqual(1);
    expect(node.children[0].data).toEqual([2, 3]);
    expect(node.children[0].children).toEqual([]);
  });

  test("Node can remove children", () => {
    const node = new Node(1);
    node.add(2);
    expect(node.children.length).toEqual(1);
    node.remove(2);
    expect(node.children.length).toEqual(0);
  });
});

describe("Tree", () => {
  test("is empty when it is first created", () => {
    const tree = new Tree();
    expect(tree.root).toEqual(null);
  });

  test("can traverse bf", () => {
    const letters = [];
    const tree = new Tree();
    tree.root = new Node(1);
    tree.root.add("b");
    tree.root.add(3);
    tree.root.children[0].add("d");

    tree.traverseBF((node) => {
      letters.push(node.data);
    });

    expect(letters).toEqual([1, "b", 3, "d"]);
  });

  test("can traverse DF", () => {
    const letters = [];
    const tree = new Tree();
    tree.root = new Node("a");
    tree.root.add("b");
    tree.root.add("d");
    tree.root.children[0].add("c");

    tree.traverseDF((node) => {
      letters.push(node.data);
    });

    expect(letters).toEqual(["a", "b", "c", "d"]);
  });
});

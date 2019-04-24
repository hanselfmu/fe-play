function TreeNode(val, children) {
    this.val = val;
    this.valType = typeof val;
    this.children = children || [];
}

function serializeTree(root) {
    let s = `${root.val}#0`;
    let nodeUUID = 1;
    const childrenList = root.children.map(child => ({
        parent: { id: 1 },
        id: ++nodeUUID,
        self: child,
    }));    // list of { parent: node, id, self: node }

    while (childrenList.length > 0) {
        const child = childrenList.shift();
        s += `,${getFullNodeStr(child)}`;
        child.self.children.forEach(grandChild => {
            childrenList.push({
                parent: child, id: ++nodeUUID, self: grandChild
            });
        });
    }

    return s;
}

function deserializeTree(s) {
    const nodeStrList = s.split(',');
    const rootProps = getNodeProps(nodeStrList[0]);
    const root = new TreeNode(rootProps.val);

    let nodeUUID = 1;
    let nodeMap = {
        '1': root,
    };
    for (let i = 1; i < nodeStrList.length; i++) {
        const nodeProps = getNodeProps(nodeStrList[i]);
        const curNode = {
            id: `${++nodeUUID}`,
            node: new TreeNode(nodeProps.val),
        };
        nodeMap[nodeProps.parentID].children.push(curNode.node);
        nodeMap[curNode.id] = curNode.node;
    }
    return root;
}

function getFullNodeStr(node) {
    return `${node.self.val}:${node.self.valType}#${node.parent.id}`
}

function getNodeProps(n) {
    const elements = n.split('#');
    const [val, type] = elements[0].split(':');
    let typedVal = val;
    switch (type) {
        case 'number':
            typedVal = Number(val);
            break;
    }
    return {
        val: typedVal,
        parentID: elements[1],
    }
}

const testTree = new TreeNode('root', [
    new TreeNode(2, []),
    new TreeNode(3, [
        new TreeNode(5, []),
        new TreeNode(6, []),
        new TreeNode(7, [
            new TreeNode(12, []),
            new TreeNode(13, []),
        ]),
        new TreeNode(8, []),
    ]),
    new TreeNode(4, [
        new TreeNode(9, [
            new TreeNode(14, []),
            new TreeNode(15, []),
            new TreeNode(16, []),
        ]),
        new TreeNode(10, []),
        new TreeNode(11, []),
    ]),
]);

const testTreeStr = serializeTree(testTree);
console.log(testTreeStr);
const desrlTree = deserializeTree(testTreeStr);
console.log(desrlTree);
console.log(desrlTree.children[1]);
console.log(desrlTree.children[2].children[0]);
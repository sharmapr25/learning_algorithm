class Node{
    _value;
    _leftNode=null;
    _rightNode=null;

    constructor(value, leftNode, rightNode) {
        this._value = value;
        this._leftNode = leftNode;
        this._rightNode = rightNode;
    };

    addLeftNodeTo(queue){
        if(this._leftNode){
            queue.push(this._leftNode);
        }

    }

    addRightNodeTo(queue){
        if(this._rightNode){
            queue.push(this._rightNode);
        }
    }
}

let initialize = () => {
    //left sub tree
    let a_Node = new Node("a");
    let c_Node = new Node("c");
    let b_Node = new Node("b", a_Node, c_Node);
    let e_Node = new Node("e");
    let leftNode = new Node("d", b_Node, e_Node);

    //right sub tree
    let i_Node = new Node("i");
    let j_Node = new Node("j", i_Node);
    let h_Node = new Node("h", null, j_Node);
    let g_Node = new Node("g", h_Node);
    let l_Node = new Node("l");
    let rightNode = new Node("k", g_Node, l_Node);

    return new Node("f", leftNode, rightNode);
};

class BFS_traverse{

    traverse(rootNode) {
        if(rootNode === null){
            return;
        }
        let queue = [];
        let traverseOrder = [];
        queue.push(rootNode);
        while(queue.length > 0){
            let currentNode = queue[0];
            currentNode.addLeftNodeTo(queue);
            currentNode.addRightNodeTo(queue);
            traverseOrder.push(queue.shift()._value);
        }
        return traverseOrder;
    }
}

let rootNode = initialize();
console.log(new BFS_traverse().traverse(rootNode));



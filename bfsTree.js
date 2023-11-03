// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const levelOrder = (root) => {
    if (!root) return [];
    
    let res = [];
    let queue = [root];  // Using an array as a queue

    while (queue.length > 0) {
        let level = [];
        let levelLength = queue.length;  // Remember the initial length of the queue

        for (let i = 0; i < levelLength; ++i) {
            let node = queue.shift();  // Dequeue the first element in the queue
            level.push(node.val);
            
            if (node.left !== null) queue.push(node.left);  // Enqueue left child
            if (node.right !== null) queue.push(node.right);  // Enqueue right child
        }

        res.push(level);  // Push the level's values into the result array
    }
    
    return res;
};

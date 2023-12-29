//A BinaryTree class containing value, left and right child nodes and a depth
class BinaryTree {
    constructor(value, depth = 1) {
      this.value = value;
      this.depth = depth;
      this.left = null;
      this.right = null;
    }
  
    //An .insert() method to add and place a value at the correct location in the binary tree
    insert(value) {
        if (value < this.value) {
            
            if (!this.left) {
                this.left = new BinaryTree(value, this.depth + 1);
            } else {
                this.left.insert(value);
            }
        } else {
            if (!this.right) {
            this.right = new BinaryTree(value, this.depth + 1);
            } else {
            this.right.insert(value);
            }
        }
    }
    
    //A .getNodeByValue() method to retrieve a child node by its value or null
    getNodeByValue(value) {
      if (this.value === value) {
        return this;
      } else if ((this.left) && (value < this.value)) {
          return this.left.getNodeByValue(value);
      } else if (this.right) {
          return this.right.getNodeByValue(value);
      } else {
        return null;
      }
    }
  
    //A .depthFirstTraversal() method to traverse the binary tree using the inorder traversal option
    depthFirstTraversal() {
      if (this.left) {
        this.left.depthFirstTraversal();
      }
      console.log(`Depth=${this.depth}, Value=${this.value}`);
      if (this.right) {
        this.right.depthFirstTraversal();
      }
    }
  
  };
  
  module.exports = BinaryTree;
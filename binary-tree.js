'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
//		this.__size = 0;
	}

	insert(data) {
	  if (data == null) {
	  	return;
	  }
		var node = this.root;
		if (node == null) {
			this.root = new Node(data);
//			this.__size++;
			return;
		}
		while (true) {       
		  if (node.data < data) {
		  	if (node.right == null) {
		  		node.right = new Node(data);
//		  		this.__size++;
		  		return;
		  	}
		  	node = node.right;
		  } else if (node.data > data) {
		  	if (node.left == null) {
		  		node.left = new Node(data);
//		  		this.__size++;
		  		return;
		  	}
		  	node = node.left;
		  } else {
		  	return;
		  }	
		}
	}

	contains(data) {
		var node = this.root;
		while (true) {
			if (node == null) {
				return false;
			}   
			if (node.data < data) {
				node = node.right;
			} else if (node.data > data) {
			  node = node.left;
			} else {
				return true;
			}
		}

	}

	remove(data) {
	  if (data == null || this.isEmpty()) {
	  	return;
	  }
	  var node = this.root;
	  var parent = this.root;
	  while (true) {
	  	if (node == null) {
	  		return;
	  	}
	  	if (node.data < data) {
	  		parent = node;
	  	  node = node.right;
	  	} else if (node.data > data) {
	  		parent = node;
	  		node = node.left;
	  	} else {
	  		// node.data == data;
//  			this.__size--;
	  		if (node.left == null) {
	  		  if (node.right == null) {
	  		  	if (parent == node) {
	  		  		this.root = null;
	  		  		return;
	  		  	}
	  		  	if (parent.left == node) {
	  		  		parent.left = null;
	  		  	} else {
	  		  		parent.right = null;
	  		  	}
	  		  } else {
	  		  	node.data = node.right.data;
	  		  	node.left = node.right.left;
	  		  	node.right = node.right.right;
	  		  }
	  		} else {        
	  			parent = node;
	  			var max = node.left;
	  			while (max.right != null) {
	  			  parent = max;
	  			  max = max.right;
	  			}
	  			if (parent.left == max) {
	  				parent.left = max.left;
	  			} else {
	  				parent.right = max.left;
	  			}	
	  			node.data = max.data;
	  		}
	  		return;
	  	}
	  }
	}

	size() {
//		return __size;
		return sizeInternal(this.root);
	}

	isEmpty() {
		return this.size() == 0;
	}
}


function sizeInternal(node) {
	if (node == null) {
		return 0;
	}
	return 1 + sizeInternal(node.left) + sizeInternal(node.right);
}
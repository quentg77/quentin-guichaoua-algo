class LinkedListNode {
	constructor(v) {
		this._data = v;
		this._next = null;
	}

	value() {
		return this._data;
	}

	setValue(v) {
		this._data = v;
	}

	next() {
		return this._next;
	}

	setNext(node) {
		this._next = node;
	}
}

class LinkedList {
	constructor() {
		this._head = null;
	}

	appendToTail(item) {
		const newNode = new LinkedListNode(item);

		if (this._head === null) {
			this._head = newNode;
		}
		else {
			let n = this._head;

			while (n.next() !== null) {
				n = n.next();
			}
			n.setNext(newNode);
		}
	}

	deleteNode(index) {
		if (!this._head) {
			throw "empty list";
		}

		if (!this._head.next()) {
			this._head = null;
		}

		let n = this._head;
		let prev = null;

		for (let i = 0; i < index; i++) {
			if (n.next()) {
				prev = n;
				n = n.next();
			}
			else {
				throw "out of index";
			}
		}

		prev.setNext(n.next());
	}
}

module.exports = LinkedList;

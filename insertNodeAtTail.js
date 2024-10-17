function insertNodeAtTail(head, data) {
    let newNode = new SinglyLinkedListNode(data);

    if (head === null) {
        return newNode;
    }

    let currentNode = head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    
    return head;
}

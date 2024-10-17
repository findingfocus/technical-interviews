function insertNodeAtPosition(llist, data, position) {
    let newNode = new SinglyLinkedListNode(data);
    
    if (position === 0) {
        return newNode;
    }
    
    let currentNode = llist
    for (let i = 0; i < position -1;i++){
        currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    return llist;
}

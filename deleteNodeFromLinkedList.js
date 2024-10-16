function deleteNode(head, position) {
    if (position == 0) {
        head = head.next
        return head
    }
    let currentNode = head
    for (let i = 0; i < position - 1; i++) {
      currentNode = currentNode.next
    }
    //SET POINTER TO WHAT OLD NODE WAS POINTING TO
    currentNode.next = currentNode.next.next
    return head
}

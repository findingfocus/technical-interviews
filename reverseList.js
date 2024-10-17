function reversePrint(llist) {
    if (llist === null) {
        return;
    }
    reversePrint(llist.next);
    console.log(llist.data);
} 

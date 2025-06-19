 function linkedListCycle(head){
    let seeNodes = new Set();

    let curr = head;
    while(curr != null){
        if(seeNodes.has(curr)){
            return true;
        }
        seeNodes.add(curr);
        curr = curr.next
    }
    return false;
 }
// Definition for singly-linked list.
const ListNode = (val = 0, next = null) => ({ val, next });

// Finds the right middle node of a linked list
const middleNode = head => {
  let slow = head, fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// Finds the left middle node of a linked list
const middleNodeLeft = head => {
  let slow = head, fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// Reverses the first half of a linked list and splits it in half
const reverseAndSplit = head => {
  let fast = head;
  let slow = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  
  // prev is the head of the reversed first half
  // slow is the head of the second half of the list
  // This can be modified based on how you want to use the split halves
  return { reversedHalf: prev, secondHalf: slow };
};

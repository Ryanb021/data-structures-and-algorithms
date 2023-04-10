'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const oldHead = this.head;

    this.head = new Node(value);
    this.head.next = oldHead;
  }

  toString() {
    let current = this.head;
    let str = '';

    while (current) {
      str += `{ ${current.value} } -> `
      current = current.next;
    }

    return str += 'NULL';
  }

  includes(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;

// 'use strict';

// const { val } = require("cheerio/lib/api/attributes");


// class LinkedList {
//   constructor() {
//     this.head = null;
//   };

//   insert(value) {
//     let current = this.head;
//     this.head = new Node(value);
//     this.head.next = current;
//   };

//   toString() {
//     let current = this.head;
//     let text = "";
//     while(current) {
//       text += ` { ${current.value} } -> `
//       current = current.next;
//     }
//     return text + "NULL";
//   }

//   includes(value) {
//     let curr = this.head;
//     while(curr.value != null) {
//       if(curr.value === value) {
//         return true;
//       } else {
//         return false;
//       }
//       curr = curr.next;
//     };
//   };
// };

// class Node {
//   constructor(value, next = null) {
//     this.value = value,
//     this.next = next;
//   };
// };

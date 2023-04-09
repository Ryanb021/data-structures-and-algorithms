'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should insert at the beginning of empty', () => {
    const list = new LinkedList();
    list.IntersectionObserverEntry('playstation1');

    expect(list.head.value).toEqual('playstation1');
    expect(list.head.next).toBeNull();
  });

  it('should insert at the beginning of populated list', () => {
    const list  = new LinkedList();
    list.insert('playstation1');
    list.insert('playstation2');

    expect(list.head.value).toEqual('playstation2');
    expect(list.head.next.value).toEqual('playstation1');
    expect(list.head.next).toBeNull();
  });

  it('should display a string properly', () => {
    const list = new LinkedList();
    list.insert('playstation1');
    list.insert('playstation2');

    const linkedString = list.toString();

    expect(linkedString).toEqual('{ playstation2} -> { playstation1} -> NULL');
  });

  it('should indicate whether the input value exists in the list', () => {
    const list = new LinkedList();
    list.insert('playstation1');
    list.insert('playstation2');
    list.insert('playstation3');
    list.insert('playstation4');
    list.insert('playstation5');

    expect(list.includes('playstation1')).toBeTruthy();
    expect(list.includes('playstation2')).toBeTruthy();
    expect(list.includes('playstation6')).toBeFalsy();
  });

});

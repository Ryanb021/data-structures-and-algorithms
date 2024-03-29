'use strict';

const { LinkedList, zipLists } = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should insert at the beginning of empty', () => {
    const list = new LinkedList();
    list.insert('playstation1');

    expect(list.head.value).toEqual('playstation1');
    expect(list.head.next).toBeNull();
  });

  it('should insert at the beginning of populated list', () => {
    const list  = new LinkedList();
    list.insert('playstation1');
    list.insert('playstation2');

    expect(list.head.value).toEqual('playstation2');
    expect(list.head.next.value).toEqual('playstation1');
    expect(list.head.next.next).toBeNull();
  });

  it('should display a string properly', () => {
    const list = new LinkedList();
    list.insert('playstation1');
    list.insert('playstation2');

    const linkedString = list.toString();

    expect(linkedString).toEqual('{ playstation2 } -> { playstation1 } -> NULL');
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

  it('should zip together two lists', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list1.append('playstation1');
    list1.append('playstation2');
    list1.append('playstation3');
    list2.append('playstation4');
    list2.append('playstation5');

    const zipped = zipLists(list1, list2);

    expect(zipped.head.value).toEqual('playstation1');
    expect(zipped.head.next.value).toEqual('playstation4');
    expect(zipped.head.next.next.value).toEqual('playstation2');
  })

  it('should append to end', () => {
    const linked = new LinkedList();
    linked.insertAfter('playstation1', 'end');

    expect(linked.head.value).toEqual('end');
  });

});

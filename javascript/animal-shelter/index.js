class animalShelter {
  const () {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue (species) {
    this.storage[this.tail] = species;
    this.tail++;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

const pref = animalShelter();

pref.enqueue('dog1');
pref.enqueue('dog2');
pref.enqueue('dog3');
pref.enqueue('dog4');

pref.dequeue();

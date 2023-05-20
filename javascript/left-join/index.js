function leftJoin(hashmap1, hashmap2) {
  const result = [];
  Object.keys(hashmap1).forEach(key => {
    const synonym = hashmap1[key];
    const antonym = hashmap2.hasOwnProperty(key) ? hashmap2[key] : null; // or any other flavor of NULL
    result.push({ key, synonym, antonym });
  });
  return result;
}

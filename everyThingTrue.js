function truthCheck(collection, pre) {
  let truthy = true;

  collection.forEach(obj => {
    if (!obj[pre]) {
      truthy = !!obj[pre];
    }
  });

  return truthy;
}

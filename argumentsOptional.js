function addTogether() {
  if (arguments.length < 2) {
    if (typeof arguments[0] === 'number') return (x, y = arguments[0]) => addTogether(x, y);
  }

  if (typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number') return undefined;

  return arguments[0] + arguments[1];
}

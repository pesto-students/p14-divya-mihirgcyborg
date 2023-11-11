function* stringToSymbolIterator(arr) {
  for (const str of arr) {
    yield Symbol(str);
  }
}

const strings = ["hello", "world", "test"];
const iterator = stringToSymbolIterator(strings);
for (const symbol of iterator) {
  console.log(symbol);
}

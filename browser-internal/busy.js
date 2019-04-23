let str = '';
for (let i = 0; i < 3e7; i++) {
  str += i;
  if (str.length > 1000) {
    str = '';
  }
}

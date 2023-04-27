for (let i = 1; i <= 100; i++) {
  let out = "";
  if (!(i % 3)) out += "Fizz";
  if (!(i % 5)) out += "Buzz";
  if (!out) out = i;
  console.log(out);
}

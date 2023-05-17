const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};

// objeto pra json
console.log(JSON.stringify(obj));

// json pra objeto (forma errado)
// console.log(JSON.parse("{a :1, b: 2, c: 3}"));

//forma valida
console.log(JSON.parse('{"a": 1, "b": 3, "c": 3}'));
console.log(
  JSON.parse(
    '{"a": "Larissa", "b": "Viviane", "c": ["Larissa","Viviane", 2, 3]}'
  )
);

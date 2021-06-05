const person = { name: "minsu" };

function say(str) {
  console.log(`${this.name}: ${str}`);
}

say('hello world')
say.call(person, 'hello world')
say.apply(person, ['hello world'])

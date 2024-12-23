{
  let message = 'Hello World';
  const messageLower = message.toLowerCase();
  console.log(messageLower);

  const user = {
    name: 'Daniel',
    age: 26,
  };
  console.log(user);

  function greet(person: string, date: Date): void {
    console.log(`Hello ${person}, today is ${date.toLocaleDateString()}!`);
  }

  greet('John', new Date());
}

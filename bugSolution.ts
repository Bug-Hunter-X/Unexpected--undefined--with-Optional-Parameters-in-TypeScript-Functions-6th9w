function printName(name?: string): void {
  const nameToPrint = name === undefined ? "Anonymous" : name; // Provide a default value
  console.log(nameToPrint);
}

printName(); // Prints 'Anonymous'
printName(undefined); // Prints 'Anonymous'
printName("John"); // Prints 'John' 
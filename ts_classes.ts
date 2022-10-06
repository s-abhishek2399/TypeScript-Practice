// TypeScript adds types and visibility modifiers to JavaScript classes.

class Book {
    nameOf!: string;
  }
  
  const bookName = new Book();
  bookName.nameOf = "Atomic Habits";
  console.log(bookName);

/*
  Members: Visibility
  Class members also be given special modifiers which affect visibility.  */

  class Book1 {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const book1 = new Book1("Atomic Habits");
  console.log(book1.getName()); // person.name isn't accessible from outside the class since it's private


  /*
  Parameter Properties
TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
  */
  
//public constructor(private name: string)

//Inheritance: Implements

interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {// inherited from parent shape
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }

  const myRect = new Rectangle(100,20);

  console.log(myRect.getArea()); 
  
  
// Inheritance Extends

// Classes can extend each other through the extends keyword. A class can only extends one other class.

interface Shape1 {
    getArea: () => number;
  }
  
  class Rectangle1 implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  class Square extends Rectangle1 {// classes can extends each other 
    public constructor(width: number) {
      super(width, width); 
    }
  
    // getArea gets inherited from Rectangle
  }
  

  // Abstract Classes
//Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.


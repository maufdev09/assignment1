{
  const formatString = (input: string, toUpper?: boolean): string => {
    let formattedString = "";
    if (toUpper || toUpper == undefined) {
      return input.toUpperCase();
    } else if (!toUpper) {
      return input.toLowerCase();
    }
  };

  // console.log(formatString("Helllo", true));
}

{
  type Tbook = {
    title: string;
    rating: number;
  };

  const books: Tbook[] = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  const filterByRating = (items: Tbook[]): Tbook[] => {
    const filterdbook = items.filter((item) => item.rating > 4);

    return filterdbook;
  };

  // console.log(filterByRating(books));
}

{
  const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((a, b) => a.concat(b), []);
  };

  // console.log(concatenateArrays<string>(["a", "b"], ["c"]));
  // console.log(concatenateArrays<number>([1, 2], [3, 4], [5]));
}

{
  class Veicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    public getInfo(): string {
      return `Make: ${this.make}, Year:${this.year} `;
    }
  }

  class Car extends Veicle {
    model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");

  // console.log(myCar.getInfo());
  // console.log(myCar.getModel());\
  // Output: "Make: Toyota, Year: 2020" // Output: "Model: Corolla"
}

{
  const processValue = (value: string | number): number => {
    if (typeof value == "string") {
      return value.length;
    }

    if (typeof value == "number") {
      return value * 2;
    }
  };

  // console.log(processValue("hello"));
  // console.log(processValue(10)); // Output: 5 // Output: 20
}

{
  interface Product {
    name: string;
    price: number;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 255 },
    { name: "Bag", price: 50 },
  ];


  const getMostExpensiveProduct = (products: Product[]): Product | null => {
    if (products.length === 0) {
      return null;
    }

   return products.reduce((max, current) => {
      return current.price > max.price ? current : max;
    });
  };


// console.log(getMostExpensiveProduct(products));

}


{

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  const getDayType= (day: Day): string=>{

switch(day){
  case Day.Saturday:
   case Day.Sunday:
    return "Weekend";
default:
  return "weekday";
}

  }

  // console.log(getDayType(Day.Friday));
  // console.log(getDayType(Day.Sunday));
  
}



{



  const squareAsync=(n:number):Promise<number>=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        if (n<0) {
          reject(new Error("Negative number not allowed"))
        } else {
          resolve(n*n)
        }
      }, 1000);
    })
  }
  
  squareAsync(4).then(console.log);        
squareAsync(-3).catch(console.error);    
}



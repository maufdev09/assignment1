{
  const formatString = (input: string, toUpper?: boolean): string => {
    let formattedString = "";
    if (toUpper || toUpper == undefined) {
      return input.toUpperCase();
    } else if (!toUpper) {
      return input.toLowerCase();
    }
  };

  console.log(formatString("Helllo", true));
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

  console.log(filterByRating(books));
}


{




}
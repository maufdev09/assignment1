# What are some differences between interfaces and types in TypeScript?

## Interfaces vs TypeScript: Key Difference and When to Use Each.

Typescript have to primary ways to define javascript function,object and primitive data.In This Blog post, w'll explore their differences.

 Interface

Interfaces are a way to define the structure of an object and function.
example:

interface User{
id:number;
name:string;
email:string
}

Type Alias(type)
Type aliases allow you to create a new name for any type, including primitives,unions,tuples.
type User={
id:number;
name:string;
email:string;
}

key Differences

1.  extending:
    interface use extends for inheritance on the other hand Type use interface
2.  Re Declaration:
    interface name can be reDeclare but types can not be re-declare
3.  Union and Tuple Types:
    type supports Union (|) and tuples but interface cannot

# What is the use of the keyof keyword in TypeScript? Provide an example.

## The Use of Typescript in Typescript.

Typescript Provides several advance type for type safety, and on of the most useful is keyof.

so,
What is keyof ?
The keyof operator takes an object type and returns a union type of its keys.

sytax:
type keysofObject= keyof someObjectType

example:

interface User{
    id:number;
    name:string;
    email: string;
}
type UserKeys = keyof User;


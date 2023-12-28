//Basics Types
const firstName: string = 'Braedon'
const yearOfBirth: number = 1995
const loading: boolean = true
const value:undefined=undefined
const lastName:null =null


// Typing Objects
let user: {
  name: string
  age: number
  lovesIceCream?: boolean
} = {
  name: 'surendra',
  age: 25,
  lovesIceCream: true,
}

user={name:"surendra",age:2}


// Typing Arrays
const favouriteFruits: string[] = ['mango', 'banana', 'orange']
const luckyNumbers: number[] = [7, 13, 42]




// Typing Functions

const sum =(a:number,b:number)=>{
return a+b
}

sum(1,2)
const getSquare = (x: number): number => x ** 2

const handleApiCall = (payload: { userId: string }, callback: (userId: string) => void) => {
    callback(payload.userId)
}


//interface


interface User {
  firstName: string
  lastName: string
  age: number
}
interface Props  {
  // * method syntax
  getUserName(user: User): string
  // * arrow function syntax
  getUserAge: () => number
  user: User[]
  fetching: boolean
}

function UserProfile(props: User) {
  return (
      <>
          <div>name: {getUserName(props)}</div>
          <div>age: {props.age}</div>
      </>
  )
}

const getUserName =(props:User)=>{
 return props.firstName

}

const RenderDemo = ()=>{

  return (
    <UserProfile firstName="Braedon" lastName="Gough" age={25} />
  )

}

RenderDemo()



// Extending an interface:

interface Timestamps {
  createdAt: string
  updatedAt?: string
  deletedAt?: string
}

interface Users extends Timestamps {
  firstName: string
  lastName: string
  age: number
}

const users: Users = {
  firstName: 'Braedon',
  lastName: 'Gough',
  age: 25,
  createdAt:"createdAt"
  
}




// There are two main tools to declare the shape of an
// object: interfaces and type aliases.
//
// They are very similar, and for the most common cases
// act the same.

type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}


// They both support extending other interfaces and types.
// Type aliases do this via intersection types, while
// interfaces have a keyword.

type Owl = { isBird: true } & BirdType;

interface Chicken extends BirdInterface {
  colourful: false;
  flies: false;
}

let owl: Owl = { wings: 2, isBird: true };
let chicken: Chicken = { wings: 2, colourful: false, flies: false };

// That said, we recommend you use interfaces over type
// aliases. Specifically, because you will get better error
// messages. If you hover over the following errors, you can
// see how TypeScript can provide terser and more focused
// messages when working with interfaces like Chicken.

// owl = chicken;
// chicken = owl;

// One major difference between type aliases vs interfaces
// are that interfaces are open and type aliases are closed.
// This means you can extend an interface by declaring it
// a second time.

interface Kitten {
  purrs: boolean;
}

interface Kitten {
  colour: string;
}

// In the other case a type cannot be changed outside of
// its declaration.

// type Puppy = {
//   color: string;
// };

// type Puppy = {
//   toys: number;
// };



// const passServer=(a:string)=>{
// return [a]
// }
  
//  const getServer =(passServer:(a:string)=>void)=>{
//   let result =  passServer("a")
// result.map(()=>{

// })

//  }
//  getServer(passServer)



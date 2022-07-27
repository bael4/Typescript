interface Person {
name:string
age:number
}

type PersonKeys = keyof Person  //name age

let key: PersonKeys = 'name'

type User = {
    _id:number
    name:string
    email:string
    createAd:Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createAd'>
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta1 = 'name '
type Address = {
    street: string
    number:number
}

type User = {
    name?: string
    age: number
    address: Address
}

type userProperties = keyof User

function pickProperty(user: User, property: userProperties){
    return user[property]
}

const usuario: User = {
    name: 'Stella',
    age: 26,
    address: {
        street: 'Rua tal',
        number: 600
    }
}

console.log(pickProperty(usuario, 'age'))

const video = {
    title: 'Usando TypeScript',
    duration: 180,
}

type Video = keyof typeof video

// Utility Types

type PickPropertyReturnType = ReturnType<typeof pickProperty>

type UserWithoutAddress = Omit<User, 'address'> // omitir algum dado

type UserNameAndAge = Pick<User, 'name' | 'age'> // inserir apenas algum dado

type UserPartial = Partial<User> // deixar valores opcionais

 
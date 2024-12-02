import {users} from "./TestsAssociativeMassive.test";

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}


let user = {id: 100500, name: 'Igor'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'

export const usersArray  = [
    {id: 101, name: 'Dimych'},
    {id: 10212, name: 'Natasha'},
    {id: 1034231, name: 'Valera'},
    {id: 103104, name: 'Katya'},
]



// usersArray.find (user => user.id === '10')
// usersArray.filter(user => user.id === '10')



// type UserType = {
//     [key: string]: { id: string, name: string }
// }
//
// export const users:UserType = {
//     '1': {id: '10', name: 'Cristian'},
//     '2': {id: '20', name: 'david'},
//     '3': {id: '30', name: 'joe'},
//     '4': {id: '40', name: 'tom'},
//     '5': {id: '50', name: 'qwe'},
//     '6': {id: '60', name: 'op'},
//     '7': {id: '70', name: 'name'},
//     '8': {id: '80', name: 'guy'},
// }
//
// let user = {id: '100', name: 'new user'}
// users[user.id] = user
// // delete users[user.id]
// users[user.id].name = 'hello world'
// console.log(users)
//
//
// export const userArray = [
//     {id: '10', name: 'Cristian'},
//     {id: '20', name: 'david'},
//     {id: '30', name: 'joe'},
//     {id: '40', name: 'tom'},
//     {id: '50', name: 'qwe'},
//     {id: '60', name: 'op'},
//     {id: '70', name: 'name'},
//     {id: '80', name: 'guy'},
// ]
//
// userArray.find (user => user.id === '10')
// userArray.filter(user => user.id === '10')
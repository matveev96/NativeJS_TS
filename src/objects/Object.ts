type StreetType = {
    index: number
    streetName: string
}

type AddressType = {
    cityTitle: string
    streetTitle: StreetType
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

type TechType = {
    id: number,
    title: string
}

export const student: StudentType = {
    id: 1,
    name : "Alex",
    age: 23,
    isActive: false,
    address: {
        cityTitle: "Minsk",
        streetTitle: {
            index: 12321,
            streetName: "assa"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}
console.log(student.address.streetTitle.streetName)
console.log(student.technologies[0].title)
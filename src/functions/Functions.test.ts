import {StudentType} from "../objects/Object";
import {
    addSkill,
    changeBudget,
    changeStudentLive, createMessage,
    makeStudentActive,
    repairHouse,
    toFireStaff,
    toHireStaff
} from "./Functions";
import {CityType} from "../objects/Object02";

let city: CityType;
let student: StudentType;

beforeEach(() => {
    student = {
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
})

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 200, street: {title: "Hogwarts street"}}
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "Souths park str"
                    }
                }
            },
        ],
        citizensNumber: 100000
    }
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test('does student live in city', () => {
    expect(student.address.cityTitle).toBe('Minsk')
    const result1 = changeStudentLive(student, 'Moscow')
    const result2 = changeStudentLive(student, 'Minsk')
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})

test('Budget should be changed for HOSPITAL', () => {
    changeBudget(city.governmentBuildings[0], 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000)
    // expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE-STATION', () => {
    changeBudget(city.governmentBuildings[1], -100000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
    // expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('House should be repaired', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
})

test('staff should be increased', () => {
    toFireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be hire', () => {
    toHireStaff(city.governmentBuildings[0], 20)
    toHireStaff(city.governmentBuildings[1], 100)
    expect(city.governmentBuildings[0].staffCount).toBe(220)
    expect(city.governmentBuildings[1].staffCount).toBe(1100)
})

test("Hello New York citizens. I want you to be happy. All 100000 people", () => {
    // const message = createMessage(city);
    expect(createMessage(city)).toBe("Hello New York citizens. I want you to be happy. All 100000 people")
})
type UserType = {
    [key: string]: { id: number, name: string }
}

export let users: UserType

beforeAll(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '10212': {id: 10212, name: 'Natasha'},
        '1034231': {id: 1034231, name: 'Valera'},
        '103104': {id: 103104, name: 'Katya'},
    }



})

test('should update corresponding user', () => {
    users['103104'].name = "Ekaterina"

    expect(users["103104"].name).toBe("Ekaterina")
    expect(users["103104"]).toEqual({id: 103104, name: 'Ekaterina'})
})

test('should delete corresponding user', () => {
    delete users['103104']

    expect(users["103104"]).toBeUndefined()
})
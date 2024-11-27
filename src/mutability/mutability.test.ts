import {
    addBooks,
    changeBook,
    increaseAge,
    moveLaptop,
    moveUser,
    removeBook, updateCompany, updateCompany2, UserCompanyType,
    UserType,
    UserWithLaptopType, withCompanies, WithCompaniesType
} from "./mutability_01";

test('mutable test', () => {

    let users = [
        {
            name: "Alex",
            age: 28
        }, {
            name: "Alex",
            age: 28
        }];

    let user: UserType = {
        name: "Alex",
        age: 28
    }

    let admins = users;

    admins.push({
        name: "AlexAlex",
        age: 38
    })

    expect(users[2]).toEqual({
        name: "AlexAlex",
        age: 38
    })

    increaseAge(user);

    expect(user.age).toBe(29)

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000)
})

test('moveduser test', () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 32,
        address : {
            city: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'js', 'react', 'css']
    }

    const moveduser = moveUser(user, 'Kiev');

    expect(user).not.toBe(moveduser);
    expect(user.address).not.toBe(moveduser.address);
    expect(user.laptop).toBe(moveduser.laptop);
    expect(moveduser.address.city).toBe('Kiev');
})

test('movedLaptop test', () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 32,
        address : {
            city: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'js', 'react', 'css']
    }

    const movedLaptop = moveLaptop(user, 'Macbook');

    expect(user).not.toBe(movedLaptop);
    expect(user.address).toBe(movedLaptop.address);
    expect(user.laptop).not.toBe(movedLaptop.laptop);
    expect(user.laptop.title).toEqual('ZenBook')
    expect(movedLaptop.laptop.title).toBe('Macbook');

})

test('addNewBooksToUser test', () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 32,
        address : {
            city: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'js', 'react', 'css']
    }


    const addNewBooksToUser = addBooks(user, ['ts', 'rest api'])

    expect(user).not.toBe(addNewBooksToUser);
    expect(addNewBooksToUser.books[4]).toBe('ts')
    expect(addNewBooksToUser.books[5]).toBe('rest api')

})

test('changeBookInUser test', () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 32,
        address : {
            city: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'js', 'react', 'css']
    }

    const changeBookInUser = changeBook(user, 'js', 'ts')

    expect(changeBookInUser.books[1]).toBe('ts')
    expect(changeBookInUser.books).toEqual(['html', 'ts', 'react', 'css'])
    expect(user).not.toBe(changeBookInUser);

})

test('removeBookInUser test', () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 32,
        address : {
            city: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'js', 'react', 'css']
    }

    const removeBookInUser = removeBook(user, 'js')

    expect(removeBookInUser.books[1]).toBe('react')
    expect(user).not.toBe(removeBookInUser);

})

test('withCompanies test', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Alex",
        hair: 32,
        address : {
            city: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'js', 'react', 'css'],
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-Incubator'}
        ]
    }

    const userWithCompanies = withCompanies(user, {id: 3, title: 'Google'})

    expect(userWithCompanies.companies[2]).toEqual({id: 3, title: 'Google'})
    expect(user).not.toBe(userWithCompanies);

})

test('updateCompany test', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Alex",
        hair: 32,
        address : {
            city: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'js', 'react', 'css'],
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'IT-Incubator'}
        ]
    }

    const userupdateCompany = updateCompany(user, 1, 'EPAM')

    expect(user).not.toBe(userupdateCompany);
    expect(user.address).toBe(userupdateCompany.address);
    expect(user.companies).not.toBe(userupdateCompany.companies);
    expect(userupdateCompany.companies[0].title).toEqual('EPAM')

})

test('updateCompany2 test', () => {
    let companies: UserCompanyType = {
        'Dimych' : [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-Incubator'}],
        'Alex' : [{id: 1, title: 'IT-Incubator'}]
    }

    const userUpdateCompany = updateCompany2(companies, 'Dimych', 1, 'EPAM')

    expect(companies['Dimych']).not.toBe(userUpdateCompany['Dimych']);
    expect(companies['Alex']).toEqual(userUpdateCompany['Alex']);
    expect(userUpdateCompany['Dimych'][0].title).toBe('EPAM');

})
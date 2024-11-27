export type UserType = {
    name: string,
    age: number
}

export function increaseAge(u: UserType) {
    u.age++
}

type LaptopType = {
    title: string
}

type AddressType = {
    city: string
}

type BooksType = Array<string>

type CompanyType = {
    id: number,
    title: string
}
export type WithCompaniesType = {
    companies: CompanyType[]
}

export type UserWithLaptopType = {
    name: string,
    hair: number,
    address: AddressType,
    laptop: LaptopType,
    books: BooksType
}

export type UserCompanyType = {
    [key: string]: CompanyType[]
}

export const moveUser = (user: UserWithLaptopType, city: string) => {
    return {...user, address: {...user.address, city: city}}
}

export const moveLaptop = (user: UserWithLaptopType, laptop: string) => {
    return {...user, laptop: {...user.laptop, title: laptop}}
}

export const addBooks = (user: UserWithLaptopType, newBooks: BooksType) => {
    return {...user, books: [...user.books, ...newBooks]}
}

export const changeBook = (user: UserWithLaptopType, bookOld:string, bookNew:string) => ({
        // В стрелочной функции можно без return вернуть то, что будет в круглых скобках после стрелки
        // ...user, books: [...user.books.slice(0, 1), user.books[1] = bookNew, ...user.books.slice(2)] при помощи spread оператора
        ...user, books: user.books.map(book => book === bookOld ? bookNew : book)
    }
)

export const removeBook = (user:UserWithLaptopType, removeBook: string) => (
    {...user, books: user.books.filter(book => book !== removeBook)}
)

export const withCompanies = (user: UserWithLaptopType & WithCompaniesType, company: CompanyType) => (
    {...user, companies: [...user.companies, company]}
)

export const updateCompany = (user: UserWithLaptopType & WithCompaniesType, companyId: number, companyName: string) => (
    {...user, companies: user.companies.map(company => company.id === companyId ? {...company, title: companyName} : company)}
)

export const updateCompany2 = (companies: UserCompanyType, userName: string, companyId: number, companyName: string) => {
    let newCompanies = {...companies};
    newCompanies[userName]= newCompanies[userName].map(c => c.id === companyId ? {...c, title: companyName} : c);
    return newCompanies
}


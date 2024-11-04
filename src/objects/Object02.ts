export type StreetHouseType = {
    title: string
}

export type AddressHouseType = {
    number?: number
    street: StreetHouseType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressHouseType
}
export type govermentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressHouseType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<govermentBuildingsType>
    citizensNumber: number
}


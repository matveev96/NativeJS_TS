import {student, StudentType} from "../objects/Object";
import {CityType, govermentBuildingsType, HouseType} from "../objects/Object02";

export const sum = (a:number, b:number) => a + b;

const res = sum(sum(1,2), sum(2,3))

export const addSkill = (student: StudentType, skill: string) =>{
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export function changeStudentLive(s: StudentType, city: string) {
    return s.address.cityTitle === city;
}

export function changeBudget(building: govermentBuildingsType, budget: number)  {
    building.budget += budget;
}

export function repairHouse(houseType: HouseType ) {
    houseType.repaired = true
}

export const toFireStaff = (building: govermentBuildingsType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: govermentBuildingsType, stuffCountToHire: number) => {
    building.staffCount += stuffCountToHire;
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you to be happy. All ${city.citizensNumber} people`
}
import { Citys } from "./citys"

export interface SuperHeroe {
    name: string,
    age: number,
    address: Citys,
    showAddress: () => void
}

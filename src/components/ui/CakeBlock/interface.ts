export interface IcakeBlock {
    id: number
    name: string
    price: number
    imageUrl: string
    types: number[]
    fillings: number[]
    onClickAddCake: (obj: { filling: string; price: number; imageUrl: string; name: string; id: number; type: string }) => void;
    addedCount: number

}
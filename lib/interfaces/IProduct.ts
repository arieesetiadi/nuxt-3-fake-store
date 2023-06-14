interface IRating {
    rate: number,
    count: number
}

export default interface IProduct {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
    rating: IRating
}
interface IngredientsType {
    quantity: number,
    name: string,
    type: string
}

export interface Recipe {
    name: string,
    ingredients: IngredientsType[],
    steps: string[],
    imageUrl: string,
}

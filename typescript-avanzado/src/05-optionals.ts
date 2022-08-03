// PARÁMETROS OPCIONALES Y NULLISH-COALESCING

export const createProduct =(
    id: number | string,
    isNew?: boolean,
    stock?: number,
) => {
    return {
        id,
        stock : (stock ?? 10), // ?? Nullish coalescing
        isNew : isNew ?? true
    }
};


// 0 === false
// '' === false
// false === false

const p1= createProduct(1,true,12);

console.log(p1)

const p2= createProduct(1,true);

console.log(p2)

const p3= createProduct(1,false,0);

console.log(p3)
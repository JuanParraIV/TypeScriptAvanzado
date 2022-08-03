//Parámetros por defecto al modo TypeScript

export const createProduct =(
    id: number | string,
    isNew: boolean = true,
    stock: number = 10,
) => {
    return {
        id,
        stock,
        isNew
    }
};


// 0 === false
// '' === false
// false === false

const p1= createProduct(1,true,12);

console.log(p1)

const p2= createProduct(1,true);

console.log(p2)

const p3= createProduct(1);

console.log(p3)

const p4 = createProduct(1,true,100);
console.log(p4)
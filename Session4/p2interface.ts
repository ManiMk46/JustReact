interface Products{
    product : string;
    price : number;
}

const myChoices:Products[] = []

function addtocart(product:string , price:number){
    const listP: Products=
        { product:product, 
          price: price,
        }
       
    myChoices.push(listP);
}

addtocart("sdsdsd" , 123);

console.log(myChoices);


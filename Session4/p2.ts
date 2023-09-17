  const products = {
    product: "",
    price: "",
   };

   const productList: string[] = [];
  
  function addProduct(product: string, price: number) {
    const sabad = Object.create(products);
    sabad.product = product;
    sabad.price = price;
  
    productList.push(sabad);
  }
  
  addProduct("burger", 110);
  addProduct("pizza", 190);
  
  function printproducts() {
    if (!productList[0]) {
      console.log("sabad khalie")
      return;
    }
    console.log(productList);
  }
  printproducts();
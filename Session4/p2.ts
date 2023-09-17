  const productList: any[] = [];
  
  function addProduct(product: string, price: number) {
    const sabad = {
      product: product,
      price: price, };
  
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
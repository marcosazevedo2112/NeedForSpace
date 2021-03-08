function getAllProducts() {
    getProductsDB()
      .then((products) => {
          return products;
      })
      .catch((error) => {
          return error;
      })
  }
  
  function categorySort(){
    
  }
  
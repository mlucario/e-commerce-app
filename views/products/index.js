const layout = require("../layout");

module.exports = ({ products }) => {
  const renderedProducts = products
    .map((product) => {
      return `        
        <div class="col-md-4 my-3" style="height : 500px">
        <div class="card"  style="height : 500px">
            <div class="card-body text-center" style="height : 350px">
              <img class="img-fluid" src="data:image/png;base64, ${product.image}"/>               
            </div>
            <div class="card-body" style="height : 100px">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.price}</p>            
            </div>
            <div class="card-footer text-center bg-light" style="height : 50px">
                <form action="/cart/products" method="POST">
                <input type="hidden" value="${product.id}" name="productId"/>
                    <button class="btn btn-outline-info">
                     <i class="fas fa-plus mx-2"></i>Add to cart
                    </button>
                  </form>
              </div>
        </div>
    </div>
      `;
    })
    .join("\n");

  return layout({
    content: `
    ${renderedProducts}  
    `,
    title: "mLucario's Products",
  });
};

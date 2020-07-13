const layout = require("../layout");
module.exports = ({ items }) => {
  const totalPrice = items.reduce((prev, item) => {
    return prev + item.quantity * item.product.price;
  }, 0);
  const renderedCarts = items
    .map((item) => {
      return `        
      <div class="card mb-3" >
      <div class="row g-0">
          <div class="col-md-2">
              <img class="img-fluid" src="data:image/png;base64, ${
                item.product.image
              }" alt="${item.product.title}"  style="height : 150px;"/>
          </div>
          <div class="col-md-9 my-0 pl-5">
              <div class="row  justify-content-center align-items-center">
                  <div class="card-body">
                      <h3 class="card-title">${item.product.title}</h3>
                      <p class="card-text">${item.product.price} X ${
        item.quantity
      } = ${item.product.price * item.quantity}</p>
                  </div>
              </div>
          </div>
          <div class="col-md-1 align-self-center text-center">
          <div class="card-body">
            <form method="POST" action="/cart/products/delete">
            <input type="hidden" value="${item.id}" name="itemId" />
            <button type="submit" class="btn btn-danger"><i class="fas fa-trash"></i></button>
            </form>
            </div>
          </div>

      </div>
    </div>
        `;
    })
    .join("");

  return layout({
    content: `
      ${renderedCarts}  
      <div class="alert alert-success" role="alert">      
      <span class="font-weight-bold h2 text-primary">Total</span>
      <span class="float-right h2 font-weight-bold text-primary">$${totalPrice}</span>
      </div>
       <br/> 
        <div class="col">
        <button type="button" class="btn btn-primary">BUY</button>
        </div>
      `,
    title: "Carts",
  });
};

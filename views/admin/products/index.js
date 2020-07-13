const layout = require("../layout");

module.exports = ({ products }) => {
  const renderedProducts = products
    .map((product) => {
      return `
        <tr class="row">
            <th scope="col" class="col-sm-6  align-self-center">${product.title}</th>
            <td scope="col" class="col-sm-2  align-self-center" >${product.price}</td>
            <td scope="col" class="col-sm-2  align-self-center"><a role="button" href="/admin/products/${product.id}/edit" class="btn btn-primary">Edit</a></td>            
            <td scope="col" class="col-sm-2  align-self-center">
            <form method="POST" action="/admin/products/${product.id}/delete">
            <button class="btn btn-danger">Delete</button>           
            </form>
            </td>
        </tr>
        `;
    })
    .join("");

  return layout({
    content: `          
        <div class="container-fluid p-5">
        <div class="row justify-content-end">
            <div class="col-md-auto"><a class="btn btn-info" href="/product/new" role="button">Create New</a></div>
        </div>         
        <div class="row justify-content-center ">
         <table class="table">
             <thead>
               <tr class="row">
                 <th scope="col" class="col-sm-6">Title</th>
                 <th scope="col" class="col-sm-2">Price</th>
                 <th scope="col" class="col-sm-2">Edit</th>
                 <th scope="col" class="col-sm-2">Delete</th>
               </tr>
             </thead>
             <tbody>
              ${renderedProducts}
             
             </tbody>
           </table>

        </div>
     </div>
         `,
    title: "Products",
  });
};

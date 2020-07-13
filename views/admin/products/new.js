const layout = require("../layout");
const { getErrors } = require("../../helpers");

module.exports = ({ errors }) => {
  return layout({
    content: `
        <div class="container  ">
    
        <form method="POST" enctype="multipart/form-data">
            <div class="center">
    
                <div class="row p-2">
                    <div class="col-md-4"></div>
                    <div class="col-sm-12 col-md-4 mx-auto border shadow p-5 mb-5 bg-white rounded m-0">
                    <div class="row text-uppercase mb-5 display-4 ml-4 font-weight-bold">Add new product</div>
                        <div class="row">
                            <!-- <label for="email" class="form-label ml-2 h4 text-primary ">Email</label> -->
                            <div class="input-group">
                                <input placeholder="Enter Title" class="form-control display-5" type="text" name="title" required/>                                                             
                                <div class="invalid-feedback ml-3" style="display:  ${
                                  getErrors(errors, "title") === ""
                                    ? "none"
                                    : "block"
                                };">
                                ${getErrors(errors, "title")}
                                </div>
                            </div>
                        </div>
    
                        <div class="row mt-4">
                            <!-- <label for="password" class="form-label ml-2 h4 text-primary ">Password</label> -->
                            <div class="input-group">
                            <input placeholder="Enter Price" class="form-control display-5" type="text" name="price" />                                
                                <div class="invalid-feedback ml-3"  style="display:  ${
                                  getErrors(errors, "price") === ""
                                    ? "none"
                                    : "block"
                                };">
                                    ${getErrors(errors, "price")}
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="input-group">
                                <input type="file" class="form-control display-5" name="image" />                               
                                <div class="invalid-feedback ml-3"  style="display:  ${
                                  getErrors(errors, "image") === ""
                                    ? "none"
                                    : "block"
                                };">
                                ${getErrors(errors, "image")}
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center mt-5 px-5">
                            <input name="submit" id="submit" class="btn btn-primary btn-lg" type="submit"
                                value="SUBMIT">
                        </div>
                        
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        </form>
    </div>       
        `,
    title: "Add a new product",
  });
};

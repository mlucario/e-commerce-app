const layout = require("../layout");
const { getErrors } = require("../../helpers");

module.exports = ({ req, errors }) => {
  return layout({
    content: `  
    <div class="container ">
        <form method="POST">
        <div class="center">
            <div class="row p-2">
                <div class="col-md-4"></div>
                <div class="col-sm-12 col-md-4 mx-auto border shadow p-5 mb-5 bg-white rounded m-0">
                    <div class="row">
                        <!-- <label for="email" class="form-label ml-2 h4 text-primary ">Email</label> -->
                        <div class="input-group">
                            <span class="input-group-text  bg-light border-0"><i
                                    class="fas fa-envelope fa-2x text-primary bg-light"></i></span>
                            <input type="email" class="form-control display-5" name="email"
                                placeholder="Enter your email" required>
                            <div class="invalid-feedback ml-3" style="display:  ${
                              getErrors(errors, "email") === ""
                                ? "none"
                                : "block"
                            };">
                            ${getErrors(errors, "email")}
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <!-- <label for="password" class="form-label ml-2 h4 text-primary ">Password</label> -->
                        <div class="input-group">
                            <span for="password" class="input-group-text  bg-light border-0">
                                <i class="fas fa-lock fa-2x text-primary bg-light"></i></span>
                            <input type="password" class="form-control display-5" name="password"
                                placeholder="Enter your password" required>
                            <div class="invalid-feedback ml-3"  style="display:  ${
                              getErrors(errors, "password") === ""
                                ? "none"
                                : "block"
                            };">
                                ${getErrors(errors, "password")}
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <!-- <label for="password_confirmation" class="form-label ml-2 h4 text-primary ">Password Confirmation</label> -->
                        <div class="input-group">
                            <span for="password_confirmation" class="input-group-text  bg-light border-0">
                                <i class="fas fa-lock fa-2x text-primary bg-light"></i></span>
                            <input type="password" class="form-control display-5" name="password_confirmation"
                                placeholder="Password confirmation" required>
                            <div class="invalid-feedback ml-3"  style="display:  ${
                              getErrors(errors, "password_confirmation") === ""
                                ? "none"
                                : "block"
                            };">
                            ${getErrors(errors, "password_confirmation")}
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center mt-5 px-5">
                        <input name="submit" id="submit" class="btn btn-primary btn-lg" type="submit"
                            value="SIGN IN">
                    </div>
                    <div class="row mt-3">
                        <span class="text-primary">Already Sign Up? <a href="/signin">Sign In</a></span>
                    </div>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
    </form>
</div>   
    `,
    title: "Sign Up Page",
  });
};

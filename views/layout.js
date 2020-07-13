module.exports = ({ content, title }) => {
  return `
  <!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${title}</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css"
        integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">

</head>
<style>
    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100vw;
    }


    @media (max-width:767px) {

        .border {
            border: 0px solid !important
        }

        .shadow {
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none !important;
        }

    }
</style>

<body>
    <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

    <header>
        <nav class="nav bg-secondary bg-gradient my-0"
            style="height: 80px; color: white; font-size: 1.5rem; justify-content: center; align-items: center;">
            <span class="mx-5 my-0"><i class="fas fa-phone mx-2 "></i>+1 408 123 4567</span>
            <span><i class="fas fa-envelope mx-2"></i>test@gmail.com</span>
            <div class="ml-auto mr-5">
                <ul class="nav justify-content-center text-warning">
                    <li class="nav-item mx-3">
                        <i class="fab fa-facebook-f"></i>
                    </li>
                    <li class="nav-item mx-3">
                        <i class="fab fa-twitter"></i>
                    </li>
                    <li class="nav-item mx-3">
                        <i class="fab fa-linkedin-in"></i>
                    </li>
                    <li class="nav-item mx-3">
                        <i class="fab fa-weixin"></i>
                    </li>
                    <li class="nav-item mx-3">
                        <i class="fab fa-whatsapp"></i>
                    </li>

                </ul>
            </div>
        </nav>
        <nav class="navbar navbar-light bg-light">
            <div class="container">
              <span class="navbar-brand my-auto"><p class="display-5 font-weight-bold">mLucario Shop</p></span>
              <div class="d-flex">
               <ul class="nav text-primary h4">
                   <li class="nav-item mx-5 "><a class="text-decoration-none" href="/"><i class="fas fa-star mx-3"></i>Products</a></li>
                   <li class="nav-item mx-5"><a class="text-decoration-none" href="/cart"><i class="fas fa-cart-plus mx-3"></i>Cart</a></li>
               </ul>
              </div>
            </div>
          </nav>
    </header>

    <main>

        <div class="container">
            <div class="row">
                <img src="/images/banner.jpg" class="img-fluid" alt="discount-banner">
            </div>
            <div class="row justify-content-center align-content-center p-3">
            
            ${content}
            
            </div>
        </div>
        <footer>

        </footer>

        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
            </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
            integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous">
            </script>
</body>

</html>
  `;
};

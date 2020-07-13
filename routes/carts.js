const express = require("express");

const cartsRepo = require("../repositories/carts");
const productsRepo = require("../repositories/products");
const cartShowTemplate = require("../views/carts/show");
// const cartsTemplate = require('.')

const router = express.Router();

// Receive a POST request to add an item to carts
router.post("/cart/products", async (req, res) => {
  // Figure out the cart!

  let cart;
  if (!req.session.cartId) {
    // We don't have a cart, we need to create one,
    // and store the cart id on the req.seesion.cartId
    cart = await cartsRepo.create({ items: [] });
    req.session.cartId = cart.id;
  }
  // Get cartId with cartId in cookie
  else {
    cart = await cartsRepo.getByID(req.session.cartId);
  }

  //   TODO FIND THE BETTER WAY TO HANDLE THIS ERROR
  /**  This error happen when cartId exist but Json file is empty */

  if (!cart) {
    console.log("SPECIAL CASEEEE");
    // just remove the cartId session and let user add again
    req.session.cartId = "";
    return res.send(
      "Sorry our system is detect your old CART ID. Please redo!"
    );
  }
  // Either increment exist product or just add to a new cart
  const existingItem = cart.items.find(
    (item) =>
      /* ########################################################################## */
      // NOTE productId because we use input value
      // ! <input type="hidden" value="${product.id}" name="productId"/>
      /* ########################################################################## */

      item.id === req.body.productId
  );

  // If we have existingItem

  if (existingItem) {
    // Increament quantity and save cart
    existingItem.quantity++;
  } else {
    // add new product id to items array
    cart.items.push({ id: req.body.productId, quantity: 1 });
  }

  // We already update the cartId above , so we just need write it back to database
  await cartsRepo.update(cart.id, {
    items: cart.items,
  });
  res.redirect("/cart");
});

/* ************************************************************************** */
/*               Receive a GET request to show all items in cart              */
/* ************************************************************************** */
router.get("/cart", async (req, res) => {
  if (!req.session.cartId) {
    return res.redirect("/");
  }

  const cart = await cartsRepo.getByID(req.session.cartId);

  for (let item of cart.items) {
    // item === { id: , quantity}
    const product = await productsRepo.getByID(item.id);
    // ! NEVER WRITE BACK TO DATABASE -- this is just temp
    item.product = product;
  }

  res.send(cartShowTemplate({ items: cart.items }));
});
/* ########################################################################## */

/* ************************************************************************** */
/*             Receive a POST request to delete an item from carts            */
/* ************************************************************************** */

router.post("/cart/products/delete", async (req, res) => {
  const { itemId } = req.body;

  const cart = await cartsRepo.getByID(req.session.cartId);
  const items = cart.items.filter((item) => item.id !== itemId);

  await cartsRepo.update(req.session.cartId, { items: items });

  res.redirect("/cart");
});
/* ########################################################################## */

module.exports = router;

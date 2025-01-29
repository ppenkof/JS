function solve() {
  const addProductButton = document.querySelectorAll(".add-product");
  const textAreaEl = document.querySelector("textarea");
  const checkoutButton = document.querySelector(".checkout");

  let cart = {};
  //debugger;
  checkoutButton.addEventListener("click", (event) => {
    const totalPrice = Object.values(cart).reduce(
      (sum, price) => sum + price,
      0
    );
//debugger;
    let list = [];
    list = Object.keys(list).join(", ");
    textAreaEl.value += `You bought ${list} for ${totalPrice.toFixed(2)}.`;
    addProductButton.forEach((button) => {
      button.setAttribute("disabled", "disabled");
    });
    event.currentTarget.setAttribute("disabled", "disabled");
  });

  function addProductHandler(event) {
    const productElement = event.currentTarget.parentElement.parentElement;
    const title = productElement.querySelector(".product-title").textContent;
    const price = Number(
      productElement.querySelector(".product-line-price").textContent
    );

    if (!cart[title]) {
      cart[title] = 0;
    }
    cart[title] += price;

    textAreaEl.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
  }

  addProductButton.forEach((button) =>
    button.addEventListener("click", addProductHandler)
  );
}

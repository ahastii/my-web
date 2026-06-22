<script>
document.addEventListener("DOMContentLoaded", function () {

  const cartButtons = document.querySelectorAll(".add-to-cart");

  cartButtons.forEach(function(button){

    button.addEventListener("click", function(){

      const productCard = button.closest(".product-card");

      const title =
        productCard.querySelector(".product-title").innerText;

      const price =
        productCard.querySelector(".new-price").innerText;

      const image =
        productCard.querySelector(".product-image img").src;

      let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({
        title: title,
        price: price,
        image: image
      });

      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );


      const toast =
        document.createElement("div");

      toast.innerText =
        "✓ محصول به سبد خرید اضافه شد";

      toast.style.position = "fixed";
      toast.style.bottom = "20px";
      toast.style.left = "20px";
      toast.style.background = "#ff69b4";
      toast.style.color = "white";
      toast.style.padding = "14px 22px";
      toast.style.borderRadius = "12px";
      toast.style.zIndex = "9999";

      document.body.appendChild(toast);

      setTimeout(function(){
        toast.remove();
      }, 2500);

    });

  });

});
</script>
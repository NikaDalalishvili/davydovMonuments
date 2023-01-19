let products = {
  data: [{
      productName: "Buddhist black tombstones",
      category: "Buddhist",
      productImage: "./assets/graveStone images/Buddhist-tombstone-1.jpg",
    },
    {
      productName: "Buddhist black tombstones",
      category: "Buddhist",
      productImage: "./assets/graveStone images/Buddhist-tombstone-2.jpg",
    },
    {
      productName: "Christian tombstones",
      category: "Christian",
      productImage: "./assets/graveStone images/Christian-tombstone-1.jpg",
    },
    {
      productName: "Christian tombstones",
      category: "Christian",
      productImage: "./assets/graveStone images/Christian-tombstone-2.jpg",
    },
    {
      productName: "Islamic tombstones",
      category: "Islamic",
      productImage: "./assets/graveStone images/Islamic-tombstone-1.jpg",
    },
    {
      productName: "Islamic tombstones",
      category: "Islamic",
      productImage: "./assets/graveStone images/Islamic-tombstone-2.jpg",
    },
    {
      productName: "Jewish tombstones",
      category: "Jewish",
      productImage: "./assets/graveStone images/Jewish-tombstone-1.jpg",
    },
    {
      productName: "Jewish tombstones",
      category: "Jewish",
      productImage: "./assets/graveStone images/Jewish-tombstone-2.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let productCard = document.createElement("div");
  //Card should have category and should stay hidden initially
  productCard.classList.add("product-card", i.category, "hide");
  //image div
  // let imgContainer = document.createElement("div");
  let productImgBox = document.createElement("div");
  productImgBox.classList.add("product-img-box");
  //img tag
  let productImage = document.createElement("img");
  productImage.classList.add("product-img");
  productImage.setAttribute("src", i.productImage);
  productImgBox.appendChild(productImage);
  productCard.appendChild(productImgBox);
  //container
  // let container = document.createElement("div");
  let productCaptionBox = document.createElement("div");
  productCaptionBox.classList.add("product-caption-box");
  //product name
  // let name = document.createElement("p");
  let productCaption = document.createElement("p");
  productCaption.classList.add("product-caption");
  productCaption.innerText = i.productName.toUpperCase();
  productCaptionBox.appendChild(productCaption);

  productCard.appendChild(productCaptionBox);
  document.getElementById("products-box").appendChild(productCard);
  // document.getElementsByClassName(".products-box").appendChild(productCard);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".catalog-btn");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".product-card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("primary-search-btn").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("primary-search-bar").value;
  let elements = document.querySelectorAll(".product-caption");
  let cards = document.querySelectorAll(".product-card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
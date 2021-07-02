// buat nav bar agar sticky
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// buat cart
let cart = document.querySelectorAll('.beli');


let products = [{
        nama: "yellow decal",
        tag: "YellowDecal",
        harga: "950",
        inCart: 0
    },
    {
        nama: "pink decal",
        tag: "pinkDecal",
        harga: "900",
        inCart: 0
    },
    {
        nama: "red decal",
        tag: "redDecal",
        harga: "850",
        inCart: 0
    },
    {
        nama: "yellow decal",
        tag: "aDecal",
        harga: "800",
        inCart: 0
    },
    {
        nama: "yellow decal",
        tag: "bDecal",
        harga: "750",
        inCart: 0
    },
    {
        nama: "yellow decal",
        tag: "cDecal",
        harga: "600",
        inCart: 0
    },
    {
        nama: "yellow decal",
        tag: "dDecal",
        harga: "550",
        inCart: 0
    },
    {
        nama: "yellow decal",
        tag: "eDecal",
        harga: "500",
        inCart: 0
    },
    {
        nama: "yellow decal",
        tag: "fDecal",
        harga: "450",
        inCart: 0
    },
    {
        nama: "yellow decal",
        tag: "gDecal",
        harga: "400",
        inCart: 0
    },
    {
        nama: "yellow decal",
        tag: "hDecal",
        harga: "350",
        inCart: 0
    },
    {
        nama: "yellow decal",
        tag: "iDecal",
        harga: "400",
        inCart: 0
    }
]

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumber() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);

    console.log(cartCost);
    console.log(typeof cartCost);
    localStorage.setItem("totalCost", product.harga);


}


onLoadCartNumber();
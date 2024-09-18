// Sample product data
const products = [
    { id: 1, name: 'Men', category: 'men', price: 'Rs 999', imgSrc: 'https://tiimg.tistatic.com/fp/1/008/243/mens-embroidery-indo-western-dresses-for-party-wear-947.jpg' },
    { id: 2, name: 'Women', category: 'women', price: 'Rs 1499', imgSrc: 'https://5.imimg.com/data5/UH/AP/YU/SELLER-10665141/handloom-silk-saree-500x500.jpg' },
    { id: 3, name: 'kids', category: 'kids wear', price: 'Rs 499', imgSrc:"https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/21604555004027.jpg"},
    { id: 4, name: 'Accessories', category: 'Accessories', price: 'Rs 599', imgSrc: 'https://thumbs.dreamstime.com/b/luxurious-fashion-accessories-jewelry-arrangement-sophisticated-collection-including-handbags-shoes-sunglasses-elegant-322373255.jpg' },
    { id: 5, name: 'T-shirts', category: 'men', price: 'Rs 199', imgSrc: 'https://image.made-in-china.com/202f0j00sMVfQNagZdqc/2020-Winter-New-Round-Neck-Long-Sleeve-T-Shirt-Men-Sweatshirt.jpg'},
    { id: 6, name: 'Casuals', category: 'men', price:'Rs 949', imgSrc: 'https://i.pinimg.com/736x/7f/bf/f2/7fbff2f37b869a4d112c647cddfbd096.jpg'},
    { id: 7, name: 'jeans', category: 'men', price: 'Rs 499',imgSrc:"https://m.media-amazon.com/images/I/71PYcmVow5L._AC_AC_SY350_QL15_.jpg"},
    { id: 8, name: 'party wear', category: 'men',price: 'Rs 2999',imgSrc: 'https://www.bonsoir.co.in/cdn/shop/files/10.-SHW-5929.jpg?crop=center&height=3666&v=1722229456&width=2444'},
    { id: 9, name: 'Dhoti', category: 'men',price:'Rs 699',imgSrc: 'https://i.pinimg.com/736x/2e/f8/13/2ef8132e3ff57c0b2c642753d6fe4d3f.jpg'},
    { id: 10,name:'kurta sets',category: 'women',price:'Rs 499',imgSrc:'https://img.tatacliq.com/images/i4/437Wx649H/MP000000005467888_437Wx649H_20190911024636.jpeg'},
    { id: 11,name:'western wear',category:'women',price:'Rs 299',imgSrc:'https://images.bewakoof.com/utter/content/2484/content_western_dress_3.jpg'},
    { id: 12,name:'Ethnic dresses',category:'women',price:'Rs 2999',imgSrc:'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/Ethnic_store/Ethnic-Main-banner._SY1500_QL85_.jpg'},
    { id: 13,name:'Girls',category:'kids wear',price:'Rs 599',imgSrc:'https://5.imimg.com/data5/QR/MX/SI/SELLER-18688118/eac3a881-2901-4bf2-bb2c-c27d40c5a902-500x500.JPG'},
    { id: 14,name:'Boys',category: 'kids wear',price:'Rs 599',imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbD_BM6D5sWP-opIt3pORkTgKwDCzfze9OFA&s'},
    { id: 15,name: 'Handbags',category:'Accessories',price:'Rs 399',imgSrc:"https://m.media-amazon.com/images/I/71vz71m5usL._AC_UY1000_.jpg"},
    { id: 16,name:'Fashion Jewellery',category:'Accessories',price:'Under Rs 999',imgSrc:'https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg'},
];

function displayProducts(filteredProducts) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
            <button>Buy Now</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

function filterProducts() {
    const category = document.getElementById('category').value;
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}
function showContact() {
    const contactSection=document.getElementById('contact-section').click();
    contactSection.style.dsplay='block'
}
// Initial display of all products
displayProducts(products);

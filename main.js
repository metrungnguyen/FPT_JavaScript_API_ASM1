// import {imageName} from "./function.js";

function imageName(original) {
    original = original.toLowerCase();
    
    const imageURL = original.replaceAll(' ', '-');

    return imageURL;
};

function floorNum(number) {
    const finalNum = Math.floor(number);

    return finalNum;
};

function product() {
    const api = `https://dummyjson.com/products?limit=20`;
    
    fetch(api).then(rs => rs.json())
    .then(data => {
        const productList = data.products;

        productList.map((property) => {
            const productCard = `
                <div class="col-xl-3 col-md-6 md-4">
                    <div class="product-card item">
                        <div class="card-body">
                            <div class="image-container">
                                <img src="${property.thumbnail}" alt="Product image">
                            </div>
                            <h3>${property.title}</h3>
                            <div class="stars" id="starRating">
                                <img class="icon" src="${floorNum(property.rating)}-star.svg" alt="star-rating">
                            </div>
                            <p class="product-price">£${property.price}</p>
                            <p class="product-description">${property.description}</p>
                            <button>Add to card</button>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById('product-layout').innerHTML += productCard;
        });
    });
};

product();
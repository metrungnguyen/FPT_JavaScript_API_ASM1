export function imageName(original) {
    original = productList.title;

    original = original.tolowerCase();
    
    const imageURL = productName.replaceAll(' ', '-');

    return imageURL;
};
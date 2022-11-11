export default class Item {
    name = null;
    price = null;
    vendor = null;
    status = null;
    rating = null;
    img = "";
    productLink = "";

    constructor(name, price, vendor, status, rating, img, productLink){
        this.name = name;
        this.price = price;
        this.vendor = vendor;
        this.status = status;
        this.rating = rating;
        this.img = img;
        this.productLink = productLink;
    }

}
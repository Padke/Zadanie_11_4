//funkcja konstruująca formę telefon
function phone(brand, price, color, name, weight) {
    //parametry
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.name = name;
    this.phoneweight = weight;
}

function phoneProperties(camera, inch, battery){
    this.backcamera = camera;
    this.inch = inch;
    this.batteryCapacity = battery;
}

/*funkcja prototypowa:
"The phone brand is (marka), color is (kolor) and the price is (cena)."*/

phone.prototype.printInfo = function () {
    console.log(
        "The phone brand is " + this.brand +
        ", the name is " + this.name +
        ", color is " + this.color +
        ", it weights " + this.phoneweight + " g " +
        "and the price is " + this.price + 
        " PLN.");
}

phoneProperties.prototype.printProperties = function () {
    console.log(
        "The back camera has " + this.backcamera + " Mpx" +
        ", the phone has " + this.inch + " inch display" +
        " and the capacity of battery stands at " + this.batteryCapacity + "mAh."
    )
}


var iPhone6S = new phone("Apple", 2250, "black","6S", 143.00);
var samsungGalaxyS6 = new phone("Samsung", 3000, "pink", "S6", 138.00);
var onePlusOne0 = new phone("One Plus", 1999, "silver", "One", 162.00);
var iPhoneProperties = new phoneProperties(12, 4.7, 1715);
var samsungProperties = new phoneProperties(16, 5.1, 2550);
var onePlusProperties = new phoneProperties(13, 5.5, 3100);



iPhone6S.printInfo();
iPhoneProperties.printProperties();
samsungGalaxyS6.printInfo();
samsungProperties.printProperties();
onePlusOne0.printInfo();
onePlusProperties.printProperties();

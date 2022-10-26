// function make_cars(manufacturer,modelNo, arguments){
    
// }
// function makeCar(manufacturer, model_name, color = "blue", two_package = false) {
//     car = { "Manufacturer": manufacturer, "Model Name": model_name, "Color": color, "Two Package": two_package }
//     return car
// }

function makeCar(manufacturer, model, ...options) {

    car_parts = {
        "manfacturer": manufacturer,
        "model": model,
        "moreOptions": options
    }
    return car_parts;
}
car = makeCar("subaru", "outback", "blue", true)
console.log(car)


car = makeCar("subaru", "outback", "Red")
console.log(car)


car = makeCar("subaru", "outback")
console.log(car)

car = makeCar("xyz","abc","lmn","pqr","sty","uvw");
console.log(car)
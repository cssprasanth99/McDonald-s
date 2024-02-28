const getSelectedItems = () => {
    // code here
    event.preventDefault();
    let selectedFood;

    selectedFood = document.querySelectorAll(".food");
    let items = [];
    selectedFood.forEach((ele) => {
        if (ele.checked === true) {
            items.push(ele.value);
        }
    })
    console.log(items);
    orderFood(items)
}
let order = 0;

// accepts selected items from the menu as an array
const orderFood = async (items) => {
    setTimeout(() => {
        var orderedFood = document.querySelector("#order-item");
        var orderId = document.getElementById("order-id");
        orderId.textContent = order;
        orderedFood.innerHTML = "";
        items.forEach((ele) => {
            var foodItemReceived = document.createElement("div");
            foodItemReceived.setAttribute("id", "food-item");
            const foodItem = document.createElement("p");
            orderedFood.append(foodItemReceived);
            foodItem.textContent = ele;
            foodItemReceived.append(foodItem);
        })
    }, 1000)
};



window.onload = function () {
    //  get the buttons here and add click event
    let orderFood = document.querySelector("form");
    orderFood.addEventListener("submit", () => {
        getSelectedItems();
        order++;
    })
};

// donot chnage the export statement

// if (typeof exports !== "undefined") {
//     module.exports = {
//         orderFood
//     };
// }
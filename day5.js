let products = [
    {
        item: "🍭",
        price: 2.99,
        type: "sweet",
    },
    {
        item: "🍫",
        price: 1.99,
        type: "sweet",
    },
    {
        item: "🥫",
        price: 1.99,
        type: "savory",
    },
    {
        item: "🍬",
        price: .89,
        type: "sweet",
    },
    {
        item: "🥦",
        price: 3.99,
        type: "savory",
    },
    {
        item: "🍖",
        price: 3.99,
        type: "savory",
    },
]

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data) {
    // make an empty shopping cart array
    let shoppingCart = []
    // map through data and get a modified array showing the objects with only "item" and "price" properties, but only the objects that are sweets
    for (let storeItem of data) {
        if (storeItem.type === 'sweet') {
            let candy = {
                item: storeItem.item,
                price: storeItem.price
            }
            shoppingCart.push(candy)
        }
    }
    return shoppingCart
};

console.log(getSaleItems(products))
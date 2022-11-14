var itemPrice=1

function priceCalc(item){
    item.parentNode.children[4].innerHTML=""
    let quantity=item.value
    item.parentNode.children[4].innerHTML="$"+`${quantity*itemPrice}`
}
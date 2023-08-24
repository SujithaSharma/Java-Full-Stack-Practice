const products = [
    {
        id: 1,
        img: './images/laptop.png',
        name: "HP ZBook Firefly 12th Gen Intel Core i7-1255U 40.6 cm",
        price: 100,
        quantity: 0
    },
    {
        id: 2,
        img: './images/mobile.png',
        name: "OnePlus Nord CE 3 Lite 5G (8GB RAM, 128GB)",
        price: 500,
        quantity: 0
    },
    {
        id: 3,
        img: './images/pendrive.png',
        name: "SanDisk Ultra Shift USB 3.0 128 GB Pen Drive(Black)",
        price: 600,
        quantity: 0
    },
    {
        id: 4,
        img: './images/watch.png',
        name: "Samsung Galaxy Watch 4 Classic LTE Smart Watch(Black)",
        price: 300,
        quantity: 0
    }
]

function addToCart() {
    document.getElementById('carttable').style.display = 'table'
    displayInTable()
}


function addProduct() {
    let itemQuantity = document.querySelectorAll('.item-quantity')
    let addButton = document.querySelectorAll('.fa-plus')
    addButton.forEach((element, index) => {
        element.onclick = function () {
            let itemValue = itemQuantity[index].textContent
            itemQuantity[index].textContent = parseInt(itemValue) + 1
            checkIfProductAdded()
        }
    })
}

function removeProduct() {
    let itemQuantity = document.querySelectorAll('.item-quantity')
    let addButton = document.querySelectorAll('.fa-minus')
    addButton.forEach((element, index) => {
        element.onclick = function () {
            let itemValue = itemQuantity[index].textContent
            if (itemValue > 0) {
                itemQuantity[index].textContent = parseInt(itemValue) - 1
            }
        }
    })
}

function displayInTable() {
    let AddTocartButton = document.querySelectorAll('.add-to-cart');
    let ProductId = document.querySelectorAll('.hidden-id');
    let ProductImage = document.querySelectorAll('.card-img-top');
    imagesrc = document.querySelectorAll('.card-img-top').src;
    let ProductNames = document.querySelectorAll('.item-name');
    let ProductQuantity = document.querySelectorAll('.item-quantity')
    let Productprice = document.querySelectorAll('.item-price')
    var carttable = document.querySelector('#carttable')
    var rowCount = carttable.rows.length
    AddTocartButton.forEach((element, index) => {
        element.onclick = function () {
            var row = carttable.insertRow(rowCount);

            var cell1 = row.insertCell(0)
            var element1 = document.createElement('div');
            element1.textContent = products[index].id;
            cell1.appendChild(element1)

            var cell2 = row.insertCell(1)
            var element2 = document.createElement('img');
            element2.src = ProductImage[index].src
            element2.style.width = "120px"
            element2.style.height = "60px"
            element2.style.paddingLeft = "40px"
            cell2.appendChild(element2);

            var cell3 = row.insertCell(2)
            var element3 = document.createElement('div');
            element3.textContent = ProductNames[index].textContent;
            cell3.appendChild(element3);

            var cell4 = row.insertCell(3)
            var element4 = document.createElement('div')
            element4.textContent = Productprice[index].textContent;
            cell4.appendChild(element4);

            var cell5 = row.insertCell(4)
            var element5 = document.createElement('div')
            element5.textContent = ProductQuantity[index].textContent;
            cell5.appendChild(element5);

            var cell6 = row.insertCell(5)
            var element6 = document.createElement('div')
            let price = parseInt(element4.textContent)
            let quantity = parseInt(element5.textContent)
            if (quantity > 0) {
                element6.textContent = price * quantity
            }
            else {
                element6.textContent = price
            }
            cell6.appendChild(element6);
        }
    });
}


function addQuanity() {
    let AddTocartButton = document.querySelectorAll('.add-to-cart');
    AddTocartButton.forEach((element, index) => {
        element.addEventListener('click',)
    })
}



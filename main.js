var productContainer = [] ;
if (localStorage.getItem('ourProduct')!=null)
{
    productContainer = JSON.parse(localStorage.getItem('ourProducts'));
    displayProduct();
}

var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');


function addProduct(){
    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescInput.value,

    }
    productContainer.push(product)
    localStorage.setItem('ourProducts',JSON.stringify(productContainer));
    console.log(productContainer);
    displayProduct()
    clearForm();
    
}

function clearForm() {
    productNameInput.value ="";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
}

function displayProduct(){
    var cartoona=``;
    for(var i =0 ;i<productContainer.length ;i++)
    {
        cartoona +=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button class="btn btn-outline-warning">update</button></td>
        <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger">delete</button></td>
        </tr>`;
    
    }
    document.getElementById("tableBody").innerHTML=cartoona;
}

function deleteProduct(index){
   productContainer.splice(index,1);
   localStorage.setItem('ourProducts',JSON.stringify(productContainer));
   displayProduct();   
}

function searchProduct(term){
    var cartoona=``;
    for(var i =0 ;i<productContainer.length ;i++){
        if(productContainer[i].name.tolowercase().includes(term.tolowercase())== true){
            cartoona +=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button class="btn btn-outline-warning">update</button></td>
        <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger">delete</button></td>
        </tr>`;
        }
    }
    document.getElementById("tableBody").innerHTML=cartoona;
}

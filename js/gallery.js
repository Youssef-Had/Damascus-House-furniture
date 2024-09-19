getCategories();
function getCategories() {
    fetch('./get-categories.php?categories=filter').then(function(response){
        return response.json();
    }).then(function(responseData){
        if(responseData.category){
            if(responseData.category.length > 0){
                let html = '<ul class="category-list list-unstyled">';
                for (let index = 0; index < responseData.category.length; index++ ) {
                    html += '<li>';
                    html += '<input type="radio" class="category-input" name="category" value="'+responseData.category[index].name+'" id="'+responseData.category[index].name+'">';
                    html += '<label class="category-list-item" for="'+responseData.category[index].name+'">';
                    html += responseData.category[index].name;
                    html += '</label>';
                    html += '</li>';
                }
                html += '</div>';
                document.getElementById('category-list-box').innerHTML = html;
                // Get products.
                let categoryInputsArray = document.querySelectorAll('.category-input');
                categoryInputsArray[0].checked = true;
                for (let index = 0; index < categoryInputsArray.length; index++) {
                    if(categoryInputsArray[0].checked){
                        getProducts(getCheckedCategory());
                    }
                    categoryInputsArray[index].onclick = function() {
                        getProducts(getCheckedCategory());
                    }
                }
            }
        }
    })
};
function getProducts(productCategory = '') {
    fetch('./get-gallery.php?products='+productCategory+'').then(function(response){
        console.log(response);
        return response.json();
    }).then(function(responseData){
        console.log(responseData);
        if(responseData.product){
            if(responseData.product.length > 0){
                let html = '';
                for (let index = 0; index < responseData.product.length; index++ ) {
                    html += '<div class="product-item">';
                    html += '<div class="img-box">';
                    html += '<img src="./images/'+responseData.product[index].image+'" alt="product-image">';
                    html += '</div>';
                    html += '<div class="info-box">';
                    html += '<h6 class="product-item-category">';
                    html += responseData.product[index].category;
                    html += '</h6>';
                    html += '<h5 class="product-item-title">';
                    html += responseData.product[index].title;
                    html += '</h5>';
                    html += '<h5 class="product-item-number">N. ';
                    html += responseData.product[index].number;
                    html += '</h5>';
                    html += '<h5 class="product-item-price"> $';
                    html += responseData.product[index].price;
                    html += '</h5>';
                    html += '</div>';
                    html += '<div class="product-overlay">';
                    html += '<ul class="product-overlay-ul"> <li>قطعة مميزة مصنوعة من اجود الخامات <hr> <li>الالوان ازرق واحمر وابيص</li> <hr> <li>السعر 124534509-0</li> </ul>';
                    html += '</div>';
                    html += '</div>';
                }
                document.getElementById('products-items').innerHTML = html;
            }
        }
    })
};

function getCheckedCategory() {
    let checkedCategory = '';
    let categoryInputsArray = document.querySelectorAll('.category-input');
    for (let index = 0; index < categoryInputsArray.length; index++) {
        if(categoryInputsArray[index].checked){
            checkedCategory = categoryInputsArray[index].value;
        }
    }
    return checkedCategory;
}

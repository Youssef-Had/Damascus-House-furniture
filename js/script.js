let categoryList = document.querySelectorAll('.category-list input');
console.log(categoryList);
let categoryProducts = document.querySelectorAll('.products-items .products-category');
console.log(categoryProducts);

for(let index = 1; index < categoryProducts.length; index++){
    categoryProducts[index].style.display = "none";
}

for(let index = 0; index < categoryList.length; index++){
    categoryList[index].addEventListener('click', () => {
        if(categoryList[index].value == "أثاث الضيافة"){
            for(let index = 0; index < categoryProducts.length; index++){
                categoryProducts[index].style.display = "none";
            }
            categoryProducts[0].style.display = "grid";
        }
        if(categoryList[index].value == "صمديات"){
            for(let index = 0; index < categoryProducts.length; index++){
                categoryProducts[index].style.display = "none";
            }
            categoryProducts[1].style.display = "grid";
        }
        if(categoryList[index].value == "متفرقات"){
            for(let index = 0; index < categoryProducts.length; index++){
                categoryProducts[index].style.display = "none";
            }
            categoryProducts[2].style.display = "grid";
        }
    })
}
const listProduct = [
  { name: "CPU", price: 750, quality: 10, categoryId: 1 },
  { name: "RAM", price: 50, quality: 2, categoryId: 2 },
  { name: "HDD", price: 70, quality: 1, categoryId: 2 },
  { name: "Main", price: 400, quality: 3, categoryId: 1 },
  { name: "Keyboard", price: 30, quality: 8, categoryId: 4 },
  { name: "Mouse", price: 25, quality: 50, categoryId: 4 },
  { name: "VGA", price: 60, quality: 35, categoryId: 3 },
  { name: "Monitor", price: 120, quality: 28, categoryId: 2 },
  { name: "Case", price: 120, quality: 28, categoryId: 5 },
];
const listCategory = [
  { id: 1, name: "Comuter" },
  { id: 2, name: "Memory" },
  { id: 3, name: "Card" },
  { id: 4, name: "Acsesory" },
];

function sortByCategoryName(listProduct, listCategory) {
  var listProductByCategory = [];
  var lengthCategory = listCategory.length;
  var lengthProduct = listProduct.length;

  for (let i = 1; i < lengthCategory; i++) {
    var current = listCategory[i];
    let j = i - 1;

    while (j > -1 && current.name.localeCompare(listCategory[j].name) < 0) {
      listCategory[j + 1] = listCategory[j];
      j--;
    }
    listCategory[j + 1] = current;
  }

  for (let r = 0; r < lengthCategory; r++) {
    for (let q = 0; q < lengthProduct; q++) {
      if (listCategory[r].id == listProduct[q].categoryId) {
        listProductByCategory.push(listProduct[q]);
      }
    }
  }

  return listProductByCategory;
}
//sortByCategoryName(listProduct, listCategory);
//console.log(sortByCategoryName(listProduct, listCategory));

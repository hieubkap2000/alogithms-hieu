const listProduct = [
  { name: "CPU", price: 750, juality: 10, categoryId: 1 },
  { name: "RAM", price: 50, juality: 2, categoryId: 2 },
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

function mapProductByCategory(listProduct, listCategory) {
  var lengthCategory = listCategory.length;
  var lengthProduct = listProduct.length;

  for (let i = 0; i < lengthCategory; i++) {
    for (let j = 0; j < lengthProduct; j++) {
      if (listCategory[i].id == listProduct[j].categoryId) {
        listProduct[j].categoryName = listCategory[i].name;
      }
    }
  }

  return listProduct;
}

console.log(mapProductByCategory(listProduct, listCategory));

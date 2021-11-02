var menus = [
  {
    id: 1,
    title: "Thể thao",
    parent_id: 0,
  },
  {
    id: 2,
    title: "Xã hội",
    parent_id: 0,
  },
  {
    id: 3,
    title: "Thể thao trong nước",
    parent_id: 1,
  },
  {
    id: 4,
    title: "Giao thông",
    parent_id: 2,
  },
  {
    id: 5,
    title: "Môi trường",
    parent_id: 2,
  },
  {
    id: 6,
    title: "Thể thao quốc tế",
    parent_id: 1,
  },
  {
    id: 7,
    title: "Môi trường đô thị",
    parent_id: 5,
  },
  {
    id: 8,
    title: "Giao thông ùn tắc",
    parent_id: 4,
  },
];

var menuCategory = "";
function printMenu(menus, parent_id = 0, c = "") {
  for (const [key, value] of Object.entries(menus)) {
    if (value.parent_id == parent_id) {
      menuCategory += c + value.title + "\n";
      delete menus[key];
      printMenu(menus, value.id, c + "--");
    }
  }
}

printMenu(menus);
console.log(menuCategory);

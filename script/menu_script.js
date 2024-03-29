// Здесь вы можете добавить ваш список блюд, например:
const dishes = [
    { name: "Паста карбонара", category: "hot" },
    { name: "Тирамису", category: "desserts" },
    { name: "Брускетта", category: "appetizers" },
    { name: "Маргарита", category: "pizza" },
    { name: "Пепперони", category: "pizza" },
    { name: "Куриный суп", category: "hot" },
    { name: "Борщ", category: "hot" },
    { name: "Наполеон", category: "desserts" },
    // Добавьте больше блюд по вашему выбору
  ];
  
  const menuItemsContainer = document.querySelector(".menu-items");
  
  // Функция для отображения блюд по выбранной категории
  function displayDishes(category) {
    menuItemsContainer.innerHTML = "";
    dishes.filter(dish => category === "all" || dish.category === category)
          .forEach(dish => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.textContent = dish.name;
            menuItemsContainer.appendChild(menuItem);
          });
  }
  
  // Обработчики событий для кнопок категорий
  document.querySelectorAll(".category-button").forEach(button => {
    button.addEventListener("click", function() {
      document.querySelector(".category-button.active").classList.remove("active");
      this.classList.add("active");
      const category = this.getAttribute("data-category");
      displayDishes(category);
    });
  });
  
  // По умолчанию отображаем все блюда
  displayDishes("all");
  
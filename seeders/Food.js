"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        name: "Italian Pizza",
        price: 2.9,
        summary:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
        imagePath: "images/pizza-1.jpg",
      },
      {
        name: "Greek Pizza",
        price: 1.9,
        summary:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
        imagePath: "images/pizza-2.jpg",
      },
      {
        name: "Caucasian Pizza",
        price: 2.9,
        summary:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
        imagePath: "images/pizza-3.jpg",
      },
      {
        name: "American Pizza",
        price: 9,
        summary:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
        imagePath: "images/pizza-4.jpg",
      },
      {
        name: "Tomatoe Pie",
        price: 3.9,
        summary:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
        imagePath: "images/pizza-5.jpg",
      },
      {
        name: "Margherita",
        price: 5.9,
        summary:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
        imagePath: "images/pizza-6.jpg",
      },
      {
        name: "Fresh Mushrooms",
        price: 7.5,
        summary:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        imagePath: "images/burger-1.jpg",
      },
      {
        name: "Grilled Chiken Salad",
        price: 12.0,
        summary: "Far far away, behind the word mountains.",
        imagePath: "images/burger-2.jpg",
      },
      {
        name: "Cheese and Garlic Toast",
        price: 4.5,
        summary: "Far far away, behind the word mountains.",
        imagePath: "images/burger-3.jpg",
      },
      {
        name: "Organic Egg",
        price: 4.99,
        summary: "Far far away, behind the word mountains.",
        imagePath: "images/pasta-3.jpg",
      },
      {
        name: "Salad with Crispy Chicken",
        price: 8.5,
        summary: "Far far away, behind the word mountains.",
        imagePath: "images/pasta-1.jpg",
      },
      {
        name: "Tomato Soup with Chicken",
        price: 12.99,
        summary:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        imagePath: "images/pasta-2.jpg",
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });

    await queryInterface.bulkInsert("Food", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Food", null, {});
  },
};

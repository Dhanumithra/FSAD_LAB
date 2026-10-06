import React from "react";

const popularDishes = [
  { name: "Strawberry Pancakes", emoji: "🥞" },
  { name: "Pink Velvet Cupcake", emoji: "🧁" },
  { name: "Watermelon Salad", emoji: "🍉" },
  { name: "Rose Milk Tea", emoji: "🧋" },
];

function Home() {
  return (
    <div>
      <h1>Welcome to Cute Cookbook! 🌸</h1>
      <p>Here are some of our most popular dishes right now:</p>
      <div className="card-grid">
        {popularDishes.map((dish) => (
          <div className="card" key={dish.name}>
            <div className="card-emoji">{dish.emoji}</div>
            <div className="card-name">{dish.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

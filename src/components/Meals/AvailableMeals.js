import MealItem from "./MealItem/MealItem";
import style from "./AvailableMeals.module.css";
import Card from "../../UI/Card";

const demoList = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealList = demoList.map((demo) => (
    <MealItem
      id={demo.id}
      key={demo.id}
      name={demo.name}
      description={demo.description}
      price={demo.price}
    />
  ));

  return (
    <section className={style.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

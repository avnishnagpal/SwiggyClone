import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [restMenu, setRestMenu] = useState([{ name: "Burger" }]);

  /*useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("Api url");
    const json = await data.json();
    setRestMenu(json);
  };*/

  return (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <p>Cuisiness</p>
      <ul>
        {restMenu.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

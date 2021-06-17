import React, { useState, useEffect } from "react";
import Item from "./Item";

const ItemList = ({ items, category }) => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (category !== "") {
      setFilteredItems(items.filter((item) => item.category === category));
    } else {
      setFilteredItems(items);
    }
  }, [items, category]);

  let heading = "";

  if (category) {
    heading = <h3>Soubory z kategorie {category}</h3>;
  } else {
    heading = <h3>Všechny soubory</h3>;
  }

  return (
    <div>
      {heading}
      {filteredItems.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} type={item.type} path={item.path} category={item.category} date={item.date} />
      ))}
    </div>
  );
};

export default ItemList;

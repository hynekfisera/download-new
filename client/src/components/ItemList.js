import React, { useState, useEffect } from "react";
import Item from "./Item";
import { v1 as uuid } from "uuid";

const ItemList = ({ category }) => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      name: "test",
      path: "text.txt",
      type: "file",
      category: "prg",
      date: "2021-06-12T12:56:59.584Z",
    },
    {
      id: uuid(),
      name: "test2",
      path: "test.py",
      type: "file",
      category: "alg",
      date: "2021-06-13T08:25:59.584Z",
    },
    {
      id: uuid(),
      name: "Google",
      path: "https://google.com/",
      type: "link",
      category: "other",
      date: "2021-06-11T12:56:59.584Z",
    },
  ]);

  useEffect(() => {
    if (category !== "") {
      setItems(items.filter((item) => item.category === category));
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
      {items.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} type={item.type} path={item.path} category={item.category} date={item.date} />
      ))}
    </div>
  );
};

export default ItemList;

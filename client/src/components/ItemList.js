import React, { useState } from "react";
import { v1 as uuid } from "uuid";

const ItemList = ({ category }) => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      name: "test",
      path: "text.txt",
      type: "file",
      date: "2021-06-12T12:56:59.584Z",
    },
    {
      id: uuid(),
      name: "test2",
      path: "test.py",
      type: "file",
      date: "2021-06-13T12:56:59.584Z",
    },
    {
      id: uuid(),
      name: "Google",
      path: "https://google.com/",
      type: "link",
      date: "2021-06-11T12:56:59.584Z",
    },
  ]);

  let heading = "";

  if (category) {
    heading = <h3>Soubory z kategorie {category}</h3>;
  } else {
    heading = <h3>Všechny soubory</h3>;
  }

  return (
    <div>
      {heading}
      {items.map((item) => item.name)}
    </div>
  );
};

export default ItemList;

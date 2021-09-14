import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GiftExpertApp = () => {
  // HOOK useState
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>GiftExpertApp</h2>
      {/* COMPONENTE AddCategory */}
      <AddCategory setCategorias={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          // COMPONENTE GifGrid
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;

import { useEffect, useState } from "react";
import Category from "./Category";



function CategoryList() {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para el spinner o indicador de carga
  const [error, setError] = useState(null); // Est


  return (
    <>

      <div className="flex justify-center my-4">
      <Category/>
      </div>

      
    </>
  );
}

export default CategoryList;

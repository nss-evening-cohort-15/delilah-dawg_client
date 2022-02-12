import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CategoryContext } from "./CategoryProvider";
import { DeleteModal } from "./DeleteModal";


export const CategoryList = (props) => {
    const { categories, getCategories, removeCategory } = useContext(CategoryContext);
    const history = useHistory();
   
    useEffect(() => {
        getCategories();
    }, []);

    const handleRemoval = (props) => {
      removeCategory(props)
      .then (() => {
        history.push("/categories")
      })
    }

    

    return (
        <article className="categories">
      <header className="categories__header">
        <h1>Categories</h1>
      </header>
      {categories.map((category) => {
        return (
          <section key={category.id} className="category">
            <div className="category_name"></div>
            <div>{category.label}</div>
            <DeleteModal title={DeleteModal} category={category} handleRemoval={handleRemoval} buttonLabel={'Delete Category'}>
              Are you sure you want to delete this Category?
            </DeleteModal>
            <button className="btn btn-3"
              onClick={() => {
                history.push({ pathname: `/categories/edit/${category.id}`});
              }}
              >Edit</button>
          </section>
        );
      })}
      <button
       className="btn btn-2 btn-sep icon-create"
       onClick={() => {
           history.push({ pathname: "/categories/new"});
       }}
       >
           Make New Category
      </button>
    </article>
    )
}
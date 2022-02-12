import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CategoryContext } from "./CategoryProvider";

export const CategoryForm = () => {
    const history = useHistory();
    const { createCategory } = useContext(CategoryContext)
    

    const [ currentCategory, setCurrentCategory] = useState({
        label: ""
    });
    
     const changeCategoryLabelState = (event) => {
         const newCategoryState = { ...currentCategory };
         newCategoryState.label = event.target.value;
         setCurrentCategory(newCategoryState);
     };

     return (
         <form className="categoryForm">
             <h2 className="categoryForm_title">Make New Category</h2>
             <fieldset>
                 <div className="form-group">
                     <label htmlFor="label">Label: </label>
                     <input
                      type="text"
                      name="label"
                      required
                      autoFocus
                      className="form-control"
                      value={currentCategory.label}
                      onChange={changeCategoryLabelState}
                      />
                 </div>
             </fieldset>
            <button
                type="submit"
                onClick={(evt) => {
                evt.preventDefault();
                // Create the category
                const category = {
                    label: currentCategory.label
                };
                // Once category is created, redirect user to category list
                createCategory(category).then(() => history.push("/categories"))
                }}
                className="btn btn-primary"
                >
                Create Category
            </button> 
         </form>
     );
};
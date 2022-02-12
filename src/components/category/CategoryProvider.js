import React, { useState, createContext } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([]); 

    const getCategories = () => {
        return fetch("http://localhost:8000/categories", {
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
            },
        })
        .then((response) => response.json())
        .then(setCategories);
    };

    const getCategoryById = (categoryId) => {
        return fetch(`http://localhost:8000/categories?id=${categoryId}`)
        .then(res => res.json())
    }

    const createCategory = (category) => {
        return fetch("http://localhost:8000/categories", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("dd_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        })
        .then((response) => response.json())
        .then(getCategories);
    };

    const removeCategory = categoryId => {
        return fetch(`http://localhost:8000/categories/${categoryId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
            },
        })
        .then(getCategories)
    }

    const updateCategory = category => {
        return fetch(`http://localhost:8000/categories/${category.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        })
        .then(getCategories)
    }

    return (
        <CategoryContext.Provider value={{ categories, getCategories, createCategory,
         removeCategory, getCategoryById, updateCategory }}>
            {props.children}
        </CategoryContext.Provider>
    );
};

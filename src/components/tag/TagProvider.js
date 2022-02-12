import React, { useState } from "react";

export const TagContext = React.createContext();

export const TagProvider = (props) => {
  const [tags, setTags] = useState([]);

  const getTags = () => {
    return fetch("http://localhost:8000/tags", {
      headers: {
        Authorization: `Token ${localStorage.getItem("dd_token")}`
      },
    })
      .then((response) => response.json())
      .then(setTags);
  };

  const createTag = (tag) => {
    return fetch("http://localhost:8000/tags", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("dd_token")}`,
				"Content-Type": "application/json"
			},
      body: JSON.stringify(tag)
    }).then((response) => response.json())
      .then(getTags);
  }

  const removeTag = (tagId) => {
    return fetch(`http://localhost:8000/tags/${tagId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("dd_token")}`
      },
    })
    .then(getTags);
  }

  const getTagById = (tagId) => {
    return fetch(`http://localhost:8000/tags/${tagId}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("dd_token")}`
    }})
    .then((response) => response.json())
  }

  const editTag = (tag) => {
    return fetch(`http://localhost:8000/tags/${tag.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("dd_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tag)
    })
    .then(res => {
      getTags()

      return res
    
    });
  }

  return (
    <TagContext.Provider value={{ tags, getTags, createTag, removeTag, getTagById, editTag }}>
      {props.children}
    </TagContext.Provider>
  );
};


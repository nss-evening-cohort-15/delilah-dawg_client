import React, { useContext, useEffect, useState } from "react"
import { TagContext } from "./TagProvider"
import "./Tag.css"
import { useParams, useHistory } from "react-router-dom"

export const TagDetail = (props) => {
  const { getTagById, editTag, getTags } = useContext(TagContext);
  const [currentTag, setCurrentTag] = useState([]);
  const { tagId } = useParams();
  const history = useHistory();

  const changeTagState = (e) => {
    const newTagState = { ...currentTag }

    newTagState[e.target.name] = e.target.value

    setCurrentTag(newTagState)
  }

  const handleSaveTag = () => {
    if (tagId) {
      editTag({
        id: currentTag.id,
        label: currentTag.label
      })
        .then((res) => {
          if (res.status === 401) {
            window.alert("You can't do that!")
          } else {
            history.push(`/tags`)
          }
        })
    }
  }

  useEffect(() => {
    getTagById(tagId)
      .then((tag) => {
        setCurrentTag(tag)
      })
  }, [])

  return (
    <form className="form">
      <h2 className="form__title">Edit Tag!</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="label">Label:</label>
          <input
            type="text"
            name="label"
            required
            autoFocus
            className="form-control"
            value={currentTag.label}
            onChange={changeTagState}
          />
        </div>
      </fieldset>
      <button
        type="submit"
        className="btn btn-4"
        onClick={(e) => {
          e.preventDefault()

          handleSaveTag()
        }}>
        Update Tag
      </button>
    </form>
  )
}
import React, { useContext, useEffect } from "react";
import { TagContext } from "./TagProvider";
import { ProfileContext } from "../profile/ProfileProvider";
import './Tag.css'
import { TagDetail } from "./TagDetail";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const TagList = (props) => {
  const { tags, getTags, removeTag } = useContext(TagContext);
  const { profile, getProfile } = useContext(ProfileContext);
  const history = useHistory();

  const isAdmin = (tagId) => {
    if (!profile.rareuser?.user.is_staff) {
      return (
        <>
          <button className="edit" onClick={() => history.push(`/tags/${tagId}/edit`)}>Edit</button>
          <button className="delete" onClick={() => removeTag(tagId)}>Delete</button>
        </>
      )
    }
  }

  useEffect(() => {
    getTags().then(getProfile());
  }, []);

  return (
    <>
      <article className="tags">
        <h1 className="list__header">Tags</h1>
        <section className="list__section">
          {tags.map((tag) => {
            return (
              <section key={tag.id} className="tag">
                <div>{isAdmin(tag.id)}</div>
                <div key={tag.label} className="tag__label">
                  {tag.label}
                </div>
              </section>
            )
          })}
        </section>
      </article>
    </>
  )
}
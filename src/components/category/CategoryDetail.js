// import { useContext, useEffect, useState } from "react"
// import { useParams, useHistory } from "react-router-dom"
// import { CategoryContext } from "./CategoryProvider"


// export const CategoryDetail = (props) => {
//     const { categories } = useContext(CategoryContext)
//     const [currentcategory, setCurrentCategory] = useState([])

//     const { categoryId } = useParams();

//     const history = useHistory()

//    const changeCategoryLabelState = (evt) => {
//        const newCategoryState = { ...currentcategory }
//        newCategoryState[evt.target.label] = evt.target.value
//        setCurrentCategory(newCategoryState)
//    }

//    const handleSaveCategory = () => {
//        if (categoryId) {
//            editCategory({
//                id: currentcategory.id,
//                label: currentcategory.label
//            })
//            .then(() => history.push(`/categories`))
//        }
//    }

//    useEffect(() => {
//        getCategoryById(categoryId)
//        .then((category) => {
//            setCurrentCategory(category)
//        })
//    }, [])

//     return (
//         <form className="form">
//             <h2 className="form__title">Edit Category</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="label">Label:</label>
//                     <input
//                     type="text"
//                     name="label"
//                     required
//                     autoFocus
//                     className="form-control"
//                     value={currentcategory.label}
//                     onChange={changeCategoryLabelState}
//                     />
//                 </div>
//             </fieldset>
//             <button
//             type="submit"
//             className="btn btn-4"
//             onClick={(evt) => {
//                 evt.preventDefault()
//                 handleSaveCategory
//             }}>
//                 Edit Category
//             </button>
//         </form>
//     )
// }
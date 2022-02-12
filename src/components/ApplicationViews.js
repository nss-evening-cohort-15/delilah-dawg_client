import React from "react"
import { Route } from "react-router-dom"

//Posts
import { PostProvider } from "./post/PostProvider"
import { PostForm } from "./post/PostForm"
import { PostList } from "./post/PostList"
import { CategoryForm } from "./category/CategoryForm"
import { CategoryList } from "./category/CategoryList"
import { CategoryProvider } from "./category/CategoryProvider"
// import { TagList } from "./tag/TagList"
import { ProfileProvider } from "./profile/ProfileProvider"
import { ProfileList } from "./profile/ProfileList"
import { TagManagement } from "./tag/TagManagement"
import { TagProvider } from "./tag/TagProvider"
import { TagDetail } from "./tag/TagDetail"


export const ApplicationViews = () => {
    return <>

        <main style={{
            margin: "5rem 2rem",
            // backgroundColor: "lightgoldenrodyellow"
        }}>
            <ProfileProvider>
                < PostProvider >
                    <TagProvider>
                        <CategoryProvider>
                            <Route path="/posts/new">
                                <PostForm />
                            </Route >
                            <Route path="/post">
                                <PostList />
                            </Route>
                            <Route path="/rareusers">
                                <ProfileList />
                            </Route>
                            <Route exact path="/tags">
                                <TagManagement />
                            </Route>
                            <Route exact path="/tags/:tagId(\d+)/edit">
                                <TagDetail />
                            </Route>
                            <Route exact path="/categories">
                                <CategoryList />
                            </Route>
                            <Route exact path="/categories/new">
                                <CategoryForm />
                            </Route>
                            <Route path="/categories/edit/:categoryId(\d+)">
                                <CategoryForm />
                            </Route>
                        </CategoryProvider>
                    </TagProvider>
                </PostProvider >
            </ProfileProvider>
        </main >
    </>
}

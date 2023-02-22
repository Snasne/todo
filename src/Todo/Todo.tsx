import React, { useState } from 'react'
import CreatePost from './CreatePost/CreatePost'
import Header from './Header/Header'
import Post from './Post/Post'
import todo from './Todo.module.scss'

export default function Todo() {

  interface IPost {
    id: number,
    title: string,
  }

  const [posts, setPosts] = useState<IPost[]>([])

  return (
    <div className={todo.wrapper}>
        <Header/>
        <div className={todo.container}> 
          <CreatePost setPosts={setPosts} posts={posts}/>
          <div className={todo.containerForPosts}>
            <div className={todo.posts}>
              {posts.map((post) =>
                <Post key={post.id} title={post.title}/>
              )}
            </div>
            <div className={todo.containerForPosts__footer}>
              <h1>{posts.length} Items</h1>
              <button onClick={() => setPosts([])}>Clear</button>
            </div>
          </div>
        </div>
    </div>
  )
}

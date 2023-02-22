import React from 'react'
import createPost from './CreatePost.module.scss'
import { useState } from 'react'

export default function CreatePost(props: {setPosts: any, posts: {id: number, title: string}[]}) {

  type INewPost = {
    id: number,
    title: string
  }

  const [title, setTitle] = useState<string>('')

  const createNewPost = () => {
    if (title !== '') {
      const post: INewPost = {
        id: new Date().getTime(),
        title: title + ''
      }
      props.setPosts([...props.posts, post])
      setTitle('')
    }
  }

  return (
    <div className={createPost.wrapper}>
      <input type="text" maxLength={18} value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Create a new todo...'/>
      <button onClick={() => createNewPost()}></button>
    </div>
  )
}

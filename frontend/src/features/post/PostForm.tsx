import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createPostAsync} from './postSlice';

function PostForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  function submitHandler(e:any) {
    e.preventDefault();
    const formData = {
      post: {
        name: name,
        image: image,
      }
    }
    dispatch(createPostAsync(formData));
    resetState();
  }

  function resetState() {
    setName('');
    setImage('');
  }
  
  return <div>
    <h1>PostForm</h1>
    <form>
      <input
        type="text"
        className="form-control text-start"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <textarea
        className="form-control text-start"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => submitHandler(e)}>Submit</button>
    </form>
  </div>;
}

export default PostForm;
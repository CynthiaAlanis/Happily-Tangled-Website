import React, { useEffect, useState } from 'react';
import ButtonGroup from './Button';

function Post(props:any) {
    const [name, setName] = useState(props.post.name);
    const [image, setImage] = useState(props.post.image);
    const [isEditing, setIsEditing] = useState(props.postToEdit === props.post.id);
    useEffect(() => {
        setIsEditing(props.postToEdit === props.post.id);
    }, [props.postToEdit, props.post.id])

    function submitHandler(e:any) {
        e.preventDefault();
        const formData = {
            post: {
                id: props.post.id,
                name: name,
                image: image,
            }
        }
        props.submitEdit(formData)
        resetState();
    }

    function resetState() {
        setName(props.post.name);
        setImage(props.post.image);
    }

    const nameElement = <h2 className="name text-start">{props.post.name}</h2>;
    const imageElement = <p className="card-text text-start">{props.post.image}</p>;
    const editableName = <input 
                            type="text" 
                            className="form-control text-start" 
                            value={name} 
                            onChange={(e) => setName(props.post.title)} />;
    const editableImage= <textarea 
                            className="form-control text-start"
                            value={image}
                            onChange={(e) => setImage(e.target.value)} />;
    const submitButton = <button
                            type="submit"
                            className="form-control"
                            onClick={(e) => submitHandler(e)}>Submit</button>;
  return <div>
      <div className="row">
          <div className="col-8">
              {isEditing ? editableName : nameElement}
          </div>
          <div className="col-4">
              <ButtonGroup 
                post_id={props.post.id}
                dispatch={props.dispatch}
                toggleEditForm={props.toggleEditForm}
                />

          </div>
      </div>
        <div className="row">
            <div className="col-8">
                {isEditing ? editableImage: imageElement}
            </div>
        </div>
        <div className="row">
            <div className="col-2">
                {isEditing ? submitButton : ""}
            </div>
        </div>
  </div>;
}

export default Post;
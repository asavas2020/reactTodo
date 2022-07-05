import { useState } from "react";

const Addtutorial = ({postTutorials}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefoult();
    setDesc("");
    setTitle("");
    postTutorials({title:title, description:desc});
  }
  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" 
          className="form-labe">Title
          </label>
          <input 
          type="text" 
          id="title" 
          className="form-control" 
          placeholder="Enter..."
          value = {title}
          onChange={(e) => setTitle(e.target.value)}
          required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="desc" 
      className="form-label">Description</label>
      <input 
      type="text" 
      id="desc" 
      className="form-control" 
      placeholder="Enter..."
      value = {desc}
      onChange={(e) => setDesc(e.target.value)}
      required
      />
    </div>
    
    
    <button className="btn btn-warning mb-4">Submit</button>
 
  </form>
  </div>
  )
}

export default Addtutorial
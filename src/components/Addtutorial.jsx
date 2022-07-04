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
    <div>
        <h1>Add Your Tutorial</h1>
        <form onSubmit={handleSubmit}>

 
    <div className="title">
      <label htmlFor="title" 
      className="form-labe">Title</label> <br />
      <input type="text" 
      id="title" 
      className="form-control" 
      placeholder="Disabled input"/>
    </div>
    <div className="mb-3 desc">
      <label htmlFor="desc" 
      className="form-label">Description</label> <br />
      <input type="text" 
      id="desc" 
      className="form-control" 
      placeholder="Disabled input"/>
    </div>
    
    
    <button type="submit" className="btn btn-warning">Submit</button>
 
</form>
    </div>
  )
}

export default Addtutorial
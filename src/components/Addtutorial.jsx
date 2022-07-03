

const Addtutorial = () => {
  return (
    <div>
        <h1>Add Your Tutorial</h1>
        <form>

 
    <div className="title">
      <label for="disabledTextInput" className="form-labe">Title</label> <br />
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input"/>
    </div>
    <div className="mb-3 desc">
      <label for="disabledTextInput" className="form-label">Description</label> <br />
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input"/>
    </div>
    
    
    <button type="submit" className="btn btn-warning">Submit</button>
 
</form>
    </div>
  )
}

export default Addtutorial
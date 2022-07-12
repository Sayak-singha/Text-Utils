import React,{useState} from 'react'

export default function TextForm(props) {
  const handle = () =>{
    let newtext = Text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to upper case" , "Success");
  }
  const handleLower = () =>{
    let lowtext = Text.toLowerCase();
    setText(lowtext);
    props.showAlert("Converted to lower case" , "Success");
  }

  const change = (event) =>{
    setText(event.target.value);
  }
  const [Text, setText] = useState('');

  return (
    <>
    <div>
      
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={Text} onChange={change}></textarea>
</div>
<button className="textArea" onClick={handle}>Convert To Upper Case</button>
<button className="text" onClick={handleLower}>Convert To Lower Case</button>
    </div>
    <div className="containers">
      <p>{Text.split(" ").length}Words and {Text.length} characters</p>
    </div>
    </>
  )
}

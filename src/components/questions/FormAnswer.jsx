import React, {useState, useEffect, useRef} from 'react';
import styles from './questions.module.css';

const AnswerForm = (props) => {

  const [uploadArray, setUploadArray] = useState([]);
  let imageInput = document.getElementById('image-uploads');
  // let images = imageInput.files;
  // var loadFile = function(event) {
	// var image = document.getElementById('output');
	// image.src = URL.createObjectURL(event.target.files[0]);
  // };

  // const ref = useRef(null);

useEffect(() => {
  // updateArray(ref.current);
}, [uploadArray])

  const handleUpload = (e) => {
    console.log(e.target.files[0])
    setUploadArray(uploadArray => [...uploadArray, e.target.files[0]]);
    // updateArray(uploadArray => [...uploadArray, e.target.files[0]])
  }

  if (props.show) {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>
          <h3> Submit Your Answer </h3>
          <span>[Insert Product Name]: [Insert Product Body] </span>
          <form className={styles.questionForm}>
            <label> Your Answer (mandatory) </label>
            <input type='text' name='question' maxlength='1000'></input>
            <label> What is your nickname (mandatory) </label>
            <input type='text' placeholder='Example: jack543!' maxlength='60'></input>
            <span className={styles.inputSubtext}> For privacy reasons, do not use your full name or email address </span>

            <label> Your email (mandatory) </label>
             <input type='text' placeholder='Example: jack@email.com' maxlength='60'></input>
            <span className={styles.inputSubtext}> “For authentication reasons, you will not be emailed”</span>
            {uploadArray.length < 5 && <label> Upload your photos </label>}
            {/* <input type='file' id='image-uploads' name='uploads' accept="image/*" ref={ref} multiple onChange={(e) => updateArray(ref.current.files) }></input> */}
            {uploadArray.length < 5 && <input type='file' id='file' name='file' accept="image/*" onChange={handleUpload}></input>}
            <div className={styles.actions}>
              <button onClick={props.modalButtonClick}> Close </button>
            </div>
          </form>
        </div>
    </div>
    )
  } else {
    return null;
  }
}

export default AnswerForm;
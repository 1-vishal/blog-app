import {React, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Create = () => {
  const [value, setValue] = useState('');
  return (
    <div className='create-blog'>
      <form action="" className="blog-form">
        <label for="heading">Heading</label>
        <input type="text" name='heading' placeholder='Add your heading'/>
        <label for="image">Image</label>
        <input type="file" name='image' placeholder='choose your image'/>
        <label for="image">Blog Description</label>
        <ReactQuill theme="snow" className='text-editor' value={value} placeholder={'Write something or insert a star ★'} onChange={setValue} />
      </form>
    </div>
  )
}
export default Create;
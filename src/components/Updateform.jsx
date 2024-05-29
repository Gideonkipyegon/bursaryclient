import { useContext, useEffect, useState } from 'react';
import { apidomain } from '../utils/domains';
import axios from 'axios';
import { Context } from '../context/userContext/Context';
import './updatedform.css';

const UpdateForm = ({ setShowEditForm, post, getPosts }) => {
  const [Content, setContent] = useState('');
  const { user } = useContext(Context);

  useEffect(() => {
    setContent(post.Content);
  }, [post.Content]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${apidomain}/Post/${post.id}`,
        { Content: Content },
        {
          headers: {
            Authorization: user.token,
          },
        }
      );
      // Optional: You can update the post locally instead of calling getPosts()
      const updatedPost = { ...post, Content: Content };
      getPosts(updatedPost); // Pass the updated post to the parent component
      setShowEditForm(false);
    } catch (error) {
      console.log('error', error);
      alert(
        error.response?.data?.error || 'An error occurred while processing your request.'
      );
    }
  };

  return (
    <div className='updateForm'>
      <form className='form'>
        <textarea
          value={Content}
          onChange={(e) => setContent(e.target.value)}
          name='Content'
          id='Content'
        ></textarea>
        <div className='btn-wrapper'>
          <button onClick={() => setShowEditForm(false)}>exit</button>
          <button type='submit' onClick={handleSubmit}>
            Update
          </button>
        </div>
        {/* Optional: Display the number of likes and comments for the post */}
        <p>Likes: {post.likes}</p>
        <p>Comments: {post.comments}</p>
      </form>
    </div>
  );
};

export default UpdateForm;

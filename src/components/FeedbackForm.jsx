import { useState } from 'react';
import { Card } from './shared/Card';
import { Button } from './shared/Button';
import { RatingSelect } from "./RatingSelect";

export const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be more than 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate the service you received?</h2>
        <RatingSelect />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            value={text}
            onChange={handleTextChange}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

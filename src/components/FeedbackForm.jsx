import { useState } from 'react';
import { Card } from './shared/Card';
import { Button } from './shared/Button';

export const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate the service you received?</h2>
        {/* @todo - rating select component */}
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            value={text}
            onChange={handleTextChange}
          />
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  );
};

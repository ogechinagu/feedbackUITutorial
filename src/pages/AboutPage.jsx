import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/shared/Card';

export const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About the Feedback UI project</h1>
        <p>This is a react app to leave feedback for a product or service</p>
        <p>Created by: Ogechi Ikwunagu following Brad Travesty's Tutorial</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to='/'>Back to Home Page</Link>
        </p>
      </div>
    </Card>
  );
};

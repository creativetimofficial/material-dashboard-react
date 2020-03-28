import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

function LandingPage() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100vh',
    }}
    >
      <h1>Hello Landing page</h1>
      <div>
        <Link to="/dashboard">
          <Button color="primary">Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;

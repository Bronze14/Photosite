import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',color:'black',width:'100%',marginTop:'500px',backgroundColor:'yellow'}}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading....</span>
      </Spinner>
    </div>
  );
};

export default Loading;
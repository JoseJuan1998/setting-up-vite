import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <Link to="/">Go Home</Link>
    </>
  );
}

import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
        <p>Sorry! The page you requested cannot be found</p>
        <Link to="/">Go Back Home</Link>
    </div>
  )
}

export default NotFound
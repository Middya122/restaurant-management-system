import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        navigate('/');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);


  return (
    <>
    <section className = "notfound">
      <div className="container">
        <img src="/sandwich.png" alt="success" />
        <h1>Redirecting to Home in {countdown} seconds...</h1>
        <Link to={"/"}>Go to Home Now <span><HiOutlineArrowNarrowRight /></span></Link>
      </div>
    </section>
    

    
    </>

  
  )
}

export default Success;
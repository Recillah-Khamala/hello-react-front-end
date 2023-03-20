import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getGreetings from './redux/Api';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  const greet = useSelector((state) => state.greetingDetails.greeting);
  return (
    <div>
      <h1>
        Hey,
        {greet.greeting}
      </h1>
    </div>
  );
};

export default Greeting;

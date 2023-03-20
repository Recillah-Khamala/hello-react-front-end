import React, {useEffect} from "react";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/exports";
import getGreetings from "./redux/Api";

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  const greet = useSelector((state) => state.greeting);
  return(
    <div>
      <h1>Hey, {greet.text}</h1>
    </div>
  )
}
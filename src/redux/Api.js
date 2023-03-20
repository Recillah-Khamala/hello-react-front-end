const getGreetings = () => async(dispatch) => {
  await fetch ('http://localhost:3001/greeting/').then(response => response.json())
  .then(data => {
    dispatch({ type: "GET_GREETING", payload: data[0] });
  })
}

export default getGreetings;
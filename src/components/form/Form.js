import React, { useState } from "react";
import "./Form.css";

const Form = props => {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('');
  return (
    <div className="container forms h-100">
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="row ">
          <div className="col-md-3 offset-md-2 ml-auto py-5 m-0">
            <input type="text" className="form-control" placeholder="City" name="city" autoComplete="off" onChange={(event) => setCity(event.target.value)}/>
          </div>
          <div className="col-md-3 offset-md-2 mr-auto py-5 m-0">
            <input type="text" className="form-control" placeholder="Country" name="country" autoComplete="off" onChange={(event) => setCountry(event.target.value)}/>
          </div>
          </div>
            <div className="col-md-3 mx-auto">
            <button className="btn btn-danger">Get Weather</button>
        </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;

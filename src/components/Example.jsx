import React from "react";

const Example = () => {
  function fetchData(callback) {
    setTimeout(() => {
      const data = "Async data fetched";
      callback(data);
    }, 2000); // Simulate an asynchronous operation (e.g., an API request)
  }

  function processData(data) {
    console.log("Processing data:", data);
  }

  fetchData(processData); // Fetch data asynchronously and process it when it's ready

  return <div style={{ height: "100vh", width: "100vw" }}></div>;
};

export default Example;

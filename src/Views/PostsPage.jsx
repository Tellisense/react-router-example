import React from "react";


const Posts = (props) => {
  console.log(`props from Post page: `, props);


  return (
    <div>
      <h1 className="text-4xl font-black ">Post's Page</h1>
      <div className=" mt-4 text-xl ">
        Year: {props.match.params.year}
      </div>
      <div className="mt-4 text-xl ">Month: {props.match.params.month}</div>
    </div>
  );
};

export default Posts;

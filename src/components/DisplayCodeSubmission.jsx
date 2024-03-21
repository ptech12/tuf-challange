import React, { forwardRef, useEffect, useState } from "react";
import "../App.css";
import useAxiosFetch from "../hooks/useAxiosFetch";
import TableRow from "./TableRow"; 

const DisplayCodeSubmission = () => {
  // console.log(data);
  // const [submission, setSubmission] = useState();

  const { data, fetchError, isLoading } = useAxiosFetch(
    "https://tuf-backend-venc.onrender.com/submission/"
  );
  

  return (
    <section className="page2">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Language</th>
            <th>Stdin</th>
            <th>Source Code</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
          <TableRow data={data}/>

          {/* <tr>
            <td>{submission.id}</td>
            <td>{submission.username}</td>
            <td>{submission.lang}</td>
            <td>{submission.stdin}</td>
            <td>{submission.src_code.length <= 100 ? submission.src_code : `${(submission.src_code).slice(0, 99)+'...'}`}</td>
            <td>{displayTimeStamp(submission.created)}</td>
          </tr> */}
      </table>
    </section>
  );
};

export default forwardRef(DisplayCodeSubmission);

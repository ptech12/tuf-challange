import React, { forwardRef } from "react";
import "../App.css";

const DisplayCodeSubmission = ({ data }, ref) => {
  console.log(data);
  const displayTimeStamp = (timestamp) => {
    const date = new Date(timestamp);

    // Format the date and time using options for locale and date/time style
    const formattedDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Calcutta",
    });

    return formattedDate;
  };
  // return (<></>)
  return (
    <section ref={ref} className="page2">
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
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{data.username}</td>
            <td>{data.lang}</td>
            <td>{data.stdin}</td>
            <td>{data.src_code.length <= 100 ? data.src_code : `${(data.src_code).slice(0, 99)+'...'}`}</td>
            <td>{displayTimeStamp(data.created)}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default forwardRef(DisplayCodeSubmission);

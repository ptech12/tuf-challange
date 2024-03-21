import React from "react";

const TableData = ({ id, username, lang, stdin, src_code, created }) => {
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
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{username}</td>
        <td>{lang}</td>
        <td>{stdin}</td>
        <td>{src_code}</td>
        <td>{displayTimeStamp(created)}</td>
      </tr>
      {/* <tr><td>{username}</td></tr> */}
    </tbody>
  );
};

export default TableData;

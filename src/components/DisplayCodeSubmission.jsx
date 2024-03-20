import React from 'react'
import "../App.css"

const DisplayCodeSubmission = ({ data }) => {
  // console.log(data);
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Language</th>
        <th>Stdin</th>
        <th>Source Code</th>
        <th>Time Stamp</th>
      </tr>
    </table>
  )
}

export default DisplayCodeSubmission
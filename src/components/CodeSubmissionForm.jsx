import React, { useState } from "react";

import "../App.css"
import { Link } from "react-router-dom";

const CodeSubmissionForm = ({
  username,
  language,
  stdin,
  sourceCode,
  handleChange,
  handleSubmit
}) => {
  return (
    <div className="formContainer">
      <h2>Submit Code</h2>
      <form onSubmit={handleSubmit} className="formBox">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => handleChange(e)}
          required
          placeholder="Enter username"
        />
        <br />
        <br />

        <label htmlFor="language">Preferred Code Language:</label>
        <br />
        <select
          id="language"
          name="language"
          value={language}
          onChange={(e) => handleChange(e)}
          required
        >
          <option value="c++">C++</option>
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
        <br />
        <br />

        <label htmlFor="sourceCode">Source Code:</label>
        <br />
        <textarea
          id="sourceCode"
          name="sourceCode"
          value={sourceCode}
          onChange={(e) => handleChange(e)}
          rows="10"
          cols="50"
          required
        ></textarea>
        <br />
        <br />
        <label htmlFor="stdin">Standard Input (stdin):</label>
        <br />
        <textarea
          id="stdin"
          name="stdin"
          value={stdin}
          onChange={(e) => handleChange(e)}
          rows="5"
          cols="30"
        ></textarea>
        <br />
        <br />
        <Link to="#/submissions">
        </Link> 
          <input type="submit" value="Submit" />
        
      <p>Already submitted? <Link to={"/submissions"}>Show Results</Link></p>
      </form>
    </div>
  );
};

export default CodeSubmissionForm;

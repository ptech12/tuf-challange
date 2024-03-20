import React, { useState } from "react";

const CodeSubmissionForm = ({
  formData,
  setFormData,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div>
      <h2>Submit Code</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
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
          value={formData.language}
          onChange={handleChange}
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
          value={formData.sourceCode}
          onChange={handleChange}
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
          value={formData.stdin}
          onChange={handleChange}
          rows="5"
          cols="30"
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CodeSubmissionForm;

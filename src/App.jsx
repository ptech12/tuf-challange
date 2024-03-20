import "./App.css";
import React, { useEffect, useState } from "react";
import CodeSubmissionForm from "./components/CodeSubmissionForm";
import DisplayCodeSubmission from "./components/DisplayCodeSubmission";
import usrApi from "./api/usrApi";

function App() {
  const langs = {
    1: "C++",
    2: "Java",
    3: "Javascript",
    4: "Python",
  };
  const [formData, setFormData] = useState({
    username: "",
    language: "",
    stdin: "",
    sourceCode: "",
  });
  const [backendData, setBackendData] = useState();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(formData);
    // Here you can handle form submission, e.g., send data to backend
    // console.log(formData);
    try {
      const result = await usrApi.post("/submission/add", formData);
      const data = result.data
      // fetch("http://localhost:8081/submission/add").then((response) => response.json()).then((data) =>
      // );
      setBackendData({
        data
      })

      setFormData({
        username: "",
        language: "",
        stdin: "",
        sourceCode: "",
      });
    } catch (err) {
      console.error(`Error: ${err.message}`);
      alert(`Error: ${err.message}`);
    }
    console.log(backendData);
  };
  return (
    <>
      <CodeSubmissionForm
        setFormData={setFormData}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {!isSubmitted ? <></> : <DisplayCodeSubmission />}
    </>
  );
}

export default App;

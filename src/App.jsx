import "./App.css";
import React, { useEffect, useState } from "react";
import CodeSubmissionForm from "./components/CodeSubmissionForm";
import DisplayCodeSubmission from "./components/DisplayCodeSubmission";
import usrApi from "./api/usrApi";

function App() {
  // const langs = {
  //   1: "C++",
  //   2: "Java",
  //   3: "Javascript",
  //   4: "Python",
  // };
  const [username, setUsername] = useState("")
  const [language, setLanguage] = useState('');
  const [stdin, setStdin] = useState('');
  const [sourceCode, setSourceCode] = useState("");

  const [backendData, setBackendData] = useState({
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "language":
        setLanguage(value);
        break;
      case "sourceCode":
        setSourceCode(value);
        break;

      case "stdin":
        setStdin(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const data = {
      "username": username,
      "language": language,
      "stdin": stdin,
      "sourceCode": sourceCode
    }
    console.log(data);
    // Here you can handle form submission, e.g., send data to backend
    // console.log(formData);
    try {
      const result = await usrApi.post("/submission/add", data);
      const resData = result.data
      setBackendData({
        // ...backendData, 
        resData
      })

    } catch (err) {
      console.error(`Error: ${err.message}`);
      alert(`Error: ${err.message}`);
    }
    // console.log(backendData);
  };

  const handleSet = d => {
    setBackendData({
      // ...backendData, 
      d
    })
    console.log(backendData);
  }

  return (
    <>
      <CodeSubmissionForm
        username={username}
        language={language}
        stdin={stdin}
        sourceCode={sourceCode}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {/* {console.log(username)} */}
      {!isSubmitted ? <></> : <DisplayCodeSubmission data={backendData.resData} />}
    </>
  );
}

export default App;

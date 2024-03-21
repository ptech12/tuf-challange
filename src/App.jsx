import "./App.css";
import React, { useState, useRef } from "react";
import CodeSubmissionForm from "./components/CodeSubmissionForm";
import DisplayCodeSubmission from "./components/DisplayCodeSubmission";
import usrApi from "./api/usrApi";
import { Outlet, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  // const langs = {
  //   1: "C++",
  //   2: "Java",
  //   3: "Javascript",
  //   4: "Python",
  // };
  const [username, setUsername] = useState("");
  const [language, setLanguage] = useState("");
  const [stdin, setStdin] = useState("");
  const [sourceCode, setSourceCode] = useState("");

  const [backendData, setBackendData] = useState({});

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

  // ref
  const ref = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const data = {
      username: username,
      language: language,
      stdin: stdin,
      sourceCode: sourceCode,
    };
    console.log(data);
    // Here you can handle form submission, e.g., send data to backend
    // console.log(formData);
    const insertData = async () => {
      try {
        const result = await usrApi.post("/submission/add", data);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        alert(`Error: ${err.message}`);
      }
    };
    insertData();
    navigate("/submissions");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <CodeSubmissionForm
              username={username}
              language={language}
              stdin={stdin}
              sourceCode={sourceCode}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="/submissions" element={<DisplayCodeSubmission />} />
      </Routes>

      {/* {!isSubmitted ? (
        <CodeSubmissionForm
          username={username}
          language={language}
          stdin={stdin}
          sourceCode={sourceCode}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        // <DisplayCodeSubmission  />
        <Outlet />
      )}
    {/* <DisplayCodeSubmission  /> */}
      {/* {console.log(username)}
      
      {/* /> : <DisplayCodeSubmission ref={ref} data={backendData.resData} />} */}
      {/* <DisplayCodeSubmission ref={ref} />  */}
    </>
  );
}

export default App;

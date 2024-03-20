import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import CodeSubmissionForm from "./components/CodeSubmissionForm";
import DisplayCodeSubmission from "./components/DisplayCodeSubmission";
import usrApi from "./api/usrApi";
import { json } from "react-router-dom";

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
        // const insertData = async () => {
        //   fetch("https://tuf-backend-venc.onrender.com/submission", {
        //     method: "POST",
        //     body: JSON.stringify(
        //       data
        //     ),
        //     headers: {
        //       "Content-type": "application/json; charset=UTF-8"
        //     }
        //   })
        //   .then(respone => respone.json())
        //   .then((respData) => console.log(respData))

        const result = await usrApi.post("/submission/add", data);
        // console.log(result.data[0]);
        setBackendData(result.data[0])

        // const resData = result.data
        // setBackendData({
        //   // ...backendData,
        //   resData
        // })
      } catch (err) {
        console.error(`Error: ${err.message}`);
        alert(`Error: ${err.message}`);
      }
    };

    insertData();

    ref.current?.scrollIntoView({ behavior: smooth });
  };

  return (
    <>
      {/* {console.log(username)} */}
      {!isSubmitted ? (
        <CodeSubmissionForm
          username={username}
          language={language}
          stdin={stdin}
          sourceCode={sourceCode}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <> <p>{[backendData]}</p> </>
      )}
      {/* /> : <DisplayCodeSubmission ref={ref} data={backendData.resData} />} */}
    </>
  );
}

export default App;

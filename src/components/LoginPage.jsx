import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useRef, useState } from "react";
function FormPage() {
  const [credentialsVal, setCredentialsVal] = useState({
    username: null,
    password: null,
  });
  const userNameVal = useRef(0);
  const passwordVal = useRef(0);
  const formHandler = (e) => {
    console.log("userNameVal.current", userNameVal.current.value, "paass", passwordVal.current.value);
    e.preventDefault();
    setCredentialsVal({
      username: userNameVal.current,
      password: passwordVal.current,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
    console.log("userNameVal.current", userNameVal.current.value, "paass", passwordVal.current.value);
        
        const response = await fetch("https://api-learningumbrella.equitysofttechnologies.com/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userNameVal.current.value,
            password: passwordVal.current.value,
          }),
        });

        if (!response.ok) {
          // Handle unsuccessful login (e.g., show an error message)
          console.error("Login failed");
          return;
        }

        // Handle successful login (e.g., store authentication token)
        const data = await response.json();
        console.log("Login successful", data);

        // Perform further actions like redirecting to another page
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
  // useEffect(() => {
  //   console.log("credentialsVal", credentialsVal);
  //   handleLogin(credentialsVal.username, credentialsVal.password);
  // }, []);
  return (
    <Row className="justify-content-center align-items-center">
      <Col lg={4}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="Text" placeholder="Enter Username" ref={userNameVal} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={passwordVal} />
          </Form.Group>
          <Button variant="primary" onClick={(e) => handleLogin(e)}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default FormPage;

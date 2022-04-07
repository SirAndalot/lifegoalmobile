import React, { useEffect, useState } from "react";
import { Form, InputGroup, Button, Alert } from "react-bootstrap";
import UserDataService from "../Services/user.services";

function AddUsers({ id, setUserID, isadd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cardio, setCardio] = useState("");
  const [weights, setWeights] = useState("");
  const [boxing, setBoxing] = useState("");
  const [fee, setFee] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
      name === "" ||
      age === "" ||
      sex === "" ||
      height === "" ||
      weight === "" ||
      phone === "" ||
      email === "" ||
      cardio === "" ||
      weight === "" ||
      boxing === "" ||
      fee === ""
    ) {
      setMessage({ error: true, msg: "All fields are mandatory!" });
    }
    const newUser = {
      Name: name,
      Age: age,
      Sex: sex,
      Height: height,
      Weight: weight,
      Phone: phone,
      Email: email,
      Cardio: cardio,
      Weights: weights,
      Boxing: boxing,
      Fee: fee,
    };
    console.log(newUser, name);

    try {
      if (isadd) {
        await UserDataService.addUser(newUser);
        setMessage({ error: false, msg: "New User added successfully" });
      } else {
        console.log("2");
        await UserDataService.updateUser(id, newUser);
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  const getdata = async () => {
    let data = await UserDataService.getUser(id);
    let finaldata = data.data();
    console.log(finaldata);
    setName(finaldata.Name);
    setAge(finaldata.Age);
    setSex(finaldata.Sex);
    setHeight(finaldata.Height);
    setWeight(finaldata.Weight);
    setPhone(finaldata.Phone);
    setEmail(finaldata.Email);
    setCardio(finaldata.Cardio);
    setWeights(finaldata.Weights);
    setBoxing(finaldata.Boxing);
    setFee(finaldata.Fee);
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (!isadd) {
      getdata();
      // editHandler();
    }
  }, [id]);

  return (
    <>
      <div className="p-4 box">
        {" "}
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
        <Form>
          <Form.Group className="mb-3" controlId="formUserName">
            <InputGroup>
              <InputGroup.Text id="formUserName">Name</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserAge">
            <InputGroup>
              <InputGroup.Text id="formUserAge">Age</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserSex">
            <InputGroup>
              <InputGroup.Text id="formUserSex">Sex</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserHeight">
            <InputGroup>
              <InputGroup.Text id="formUserHeight">Height</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserWeight">
            <InputGroup>
              <InputGroup.Text id="formUserWeight">Weight</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserPhone">
            <InputGroup>
              <InputGroup.Text id="formUserPhone">Phone</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserEmail">
            <InputGroup>
              <InputGroup.Text id="formUserEmail">Email</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserCardio">
            <InputGroup>
              <InputGroup.Text id="formUserCardio">Cardio</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Cardio"
                value={cardio}
                onChange={(e) => setCardio(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserWeights">
            <InputGroup>
              <InputGroup.Text id="formUserWeights">Weights</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Weights"
                value={weights}
                onChange={(e) => setWeights(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserBoxing">
            <InputGroup>
              <InputGroup.Text id="formUserBoxing">Boxing</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Boxing"
                value={boxing}
                onChange={(e) => setBoxing(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserFee">
            <InputGroup>
              <InputGroup.Text id="formUserFee">Fee</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Fee"
                value={fee}
                onChange={(e) => setFee(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
        </Form>
        <div className="d-grid gap-2">
          <Button variant="primary" onClick={handleSubmit}>
            {isadd ? "Add" : "Edit"}
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddUsers;

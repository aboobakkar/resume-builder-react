import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Edit = props => {

  const [Edit, setEdit] = useState(true);
  const [error, setError] = useState(null);

  const { FirstName, LastName, Email, Phone, Address } = useSelector(state => state.resume)
  
  const Dispatch = useDispatch();

  const SaveFunction = data => {
    Dispatch({ type: "Basic", payload: data });
  };

  const validateOnchange = ({
    first,
    last,
    email,
    phone,
    Address,
    Country
  }) => {
    let phonevalid = /^\d{10}$/;

    if (first === undefined || first === "") {
      setError("invalid firstname");
      return false;
    }
    if (last === undefined || last === "") {
      setError("invalid lastname");
      return false;
    }
    if (phone === undefined || phone === "" || !phonevalid.test(phone)) {
      setError("Phone Not Valid Need to 10 Digits");
      return false;
    }
    if (Address === undefined || Address === "") {
      setError("invalid City");
      return false;
    }
    if (Country === undefined || Country === "") {
      setError("invalid Country");
      return false;
    }
    setError("");
    return true;
  };

  const onNextFunction = () => {
    if (Edit === true) {
      props.history.push("/education");
    } else {
      setError("Save the Changes");
    }
  };

  const EditClick = e => {
    const data = {
      first: e.target.elements.first.value,
      last: e.target.elements.last.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      Address: e.target.elements.address.value,
      Country: e.target.elements.country.value,
    };
    if (!Edit) {
      console.log("data", data);
      let saveable = validateOnchange(data);
      if (saveable) {
        SaveFunction(data);
        setEdit(true);
      } else {
        setEdit(false);
      }
    } else {
      setEdit(false);
    }
  };

  return (
    <div className="main">
      <Card>
        <Form
          className="dash-card"
          onSubmit={e => {
            e.preventDefault();
            EditClick(e);
          }}
        >
          <Form.Group>
            <div className="form-header">
              <h4>Personal Details</h4>
              <h6 className="error">{error}</h6>
              <Button className="btn  btn-success btn-sm" type="submit">
                {" "}
                {Edit ? "Edit" : "Save"}
              </Button>
            </div>
            <Form.Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="first"
                  disabled={Edit}
                  type="text"
                  defaultValue={FirstName}
                />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="last"
                  disabled={Edit}
                  type="text"
                  defaultValue={LastName}
                />
              </Col>
              </Form.Row>
              <Form.Row>
              <Col>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="email"
                  disabled={Edit}
                  type="email"
                  defaultValue={Email}
                />
              </Col>
              <Col>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  name="phone"
                  disabled={Edit}
                  type="tel"
                  defaultValue={Phone}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <h4 style={{ padding: "10px" }}>Address</h4>
            <Form.Row>
              <Col>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  disabled={Edit}
                  name="address"
                  type="text"
                  defaultValue={Address.Address}
                />
              </Col>
              <Col>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  disabled={Edit}
                  name="country"
                  type="text"
                  defaultValue={Address.Country}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <div className="link">
            <Link
              style={{ margin: "10px" }}
              to="/view"
              className="btn btn-primary"
            >
              Previous
            </Link>
            <h6 style={{ color: "red" }}>{error}</h6>
            <Button
              style={{ margin: "10px" }}
              onClick={() => onNextFunction()}
              className="btn btn-primary"
            >
              Next
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Edit;

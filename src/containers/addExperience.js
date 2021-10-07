import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AddElement } from "../components/experience";


const AddExperience = props => {

  const Dispatch = useDispatch();
  const list = [];
  const [add, setAdd] = useState({ list });
  const { Experience } = useSelector(state => state.resume);

  const RemoveExisting = data => {
    let educlist = Experience;
    let filterlist = educlist.filter(item => {
      return item.Id !== data.Id;
    });

    Dispatch({ type: "RemoveExperience", payload: filterlist });
  };

  const AddChange = () => {
    const ar = add.list;
    ar.push({ Id: "", Degree: "", Institution: "", Percentage: "", Location: "" });
    setAdd({ list: ar });
  };

  const RemoveElement = () => {
    const ar = add.list;
    ar.pop();
    setAdd({ list: ar });
  };

  const SaveElement = data => {
    let Final = Experience;
    let list = Final.concat([data]);
    Dispatch({ type: "AddExperience", payload: list });
    RemoveElement();
  };

  const onNextFunction = () => {
    props.history.push("/skill");
  };

  const SaveExist = data => {
    let Final = Experience;
    let found = Final.find(element => {
      return element.Id === data.Id;
    });

    let index = Final.indexOf(found);
    if (index !== -1) {
      Final[index] = data;
    }
  };

  return (
    <div className="main">
      <Card>
        <Form className="dash-card">
          <Form.Group>
            <div className="form-header">
              <h4>Experience</h4>
              <Button
                className="btn  btn-success btn-md"
                onClick={() => {
                  AddChange();
                }}
              >
                Add
              </Button>
            </div>
            {add.list.map(item => (
              <AddElement
                data={item}
                key={item.Id}
                RemoveElement={RemoveElement}
                SaveElement={SaveElement}
                disable={false}
                count={Experience.length + 1}
              />
            ))}
            {Experience.map(item => (
              <AddElement
                data={item}
                key={item.Id}
                RemoveElement={RemoveExisting}
                SaveElement={SaveExist}
                disable={true}
                count={item.Id}
              />
            ))}
          </Form.Group>
        </Form>
        <div className="link">
          <Link
            style={{ margin: "10px" }}
            to="/education"
            type="submit"
            className="btn btn-primary btn-md"
          >
            Previous
          </Link>
          <Button
            className="btn btn-primary btn-md"
            style={{ margin: "10px" }}
            onClick={() => onNextFunction()}
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AddExperience;

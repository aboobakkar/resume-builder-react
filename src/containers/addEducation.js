import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AddElement } from "../components/education";

const View = props => {

  const Education = useSelector(state => state.reducer.Education);
  const Dispatch = useDispatch();
  const list = [];
  const [add, setAdd] = useState({ list });

  const Removeexisting = data => {

    let education_list = Education;
    let filterlist = education_list.filter(item => {
      return item.Id !== data.Id;
    });

    Dispatch({ type: "RemoveEducation", payload: filterlist });
  };

  const AddChange = () => {
    const arr = add.list;
    arr.push({ Id: "", Degree: "", Institution: "", Grade: "", Summary: "" });
    setAdd({ list: arr });
  };

  const RemoveElement = () => {
    const ar = add.list;
    ar.pop();
    setAdd({ list: ar });
  };

  const SaveElement = data => {
    let Final = Education;
    let list = Final.concat([data]);
    Dispatch({ type: "AddEducation", payload: list });
    RemoveElement();
  };

  const onNextFunction = () => {
    props.history.push("/experience");
  };

  const SaveExist = data => {
    let Final = Education;
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
      <Card style={{ paddingRight: "10px", paddingLeft: "10px" }}>
        <Form style={{ padding: "5px" }}>
          <Form.Group>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Education</h4>
              <Button
                className="btn btn-success btn-sm"
                onClick={() => {
                  AddChange();
                }}
              >
                Add
              </Button>
            </div>
            {add.list.map(item => (
              <AddElement
                key={item.Id}
                data={item}
                RemoveElement={RemoveElement}
                count={Education.length + 1}
                SaveElement={SaveElement}
                disable={false}
              />
            ))}
            {Education.map(item => {

              return (
                <AddElement
                  key={item.Id}
                  data={item}
                  RemoveElement={Removeexisting}
                  count={item.Id}
                  SaveElement={SaveExist}
                  disable={true}
                />
              );
            })}
          </Form.Group>
        </Form>

        <div className="link">
          <Link
            style={{ margin: "10px" }}
            to="/add"
            className="btn btn-primary btn-sm"
          >
            Previous
          </Link>
          <Button
            style={{ margin: "10px" }}
            className="btn btn-primary btn-sm"
            onClick={() => onNextFunction()}
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default View;

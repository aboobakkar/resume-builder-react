import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AddElement } from "../components/experience";
const View = props => {
  //Expereince edit page
  const Dispatch = useDispatch();
  const list = [];
  const [add, setAdd] = useState({ list });
  const Experince = useSelector(state => state.reducer.Experince);

  const Removeexisting = data => {
    let educlist = Experince;
    let filterlist = educlist.filter(item => {
      console.log("id", item.Id);
      return item.Id !== data.Id;
    });
    console.log("list", filterlist);
    Dispatch({ type: "RemoveExperience", payload: filterlist });
  };

  const AddChange = () => {
    const ar = add.list;
    ar.push({ Id: "", Degree: "", Institution: "", Grade: "", Summary: "" });
    setAdd({ list: ar });
    console.log("add", add);
  };

  const RemoveElement = () => {
    const ar = add.list;
    ar.pop();
    setAdd({ list: ar });
  };

  const SaveElement = data => {
    console.log("savedata", data);
    let Final = Experince;
    let list = Final.concat([data]);
    console.log("Finallist", list);
    Dispatch({ type: "AddExperience", payload: list });
    RemoveElement();
  };

  const onNextFunction = () => {
    props.history.push("/skill");
  };

  const SaveExist = data => {
    console.log("saveExist", data);
    let Final = Experince;
    console.log("final", Final);
    let found = Final.find(element => {
      return element.Id === data.Id;
    });
    console.log("found", found);
    var index = Final.indexOf(found);
    console.log("found", index);
    if (index !== -1) {
      Final[index] = data;
    }

    // let list = Final.concat([data])
    console.log("Finallist", Final);
    // Dispatch({ type: "AddEducation", payload: list })
  };

  return (
    <div className="main">
      <Card>
        <Form style={{ padding: "10px" }}>
          <Form.Group>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Expereince</h4>
              <Button
                className="btn  btn-success btn-sm"
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
                count={Experince.length + 1}
              />
            ))}
            {Experince.map(item => (
              <AddElement
                data={item}
                key={item.Id}
                RemoveElement={Removeexisting}
                SaveElement={SaveExist}
                disable={true}
                count={item.Id}
              />
            ))}
          </Form.Group>
        </Form>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "Space-between"
          }}
        >
          <Link
            style={{ margin: "10px" }}
            to="/education"
            type="submit"
            className="btn btn-primary btn-sm"
          >
            Previous
          </Link>
          <Button
            className="btn btn-primary btn-sm"
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

export default View;

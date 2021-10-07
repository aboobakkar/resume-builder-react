import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Skills } from "../components/skills";

const AddSkill = props => {

  const Skill = useSelector(state => state.resume.Skill);
  const Dispatch = useDispatch();

  const skillsuggestion = [
    { id: "React", text: "React" },
    { id: "Javascript", text: "Javascript" },
    { id: "PHP", text: "PHP" },
    { id: "Python", text: "Python" },
    { id: "Java", text: "Java" }
  ];
  const SaveSkilltag = data => {
    Dispatch({ type: "Addskill", payload: data });
  };
  const RemoveSkilltag = data => {
    Dispatch({ type: "Removeskill", payload: data });
  };

  return (
    <div className="main">
      <Card>
        <div className="dash-card">
          <h4>Skills</h4>
          <Skills
            data={Skill}
            suggestions={skillsuggestion}
            removeelement={RemoveSkilltag}
            addelement={SaveSkilltag}
          />
        </div>
        <div className="link">
        <Link
          style={{ margin: "10px" }}
          to="/experience"
          type="submit"
          className="btn btn-primary"
        >
          Previous
        </Link>
        <Link
          style={{ margin: "10px" }}
          to="/view"
          type="submit"
          className="btn btn-primary"
        >
          Finish
        </Link>
      </div>
      </Card>
    </div>
  );
};

export default AddSkill;

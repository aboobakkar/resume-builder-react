import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {

  return (
    <div className="dash-container">
      <Card className="dash-card">
        <h1>Resume Builder with React Js - Aboobakkar P S</h1>
        <Link to="/add" className="dash-link btn btn-primary">
          Create Resume
        </Link>
        <Link to="/view" className="dash-link btn btn-primary">
          View Resume
        </Link>
      </Card>
    </div>
  );
};

export default Dashboard;

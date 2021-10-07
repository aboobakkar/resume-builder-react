import React from "react"
import { Card, Badge } from "react-bootstrap"
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const ViewResume = () => {
    
const { FirstName, LastName, Email, Phone, Address, Education, Experience, Skill } = useSelector(state => state.resume)
    return (
        <Card className="dash-card">
            <h1>Sample Resume -  Aboobakkar P S</h1>
            <Link to="/add" className="dash-link btn btn-primary">
                Create Resume use this Template
            </Link>
            <div className="link">
                <Card style={{flex:"3",margin:"5px"}}>
                    <Card.Body>
                        <Card.Title>{FirstName} {LastName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Phone : {Phone}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{Email}</Card.Subtitle>  
                    </Card.Body>
                </Card>
                <Card style={{flex:"1",margin:"5px"}}>
                <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            {Address.Address}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">
                            {Address.Country}
                        </Card.Subtitle>
                    </Card.Body>
            </Card>
            </div>
            <div style={{ display: "flex", direction: "row",justifyContent:"space-around" }}>
                <Card  style={{flex:"3",margin:"5px"}}>
                    <Card.Body>
                        <Card.Title>Education / Qualification</Card.Title>
                       { Education && Education.map((item,key)=>(
                        <div className="border-line" key={key}>
                            <p className="font-weight-bold">Degree: {item.Degree}</p>
                            <p>Institution: {item.Institution}</p>
                            <p>Percentage: {item.Percentage} </p>
                            <p>Location: {item.Location} </p>
                        </div>
                       ))}

                    </Card.Body>
                </Card>
                <Card style={{flex:"1", margin:"5px"}}>
                <Card.Body>
                <Card.Title>Skills</Card.Title>
                {Skill && Skill.map((item,key)=>(
                    <Card.Subtitle key={key} className="mb-2 text-muted">
                        <Badge pill bg="info">
                            {item.text}
                        </Badge>
                    </Card.Subtitle>
                ))}
                
                    </Card.Body>
            </Card>
            </div>
            <div style={{ display: "flex", direction: "row",justifyContent:"center" }}>
                <Card style={{flex:"3", margin:"5px"}}>
                    <Card.Body>
                        <Card.Title>Experience</Card.Title>
                        {Experience && Experience.map((item,key)=>(
                            <div className="border-line" key={key}>
                                <h6 className="font-weight-bold">Company: {item.Company}</h6>
                                <h6>Role:{item.Role}</h6>
                                <h6>Technolgies Used: {item.TechnologiesUsed}</h6>
                                <p>Summary : {item.Summary}</p>
                            </div>
                        ))}
                    </Card.Body>
                </Card>
            </div>
            </Card>
    )
}

export default ViewResume
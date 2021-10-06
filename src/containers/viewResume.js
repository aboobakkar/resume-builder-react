import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const View = () => {
    const firstName = useSelector(state => state.reducer.FirstName)
    const lastName = useSelector(state => state.reducer.LastName)
    const Email = useSelector(state => state.reducer.email)
    const Phone =useSelector(state=>state.reducer.Phone)
    const Address = useSelector(state => state.reducer.Address)
    const Education = useSelector(state => state.reducer.Education)
    const Experince = useSelector(state => state.reducer.Experince)
    const Skill = useSelector(state => state.reducer.Skill)

    return (
        <Card className="dash-card">
            <h1>Resume Builder with React Js - Aboobakkar P S</h1>
            <Link to="/add" className="dash-link btn btn-primary">
                Create Resume
            </Link>
            <div style={{ display: "flex", direction: "row",justifyContent:"space-around" }}>
                <Card style={{flex:"3",margin:"5px"}}>
                    <Card.Body>
                        <Card.Title>{firstName} {lastName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted  font-italic">Phone : {Phone}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted font-italic">{Email}</Card.Subtitle>  
                    </Card.Body>
                </Card>
                <Card style={{flex:"1",margin:"5px"}}>
                <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted font-italic">
                            {Address.City}
                            </Card.Subtitle>     
                            <Card.Subtitle className="mb-2 text-muted font-italic">
                           {Address.District}
                            </Card.Subtitle>  
                            <Card.Subtitle className="mb-2 text-muted font-italic">
                            {Address.State}
                            </Card.Subtitle>  
                            <Card.Subtitle className="mb-2 text-muted font-italic">
                            {Address.Country}
                            </Card.Subtitle> 
                            <Card.Subtitle className="mb-2 text-muted font-italic">
                            {Address.Pincode}
                            </Card.Subtitle>   
                    </Card.Body>
            </Card>
            </div>
            <div style={{ display: "flex", direction: "row",justifyContent:"space-around" }}>
                <Card  style={{flex:"3",margin:"5px"}}>
                    <Card.Body>
                        <Card.Title>Education / Qualification</Card.Title>
                       { Education && Education.map((item,key)=>(
                        <div key={key}>
                        <p className="font-weight-bold">Degree: {item.Degree}</p>
                        <p className="font-italic">Institution: {item.Institution}</p>
                        <p className="font-italic">Cgpa: {item.Grade} </p>
                        <p className="font-italic">{item.Summary} </p>
                    </div>
                       ))}

                    </Card.Body>
                </Card>
                <Card style={{flex:"1", margin:"5px"}}>
                <Card.Body>
                <Card.Title>Skills</Card.Title>
                {Skill && Skill.map((item,key)=>(
                    <Card.Subtitle key={key} className="mb-2 text-muted">
                        {item.text}
                    </Card.Subtitle>
                ))}
                
                    </Card.Body>
            </Card>
            </div>
            <div style={{ display: "flex", direction: "row",justifyContent:"center" }}>
                <Card style={{flex:"3", margin:"5px"}}>
                    <Card.Body>
                        <Card.Title>Experince</Card.Title>
                        {Experince && Experince.map((item,key)=>(
                            <div key={key}>
                          <h6>Company: {item.Institution}</h6>
                          <h6 className="font-italic">Post:{item.Post}</h6>
                          <h6 className="font-italic">Technolgies Used: {item.TechnologiesUsed}
                          </h6>
                          <p className="font-italic">{item.Summary}</p>
                          </div>
                        ))}
                    </Card.Body>
                </Card>
            </div>
            </Card>
    )
}

export default View
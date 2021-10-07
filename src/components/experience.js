import React, { useState } from 'react'
import { Button, Form, Col} from "react-bootstrap"


export const AddElement=({data,RemoveElement,SaveElement,disable,count})=>{

    console.log("data",data)

    const [Company,setCompany]=useState(data.Company)
    const [Role,setRole]=useState(data.Role)
    const [Summary,setSummary]=useState(data.Summary)
    const [TechnologiesUsed,setTechnologiesUsed]=useState(data.TechnologiesUsed)
    const [Edit, setEdit] = useState(disable)
    const [error, setError] = useState("")

    const Valid = () => {
        if (Role === undefined || Role === "") {
            setError("Role undefined")
            return false
        }
        else if (Company === undefined || Company === "") {
            setError("Company undefined")
            return false
        }
        else if (TechnologiesUsed === undefined || TechnologiesUsed === "") {
            setError("Technologies used undefined")
            return false
        }
        else if (Summary === undefined || Summary === "") {
            setError("Summary undefined")
            return false
        }
        else {
            setError("")
            return true
        }
    }

    const ButtonClick = () => {
        if (!Edit) {
            setError("")
            let valid = Valid()
            if (valid) {
                SaveElement({ Company, Role, Summary, TechnologiesUsed, Id: count })
                setEdit(true)
            }

        }
        else {
            setError("Save changes before proceeding")
            setEdit(false)
        }
    }

    return(
        <div style={{ marginTop: "30px" }}>
            <Form.Row>
                <Col>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control 
                    className="form-control form-control-sm" 
                    disabled={Edit} 
                    defaultValue={Company} 
                    onChange={(e)=>setCompany(e.target.value)} 
                    />
                </Col>
                <Col>
                    <Form.Label>Role</Form.Label>
                    <Form.Control 
                    className="form-control form-control-sm" 
                    disabled={Edit} type="text" 
                    defaultValue={Role} 
                    onChange={(e)=>setRole(e.target.value)} 
                    />
                </Col>
                <Col>
                    <Form.Label>Technologies Used</Form.Label>
                    <Form.Control 
                    className="form-control form-control-sm" 
                    disabled={Edit} 
                    type="text" 
                    defaultValue={TechnologiesUsed} 
                    onChange={(e)=>setTechnologiesUsed(e.target.value)} 
                    />
                </Col>
            </Form.Row>
            <Form.Row>
                <Form.Label >Summary</Form.Label>
                <Form.Control 
                className="form-control form-control-sm" 
                disabled={Edit} 
                as="textarea" 
                type="text" 
                defaultValue={Summary} 
                onChange={(e)=>setSummary(e.target.value)} 
                />
            </Form.Row>
            <Form.Row style={{  display: "flex", flexDirection: "row", justifyContent: "Space-between",paddingTop:"10px" }}>
                <Button 
                    className="btn  btn-danger btn-md" 
                    onClick={() => { RemoveElement(data) }}
                >
                    Remove
                </Button>
                <h6 style={{ "color": "red" }}>{error}</h6>
                <Button 
                    className={Edit ? "btn btn-secondary btn-md" : "btn btn-warning btn-md"}  
                    onClick={(e) => { ButtonClick(e.target.value) }}
                >
                    {Edit ? "Edit" : "Save"}
                </Button>
            </Form.Row>
        </div>
    )
}
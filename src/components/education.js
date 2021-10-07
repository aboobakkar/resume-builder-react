import React, { useState } from 'react'
import { Button, Form, Col } from "react-bootstrap"


export const AddElement=({data,RemoveElement,count,SaveElement,disable})=>{

    const [Degree,setDegree]=useState(data.Degree)
    const [Institution,setInsti]=useState(data.Institution)
    const [Percentage,setPercentage]=useState(data.Percentage)
    const [Location,setLocation]=useState(data.Location)
    const [Edit,setEdit]=useState(disable)
    const [error,setError]=useState("")

    const Valid=()=>{
        if (Degree === undefined || Degree === "") {
            setError("Degree undefined")
            return false
        }
        else if (Institution === undefined || Institution === "") {
            setError("Institution undefined")
            return false
        }
        else if (Percentage === undefined || Percentage === "") {
            setError("Percentage undefined")
            return false
        }
        else if (Location === undefined || Location === "") {
            setError("Location undefined")
            return false
        }
        else{
            setError("")
            return true
        }
    }

    const ButtonClick = () => 
    {
        if (!Edit) {
            setError("")
            let valid=Valid()
            if(valid){
            SaveElement({Degree,Institution,Percentage,Location,Id:count})
            setEdit(true)
            }

        }
        else {
            setError("Save changes before proceeding")
            setEdit(false)
        }
    }


    return(
        <React.Fragment>
            <Form.Row>
                <Col>
                    <Form.Label >Degree</Form.Label>
                    <Form.Control 
                        disabled={Edit} 
                        defaultValue={Degree} 
                        onChange={(e)=>setDegree(e.target.value)} 
                    />
                </Col>
                <Col>
                    <Form.Label >Institution</Form.Label>
                    <Form.Control 
                        disabled={Edit} 
                        type="text" 
                        defaultValue={Institution} 
                        onChange={(e)=>setInsti(e.target.value)} 
                    />
                </Col>
                </Form.Row>

                <Form.Row>
                <Col>
                    <Form.Label >Percentage</Form.Label>
                    <Form.Control 
                        disabled={Edit}
                        defaultValue={Percentage} 
                        onChange={(e)=>setPercentage(e.target.value)} 
                     />
                </Col>
                <Col>
                    <Form.Label>Location</Form.Label>
                    <Form.Control 
                        disabled={Edit} 
                        defaultValue={Location} 
                        onChange={(e)=>setLocation(e.target.value)} 
                    />
                </Col>
                </Form.Row>

                <Form.Row className="form-header">
                    <Button className="btn  btn-danger btn-md"  onClick={() => { RemoveElement(data) }}>Remove</Button>
                    <h6 className="error">{error}</h6>
                    <Button 
                        className={Edit ? "btn btn-secondary btn-md" : "btn btn-warning btn-md"}  
                        onClick={(e) => {ButtonClick(e.target.value)}}
                    >
                    {Edit?"Edit":"Save"}
                </Button>
            </Form.Row>
        </React.Fragment>
    )
}
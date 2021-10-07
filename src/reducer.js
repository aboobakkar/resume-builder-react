
const IntialState = {
    Email: "aboobakkar.mec@gmail.com",
    FirstName: "Aboobakkar",
    LastName: "P S",
    Phone: 9747752015,
    Address: { Address: "Pallikkara", Country: "India"},
    Education: [{
        Id: "1",
        Degree: "B Tech",
        Institution: "Govt.Model Engineering College",
        Percentage : "55",
        Location: "Kochi"
    }],
    Experience: [{
        Id: 1,
        Company: "Beo Software Pvt Ltd",
        Role: "React Developer",
        TechnologiesUsed: ["React", "JavaScript"],
        Summary:"Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum"
    }],
    Skill: [{ id: "1", text: "React" }, { id: "2", text: "Javascript" }]
}
const resumes = (state = IntialState, action) => {
    switch (action.type) {
        case "AddEducation": {
            return { ...state, Education: action.payload }
        }
        case "RemoveEducation": {
            return { ...state, Education: action.payload }
        }
        case "AddExperience": {
            return { ...state, Experience: action.payload }
        }
        case "RemoveExperience": {
            return { ...state, Experience: action.payload }
        }
        case "Basic": {
            return {
                ...state,
                Email: action.payload.email,
                FirstName: action.payload.first,
                LastName: action.payload.last,
                Phone: action.payload.phone,
                Address: { City: action.payload.City, District: action.payload.District, State: action.payload.State, Country: action.payload.Country, Pincode: action.payload.Pin },
            }
        }
        case "Addskill": {
            return { ...state, Skill: action.payload }
        }
        case "Removeskill": {
            return { ...state, Skill: action.payload }
        }
        default:
            return state
    }
}

export default resumes
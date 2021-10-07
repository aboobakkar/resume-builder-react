
const IntialState = {
    email: "aboobakkar.mec@gmail.com",
    FirstName: "Aboobakkarr",
    LastName: "P S",
    Phone: 9747752015,
    Address: { City: "Pallikkara", District: "Ernakulam", State: "kerala", Country: "India", Pincode: "683565" },
    Education: [{
        Id: "1",
        Degree: "Btech",
        Institution: "Model Engineering College",
        Percentage : "55"
    }],
    Experince: [{
        Id: 1,
        Institution: "Beo Software Pvt Ltd",
        Post: "React Developer",
        TechnologiesUsed: ["React", "JavaScript"]
    }],
    Skill: [{ id: "1", text: "React" }, { id: "2", text: "Javascript" }]
}
const reducer = (state = IntialState, action) => {
    switch (action.type) {
        case "AddEducation": {
            return { ...state, Education: action.payload }
        }
        case "RemoveEducation": {
            return { ...state, Education: action.payload }
        }
        case "AddExperience": {
            return { ...state, Experince: action.payload }
        }
        case "RemoveExperience": {
            return { ...state, Experince: action.payload }
        }
        case "Basic": {
            return {
                ...state,
                email: action.payload.email,
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

export default reducer
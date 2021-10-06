
const initialState = {
    resumes:[],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "auth":
            {
                console.log("auth reducer")
                return { ...state, Auth: true }
            }
        case "signout":
            {
                return { ...state, Auth: false }
            }

        case "AddEducation": {
            console.log("addEducation reducer", action.payload)
            return { ...state, Education: action.payload }
        }
        case "RemoveEducation": {
            console.log("removeEducation reducer", action.payload)
            return { ...state, Education: action.payload }
        }
        case "RemoveExper": {
            console.log("RemoveExperince reducer", action.payload)
            return { ...state, Experince: action.payload }
        }
        case "AddExperince": {
            console.log("AddExprenice Reducer", action.payload)
            return { ...state, Experince: action.payload }
        }
        case "Basic": {
            console.log("basic dispatch", action.payload)
            return {
                ...state,
                email: action.payload.email,
                FirstName: action.payload.first,
                LastName: action.payload.last,
                Phone: action.payload.phone,
                Linkedin: action.payload.Linkedin,
                Summary: action.payload.Summary,
                Address: { City: action.payload.City, District: action.payload.District, State: action.payload.State, Country: action.payload.Country, Pincode: action.payload.Pin },
            }
        }
        case "Addskill": {
            console.log("add skill reducer", action.payload)
            return { ...state, Skill: action.payload }
        }
        case "Addinterest": {
            console.log("interest", action.payload)
            return { ...state, Interest: action.payload }
        }
        case "Addreference": {
            return { ...state, Reference: action.payload }
        }
        case "Removeskill": {
            console.log("remove skill reducer",action.payload)
            return { ...state, Skill: action.payload }
        }
        case "Removeinterest": {
            return { ...state, Interest: action.payload }
        }
        case "Removereference": {
            return { ...state, Reference: action.payload }
        }
        default:
            console.log("Default")
            return state
    }
}

export default reducer
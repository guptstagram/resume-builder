const defaultState = {
    name: "",
    title: "",
    about: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    twitter: "",
    web: "",
    expertise: "",
    exp: [{ role: "", org: "", desc: "", from: "", to: "" }],
    cert: [{ name: "", org: "", date: "" }],
    skills: "",
    edu: [{ degree: "", institute: "", from: "", to: "" }],
}

export const resumeDetailsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "RESUME_DATA_SUBMIT":
            return {
                ...state,
                ...action.details,
            };
        default:
            return state;
    }
}
export const initialState = {
    questions: [{ questionText: "Question", questionType: "radio", options: [{ optionText: "Option 1" }], open: true, required: false }],
    questionType: "radio",
    doc_name: "Untitled form",
    doc_desc: "Add the description",
    doc_id: ""
}

export const actionTypes = {
    SET_QUESTIONs: "SET_QUESTIONS",
    CHANGE_TYPE: "CHANGE_TYPE",
    SET_DOC_NAME: "SET_DOC_NAME",
    SET_DOC_DESC: "SET_DOC_DESC",
    SET_DOC_ID: "SET_DOC_ID"

}

const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.SET_QUESTION:
            return {
                ...state, questions: action.questions,
            };
        case actionTypes.CHANGE_TYPE:
            return {
                ...state, questionType: action.questionType,
            };
        case actionTypes.SET_DOC_NAME:
            return {
                ...state, doc_name: action.doc_name,
            };

        case actionTypes.SET_DOC_DESC:
            return {
                ...state, doc_desc: action.doc_desc,
            };

        case actionTypes.SET_DOC_ID:
            return {
                ...state, doc_id: action.doc_id,
            };
        default:
            return state;
    }
}

export default reducer;
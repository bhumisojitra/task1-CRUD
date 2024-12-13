import axios from "axios"

export const addRec = (data) => {
    return {
        type: "addData",
        payload: data
    }
}

export const loding = () => {
    return {
        type : "loding"
    }
}
const error = (err) => {
    return {
        type : "error",
        payload : err
    }
}

const singleRec = (id) => {
    return {
        type : "singleRec",
        payload : id
    }
}

const deleteRec = (id) => {
    return{
        type : "deleteRec",
        payload : id
    }
}

export const serachName = (serach) =>{
    return{
        type: "serach",
        payload: serach
    }
}

// export const resetRec = (id) => {
//     return {
//         type: "resetRec",
//         payload: id,
//     };
// };

export const AddAsncy = (inputData) => {
    return (dispatch) => {
        axios.post("http://localhost:3002/users", inputData).then((rec) => {

            console.log("Rec : ", rec);
            
            dispatch(getRecAsncy())
        })
        .catch((err) => {
            console.log("err : ", err);
            dispatch(error(err))
        })
    }
}

export const getRecAsncy = () => {
    return (dispatch) => {
        axios.get("http://localhost:3002/users").then((rec) => {
            console.log("Rec : ", rec);
            dispatch(addRec(rec.data))
        })
        .catch((err) => {
            console.log("err : ", err);
            dispatch(error(err))
        })
    }
}

export const singleAsncy = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3002/users/${id}`).then((rec) => {
            console.log("Rec : ", rec);
            dispatch(singleRec(rec.data))
        })
        .catch((err) => {
            console.log("err : ", err);
            dispatch(error(err))
        })
    }
}

export const updateAsncy = (inputData) => {
    return (dispatch) => {
        axios.put(`http://localhost:3002/users/${inputData.id}`, inputData).then((rec) => {
            console.log("Rec : ", rec);
            dispatch(getRecAsncy())
        })
        .catch((err) => {
            console.log("err : ", err);
            dispatch(error(err))
        })
    }
}

export const deleteAsncy = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3002/users/${id}`).then((rec) => {
            console.log("Rec : ", rec);

            // dispatch(getRecAsncy());

            dispatch(deleteRec(id))
        })
        .catch((err) => {
            console.log("err : ", err);
            dispatch(error(err))
        })
    }
}
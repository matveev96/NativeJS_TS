import React from "react";

window.setTimeout(() => {}, 1000)

export const User = () => {

    const deleteUser = () => {
        alert("User deleted successfully.");
    }

    const saveUser = () => {
        alert("User saved successfully.");
    }

    return (
        <div>
            Dimych
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}
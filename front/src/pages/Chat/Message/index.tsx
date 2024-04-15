import React from "react";


import Word from "./Word";
import Edit from "./Edit";

const Message = () => {
    return (
        <div className="flex-1 border border-black-500">
            <Word />
            <Edit />
        </div>
    )
};

export default Message;

import React from "react";


import Contact from "./Contact";
import Message from "./Message";
const Chat = () => {
    return (
        <div >
            <div className="bg-white h-screen flex m-10 box-content">
                <Contact />
                <Message />
            </div>
        </div>
    )
};

export default Chat;

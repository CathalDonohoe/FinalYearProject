import React, { useState } from "react";

const EmailOut = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message, item, sendersEmail} = e.target.elements;
        let details = {
            name: localStorage.getItem('user'),
            email: localStorage.getItem("EmailOfSender"),
            message: message.value,
            sendersEmail: localStorage.getItem("email"),
            item: localStorage.getItem("ItemOfUser")
        };
        let response = await fetch("http://localhost:4949/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
        if(result.status === "Message Sent")
        {
            localStorage.setItem("EmailSent", true)
            window.location.reload(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="auth-inner">
                    <div className="centered">
                        <img width="50" src="https://i.ibb.co/qmLk76K/icons8-b-64.png" />
                    </div>
                    <h3>Send email</h3>
                    <br />
                    <div className="my-1 p-1 bg-light rounded box-shadow">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" required />
                    </div>
                    <button type="submit">{status}</button>
                </div>
            </form>
        </div>
    );
};
export default EmailOut;
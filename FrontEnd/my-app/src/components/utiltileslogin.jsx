export const CheckUser = async (details) => {
    let response = await fetch("http://localhost:8081/api/auth/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
    });
    return await response.json();
}

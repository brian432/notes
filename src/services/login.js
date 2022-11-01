export const loginFetch = async ({ username, password }) => {
    try {
        const response = await fetch('http://localhost:3001/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        const result = await response.json();
        return result
    } catch (err) {
        console.log("login failure", err)
    }
}
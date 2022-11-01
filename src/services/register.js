export const postRegisterFetch = async ({ username, name, password }) => {
    try {
        const response = await fetch('http://localhost:3001/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                name,
                password
            })
        })
        const result = await response.json()
        return result

    } catch (err) {
        console.log("Post register failure", err)
    }
}
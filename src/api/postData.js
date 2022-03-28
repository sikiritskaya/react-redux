const postDataApi = (title, body) => {
    return fetch(process.env.REACT_APP_API_URL,
    {
        method: 'POST',
        body: JSON.stringify(
            {
                "userId": 1,
                "title": title,
                "body": body    
            }
        ),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    })
}

export default postDataApi
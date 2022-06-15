const SERVER_URL= "https://abra-course-server.herokuapp.com/"

const apiCall = (url, payload, method) => {
    const response = await fetch(url,
        payload = undefined,
        method - "GET",
        accessToken = undefined
    ) => {
        const response = await 
    }
        {
            headers: {
                'Content-Type': 'application.json',
                'Autorization' : 'Bearer ' + accessToken
            }
        })
}
    const register = async (username, password, email, firstName, lastName) => 
    {
   

    const payload = {
        username: username,
        password: password,
        password2: password,
        email: email,
        first_name: firstName,
        last_name: lastName
};

    try{

        const response = await fetch(SERVER_URL + "register/", 
        {
            headres: {
            'Content-Type': 'application/json'
        },
        method: "POST", 
        body: JSON.stringify(payload)

    })

    const data = await response.json()
    
    if (response.status >= 200 && response.status < 300) {
        return data;
    }
    throw new Error (JSON.stringify(
        {
            data : data,
            status: response.status
        
        }));
    }

    export Login 
// api.js
export const fetchUsers = async () => {
    try {

        var requestOptions = {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow'
        };

        const response =
            fetch("https://interviewtesting.onrender.com/v1/users/employee/list", requestOptions)
                .then(response => response.json())
                .then(result => result.data)
                .catch(error => console.log('error', error));
        //console.log(response);

        return response;
    } catch (error) {
        throw error;
    }
};
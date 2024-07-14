class ApiResponse {
    constructor(res) {
        this.res = res;
    }

    success(message, status, statusCode, data = null) {
        const response = {
            status: status,
            message: message
        };

        if (data !== null) {
            response.data = data;
        }

        // console.log(statusCode);

        this.res.status(statusCode).json(response);
    }

    successWithToken(message, status, statusCode, token = null, cookies = []) {
        cookies.forEach(cookie => {
            const { name, value, options } = cookie;
            this.res.cookie(name, value, options);
        });

        this.res.status(statusCode).json({
            status: status,
            message: message,
            token: token
        });
    }

    error(error, statusCode = 500) {
        let errorMessage = 'An unknown error occurred';
        if (typeof error === 'string') {
            errorMessage = error;
        } else if (error instanceof Error) {
            errorMessage = error.message;
        } else if (error && error.message) {
            errorMessage = error.message;
        }

        this.res.status(statusCode).json({
            status: 'error',
            message: errorMessage
        });
    }
}

const apiResponse = (res) => {
    const APIResponse = new ApiResponse(res);

    return APIResponse;
};


export default apiResponse;

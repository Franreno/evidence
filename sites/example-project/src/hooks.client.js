/** @param {Error | unknown} e  */
const transformError = (e) => {
    
	if (!(e instanceof Error)) {
        console.log({e})
		return JSON.parse(JSON.stringify(e));
	} else {
		return {
			message: e.message,
			stack: e.stack,
			name: e.name,
			cause: e.cause ? transformError(e.cause) : undefined
		};
	}
};

/** @type {import("@sveltejs/kit").HandleClientError } */
export const handleError = (e) => transformError(e.error);

export const getCountries = async () => {
	try {
		var headers = new Headers();
		headers.append('X-CSCAPI-KEY', 'API_KEY');

		const response = await fetch('https://api.countrystatecity.in/v1/countries', {
			method: 'GET',
			headers: headers,
			redirect: 'follow'
		});

		const { data } = await response.json();

		console.log(data);

		return data;
	} catch (error) {
		console.error(`Error in getCountries function for /: ${error}`);
	}
};

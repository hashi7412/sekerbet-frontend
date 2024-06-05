// @ts-nocheck

export function convertDefaultDateFormat(d) {
	const formattedDate = d
		.toLocaleDateString('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		})
		.replace(/\//g, '/');

	return formattedDate;
}

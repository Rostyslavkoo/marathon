const releaseYears = [2020, 2019, 2018, 2017];

const SORTED = {
	POPULAR_DESCENDING: 'popularity-desc',
	POPULAR_ASCENDING: 'popularity-asc',
	DESCENDING_RANKING: 'vote_average-desc',
	RATING_ASCENDING: 'vote_average-asc',
    DEFAULT:'popularity-desc'
};

const sortedData = [
	{
		value: 'popularity-desc',
		label: 'Popular Descending',
	},
	{
		value: 'popularity-asc',
		label: 'Popular ascending',
	},
	{
		value: 'vote_average-desc',
		label: 'Descending ranking',
	},
	{
		value: 'vote_average-asc',
		label: 'Rating ascending',
	},
];
export function getSortedYears() {
	return releaseYears;
}

export function getSortedData() {
	return sortedData;
}

export function getSortedCONSTANS() {
	return SORTED;
}

function jsonToList(Words) {
	wordst = []
	for (var i in Words) {
		wordst.push(Words[i])
	}
	return wordst
}

/**
 *	Edited List with Upper cased for each element
 * @param {*} list
 * @returns
 */
function capital(list) {
	return list.map((item) => item.charAt(0).toUpperCase() + item.slice(1))
}

/**
 *
 * @param {*} arr
 * @param {*} searchKey
 * @returns
 */
function filterIt(arr, searchKey) {
	return arr.filter((obj) =>
		Object.values(obj).some((value) => value.includes(searchKey))
	)
}

function plainCreate(wordst, list) {
	const filteredList = list.filter(
		(item) =>
			filterIt(wordst, item).length > 0 &&
			filterIt(wordst, item)[0].tr === item
	)
	return `İçerikler: ${filteredList.join(', ')}`
}

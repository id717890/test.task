let classNames = [
	'qwe', 'qwe', 'tt', 'tt','tt','tt', 'xx', 'yy'
]


function test (arr) {
	const unique = [...new Set(arr)]
	
	const counts = unique.map(x => {
		return {
			name: x,
			count: arr.filter(item => item === x).length
		}
	})
	
	
	console.log(counts.sort((a,b) => {
		if (a.count > b.count) return -1
		if (a.count < b.count) return 1
		return 0
	}).map(x=>x.name))
}

test(classNames)

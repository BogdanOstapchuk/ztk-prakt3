let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');
let boxColor = document.querySelectorAll('.box-color tr td');


btn.addEventListener("click", (e) => {
	e.preventDefault()
	let input1val = Number(input1.value);
	let input2val = Number(input2.value);
	result.appendChild(generateTable(input1val, input2val));
})

function generateTable(row, cols) {
	let tableTag = document.createElement('table')
	for (let i = 0; i < row; i++) {
		let trTag = document.createElement('tr')
		for (let j = 0; j < cols; j++) {
			let tdTag = document.createElement('td')
			tdTag.textContent = '⠀⠀';
			trTag.appendChild(tdTag)
		}
		tableTag.appendChild(trTag)
	}
	return tableTag;
}

boxColor.forEach(i => {
	i.addEventListener('click', () => {
		boxColor.forEach(j => {
			j.classList.remove('active')
		})
		i.classList.toggle('active');
		if (i.classList.contains('active')) {
			let boxResult = document.querySelectorAll('.result tr td');
			boxResult.forEach(k => {
				k.addEventListener('click', (e) => {
					let color = i.attributes.name.value
					e.target.classList = color
				})
			})
		}
	})
})
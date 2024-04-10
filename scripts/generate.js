const fs = require('fs')

const [_, __, ...vars] = process.argv
const generator = vars[0] === 'cover' ? 'cover-letters' : 'resumes'
const file = vars[1]

const { mdToPdf } = require('md-to-pdf');

(async () => {
	const pdf = await mdToPdf({ path: `${generator}/${file}.md` }, { dest: `bin/${generator}/${file}.pdf` })

	if (pdf) {
		fs.writeFileSync(pdf.filename, pdf.content);
	}
})()
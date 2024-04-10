const fs = require('fs')

const [_, __, ...vars] = process.argv
const generator = vars[0] === 'cover' ? 'cover-letters' : 'resumes'
const file = process.env.npm_config_file

const { mdToPdf } = require('md-to-pdf');

(async () => {
	try {
		const pdf = await mdToPdf({ path: `${generator}/${file}.md` }, { dest: `dist/${generator}/${file}.pdf` })
		fs.writeFileSync(pdf.filename, pdf.content)

		console.log(`File written to dist/${generator}/${file}.pdf`)
	} catch(error) {
		console.error(error)
	}
})()
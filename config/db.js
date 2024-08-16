const mongoose = require('mongoose')
const link = process.env.DB

const connectDb = () => {
	console.log('connect mongoDb')
	return mongoose.connect(link)
}

module.exports = connectDb
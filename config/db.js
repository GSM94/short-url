const mongoose = require('mongoose')
const link = process.env.MONGODB_URI

const connectDb = () => {
	console.log('Connecting to MongoDB');
	return mongoose.connect(link, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).catch(err => { // Отловляем ошибки здесь
		console.error('MongoDB connection error:', err);
		throw err; // Пробрасываем ошибку дальше
	});
}

module.exports = connectDb
const mongoose = require('mongoose')
const link = 'mongodb+srv://shoma994:GeoWeb94@nuxt-blog.xycw8aw.mongodb.net/urlShortener?retryWrites=true&w=majority&appName=nuxt-blog'

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
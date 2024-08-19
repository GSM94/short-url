const mongoose = require('mongoose')
const link = 'mongodb+srv://shoma994:GeoWeb94@nuxt-blog.xycw8aw.mongodb.net/urlShortener?retryWrites=true&w=majority&appName=nuxt-blog'

const connectDb = () => {
	console.log('Connecting to MongoDB');
	return mongoose.connect(link, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		autoReconnect: true,
		reconnectTries: Number.MAX_VALUE,
		reconnectInterval: 1000
	})
	.then(() => {
		console.log('Successfully connected to MongoDB');
		// Дополнительная обработка событий соединения
		mongoose.connection.on('disconnected', () => {
			console.log('MongoDB disconnected. Attempting to reconnect...');
		});

		mongoose.connection.on('reconnected', () => {
			console.log('MongoDB reconnected.');
		});

		mongoose.connection.on('error', err => {
			console.error('MongoDB connection error:', err);
		});
	})
	.catch(err => {
		console.error('MongoDB connection error:', err);
		throw err; // Пробрасываем ошибку дальше
	});
}

module.exports = connectDb
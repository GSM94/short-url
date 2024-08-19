require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const connectDb = require('./config/db')
const indexRoutes = require('./routes/index')
const linkRoutes = require('./routes/links')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true })) // позволяет считывать данные из html форм
app.use(bodyParser.json())// позволяет серверу парсить данные JSON
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(indexRoutes)
app.use('/links', linkRoutes)

connectDb().then(() => {
	app.listen(PORT, () => {
		console.log(`Server is working on ${PORT}`);
	});
}).catch((err) => {
	console.error('Failed to connect to MongoDB:', err.message, err.stack);
	process.exit(1);
})

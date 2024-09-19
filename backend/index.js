import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import degreeRouter from "./routes/degree.route.js"
dotenv.config()
const app=express()
app.use(express.json())
app.use(bodyParser.json())
const MongoUrl=process.env.STRING
app.get("/",(req,res)=>{
    res.send("Home page")
})
//routes
app.use('*', (req, res, next) => {
	const logEntry = `host:${req.hostname}  method:${req.method} route:${
		req.originalUrl
	} date:${new Date().getDate()}:${new Date().getMonth()}:${new Date().getFullYear()}  time:${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n`;
	file.appendFile('./api.txt', logEntry, (err) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log('appended');
	});
	console.log(
		`host:${req.hostname}  method:${req.method} route:${req.originalUrl}`,
	);
	next();
});
app.use('/api/v1/degree', degreeRouter);
app.use('/api/v1/comment', commetRouter);
mongoose
	.connect(MongoUrl)
	.then(() => {
		app.listen(4000, () => {
			console.log('Databse Connected');
		});
	})
	.catch((error) => console.log(error));

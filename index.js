const express = require('express')
const path = require('path')
const fetch = require('node-fetch')

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.listen(3000, function () {  
    console.log('Example app listening on port 3000!')
})


app.get("/", async(req, res, next) => {
	try{
		fetch('https://jsonplaceholder.typicode.com/users/1')
    	.then(res => res.json())
    	.then(json => console.log("landing", json))
    	.then(json => res.render("landing", {
    		userId: json.userId,
    		id: json.id,
    		title: json.title, 
    		body: json.body
    	}));
    }catch(err){
    	console.log("something")
    }
    
});

app.get("/posts", (req, res) => {
	fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(json => console.log("posts", json))
    .then(json => res.render("posts", {
    	userId: json.userId,
    	id: json.id,
    	title: json.title, 
    	body: json.body
    }));

});

app.get("/comments", (req, res) => {
	fetch('https://jsonplaceholder.typicode.com/comments/1')
	.then(res => res.json())
	.then(json => res.render("comments", {
		id: json.id, 
		name:json.name, 
		email:json.email, 
		body:json.body,
	}));
});

app.get("/pictures", (req, res) => {
	fetch('https://jsonplaceholder.typicode.com/photos/1')
	.then(res => res.json())
	.then(json => res.render("pictures", {
		id: json.id, 
		title:json.title, 
		url:json.url, 
		thumbnail: json.thumbnailUrl
	}));
});
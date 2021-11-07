                        Instructions

Make sure you have installed Nodejs and MongoDB.
Clone the source code and run the following commands in to the root directory. 

npm install  <br>
npm run start

Open post man and hit this url to login. Get the JWT bearer token and use it in the headers for every further request.
http://localhost:3000/auth/login 

Now open postman and make a post request to save the data into the DB

http://localhost:3000/users


Request body = {
               	"username":"mustafa"  ||  "password":"1wsdrww"
               }
               
               
Fetch all the posted data by sending a get request on the follwoing link 

http://localhost:3000/users

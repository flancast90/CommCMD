> A JS rendition of a terminal-chat application, using the termpage repo for looks, and a socket.io/node backend.

## CommCMD
Welcome to CommCMD, a JS terminal-like chat-app built on Node.js and Socket.io! The project is under MIT License, which means anyone can edit, distribute, or fork any part of the project, although attribution would be great! This project started out as a way to test what I've been learning with socket.io, but with so many chat-apps already out-there, I wanted to make something a bit different. What you can see here with CommCMD is my best effort at doing this! Enjoy!

## Screenshots
<img src="https://i.imgur.com/yaBJiA5.png"/>

## Get-Started 
CommCMD is dependent on a very few popular node.js libraries, which can be installed in a few simple commands in order to ensure functionality. Run the following in your terminal to install the libraries, or if you have them feel free to move on.
```node.js
npm install socket.io
npm install body-parser
npm install express
```

To run CommCMD on your computer, simply ```cd``` to the location of the server.js file, and then:
```
node server.js
```
**BONUS:** Ngrok (https://ngrok.com/) is a great way to open CommCMD to the world, simply follow the steps given on their webpage, and use the random subdomain they give you to chat with your friends, family, and co-workers!

_The program will be running at localhost:8000 by default_

## License 
```
MIT License

Copyright (c) 2021 Finn Lancaster

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

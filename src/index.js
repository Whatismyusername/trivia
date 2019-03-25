import React from "react";
import ReactDOM from "react-dom";
import "./css/App.css";
import App from "./components/App";

//   //Canvas
//   var canvas = document.getElementById('canvas');
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   var answer_width = canvas.width / 2;
//   var answer_height = canvas.height / 4;

//   var c = canvas.getContext('2d');

//   var answerB = {
//       "tl":{
//           topB: canvas.height / 2,
//           leftB: 0
//       },
//       "tr":{
//           topB:canvas.height / 2,
//           leftB: answer_width
//       },
//       "bl":{
//           topB: canvas.height * 3 / 4,
//           leftB:0
//       },
//       "br":{
//           topB: canvas.height * 3 / 4,
//           leftB: answer_width
//       }
//   };

//   var mouse = {
//       x: undefined,
//       y: undefined
//   };
//   window.addEventListener('mousemove',
//   function(event){
//       mouse.x = event.x;
//       mouse.y = event.y;
//   });
//   window.addEventListener('resize', function(){
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//   });

//   function answerBoxes(answerBox, box){
//       this.answerBox = answerBox;
//       let color;
//       if (box === "tl"){
//           color = "rgba(153, 204, 255, 0.5)";
//       } else if(box === "tr"){
//           color = "rgba(255, 0, 0, 0.5)"
//       } else if(box === "bl"){
//           color = "rgba(255, 255, 0, 0.5)";
//       } else if(box === "br"){
//           color = "rgba(102, 255, 102, 0.5)";
//       }

//       c.fillStyle = color;
//       c.fillRect(this.answerBox.leftB, this.answerBox.topB, answer_width, answer_height);
//       c.strokeStyle = "black";
//       c.strokeRect(this.answerBox.leftB,this.answerBox.topB, answer_width, answer_height)

//   }

//   function Circle(x, y, dx, dy, radius, l, t, pos){
//       this.x = x;
//       this.y = y;
//       this.dx = dx;
//       this.dy = dy;
//       this.radius = radius;
//       this.l = l;
//       this.t = t;
//       this.pos = pos;
//       let color;

//       if (this.pos = "tl"){
//           color = ["rgb(153, 204, 255)", "rgb(102, 153, 255)", "rgb(153, 153, 255)"];
//       }
//       if (this.pos = "br"){
//           color = ["rgb(102, 255, 102)", "rgb(153, 255, 51)", "rgb(51, 204, 51)"];
//       }

//       let circleColor = color[Math.floor(Math.random() * color.length)];

//       this.draw = function(){
//           c.beginPath();
//           c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//           c.strokeStyle = circleColor;
//           c.stroke();
//           c.closePath();
//       };
//       this.update = function(){
//           if( this.x + this.radius > l + answer_width || this.x - this.radius < l ){
//               this.dx = -this.dx;
//           }
//           if( this.y + this.radius > t + answer_height || this.y - this.radius < t ){
//               this.dy = -this.dy;
//           }
//           this.x += this.dx;
//           this.y += this.dy;
//           this.draw();

//       };
//   }
//   function Square(x, y, dx, dy, sWidth, rotate, l, t, pos){
//       this.x = x;
//       this.y = y;
//       this.dx = dx;
//       this.dy = dy;
//       this.sWidth = sWidth;
//       this.rotate = rotate;
//       this.l = l;
//       this.t = t;
//       this.pos = pos;

//       let color;
//       if(this.pos = "tr"){
//           color = ["rgb(255, 80, 80)", "rgb(255, 0, 0)", "rgb(255, 102, 0)"];
//       }
//       if (this.pos = "bl"){
//           color = ["rgb(255, 255, 0)", "rgb(255, 204, 0)", "rgb(255, 255, 153)"];
//       }
//       let squareColor = color[Math.floor(Math.random() * color.length)];

//       this.draw = function(){
//           c.beginPath();
//           // c.rotate(20 * Math.PI / 180);
//           c.rect(this.x, this.y, this.sWidth, this.sWidth);

//           c.strokeStyle = squareColor;
//           c.stroke();
//           c.closePath();
//       };

//       this.update = function(){
//           if( this.x + this.sWidth > l + answer_width || this.x < l ){
//               this.dx = -this.dx;
//           }
//           if( this.y + this.sWidth > t + answer_height || this.y < t ){
//               this.dy = -this.dy;
//           }
//           this.x += this.dx;
//           this.y += this.dy;
//           this.draw();

//       };
//   }

//   //Circle Top Left Corner
//   var circleArray = [];
//   function formCircle(l, t, pos){
//       for(var i = 0; i < Math.floor(answer_width * answer_height/1000); i++){
//           var radius = Math.random() * 5 + 2;
//           var x = Math.random() * (answer_width - radius * 2) + radius;
//           var y = Math.random() * (answer_height - radius * 2) + radius;
//           var dx = (Math.random() - 0.5) * 3;
//           var dy = (Math.random() - 0.5) * 3;

//           circleArray.push(new Circle(x + l, y + t, dx, dy, radius, l, t, pos));
//       }
//   }

//   //Square Top Right Corner
//   var squareArray = [];
//   function formSquare(l, t, pos){
//       for (var i = 0; i < Math.floor(answer_width * answer_height/1000); i++){
//           var sWidth = Math.random() * 10 + 4;
//           var x = Math.random() * (answer_width - sWidth * 2) + sWidth;
//           var y = Math.random() * (answer_height - sWidth * 2) + sWidth;
//           var dx = (Math.random() - 0.5) * 3;
//           var dy = (Math.random() - 0.5) * 3;
//           var rotate = (Math.random() - 0.5) * 10;
//           squareArray.push(new Square(x + l, y + t, dx, dy, rotate, sWidth, l, t, pos));
//       }
//   }

//   formCircle(answerB.tl.leftB, answerB.tl.topB, "tl");
//   formSquare(answerB.tr.leftB, answerB.tr.topB, "tr");
//   formSquare(answerB.bl.leftB, answerB.bl.topB, "bl");
//   formCircle(answerB.br.leftB, answerB.bl.topB, "br");

//   function animate(){
//       requestAnimationFrame(animate);
//       c.clearRect(0, 0, window.innerWidth, window.innerHeight);

//       answerBoxes(answerB.tl, "tl");
//       answerBoxes(answerB.tr, "tr");
//       answerBoxes(answerB.bl, "bl");
//       answerBoxes(answerB.br, "br");

//       for(var i = 0; i < circleArray.length; i++){

//           circleArray[i].update();
//           squareArray[i].update();
//       }

//   }
//   animate();

ReactDOM.render(<App />, document.getElementById("root"));

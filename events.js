const events=require("events");
const eventEmitte=new events.EventEmitter();
connectHandler=function Connected(){
	console.log("connection established");
	eventEmitte.emit("connected1");
};
eventEmitte.on("connection",connectHandler);
eventEmitte.on("connected1",function(){
	console.log("data received successfully");
});
eventEmitte.emit("connection");
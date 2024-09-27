const app = require('express')()
const server = require('http').createServer(app);
const io = require("socket.io")(server,{
    cors: {
        origin: "*",
      }
});

const port = process.env.PORT || 5000;

io.on('connection',(socket)=> {
    console.log('socket is active and connected')

    socket.on('join_room',(data)=>{
        console.log('', data)
        io.emit('join_room',data)
    })

    socket.on('disconnect',() => {
        console.log('User disconnected')
    })
})


server.listen(port, () => console.log(`Server running on PORT ${port}`));

var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');

    socket.emit('createMessage',{
        from: 'Sarah',
        text: 'hey, this is Sarah!'
    });
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
    console.log('New message', message);
});

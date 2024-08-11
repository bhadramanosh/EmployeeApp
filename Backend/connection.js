const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://bhadramanosh:tomholland14@cluster0.ov7rklj.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
console.log('DB is connected')
}).catch((error)=>{
    console.log('DB failed to connect')
});

  
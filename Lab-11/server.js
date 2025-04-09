const express=require('express')
const mongoose=require('mongoose')

const app=express()

app.use(express.json())

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);


mongoose.connect("mongodb://127.0.0.1:27017/sample")
.then(() => console.log('Connected to MongoDB'))
.catch(()=>console.log('Error Connecting to MongoDB'))

app.listen(3000,()=>{
    console.log('server is running at port 3000')
})


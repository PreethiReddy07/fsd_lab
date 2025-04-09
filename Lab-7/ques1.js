// a. Create a custom API for Users data and add different endpoints in express server to perform
// CRUD operations on the API. Test the endpoints using POSTMAN.

const express=require('express')
const app=express()
const users=require('./users1.json')
const fs=require('fs')

app.use(express.json())
app.get('/api/users',(req,res)=>{
    res.status(200).json(users)

})
app.get('/api/users/:id',(req,res)=>{
    const user=users.find(user=>user.id===Number(req.params.id))
    if(user){
        res.status(200).json(user)
    }else{
        res.status(404).json({message:'not found'})
    }
})
app.post('/api/users',(req,res)=>{
    console.log(req.body)
    users.push(req.body) 

    fs.writeFile(__dirname='./users1.json',JSON.stringify(users),(err)=>{
        if(err){
            res.status(404).json({message:'Error'})
        }else{
            res.status(200).json({message:'user created successfully'})
        }
    })
})
app.put('/api/users/:id',(req,res)=>{
    const user=users.find(user=>user.id===Number(req.params.id))
        user.name=req.body.name  
        fs.writeFile(__dirname='./users1.json',JSON.stringify(users),(err)=>{
        if(err){
            res.status(404).json({message:'Error'})
        }else{
            res.status(200).json({message:'user updated successfully'})
        }
    })
})
app.delete('/api/users/:id', (req, res) => {
    const user = users.find(user => user.id === Number(req.params.id));

    if (user) {
        const index = users.indexOf(user);
        users.splice(index, 1);

        fs.writeFile(__dirname='./users1.json',JSON.stringify(users),(err)=>{
            if (err) {
                return res.status(500).json({ message: 'Error deleting the user data' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        });                                  
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
// const express = require('express')
// const app = express()
// const port = 8000;
// const connectDb = require('./db/db')
// const User = require('./db/user')
// const cors = require('cors')

// app.use(express.json())

// app.use(cors())

// app.post('/register' ,async (req,res)=>{
// try{
//     const {username, password} = req.body
//     console.log(req.body);
//     const user = await new User.findOne({username, password})
//     await user.save();
//     res.status(201).json({message:'resgistration successful'})
// }
// catch(error){
//   res.status(500).json({message:'registration failed'})
// }
// })
// app.listen(port,()=>{
//     console.log("server is listeningnodemon");
// })

// app.post('/login' , async (req,res)=>{
//     try{
//         const {username, password}= req.body
//         const user =await User.findOne({username})
//         if (!user) {
//             return res.status(401).json({error:"invalidusernameorpassord"})
            
//         }
//         if (user.password !== password){
//             return res.status(401).json({error:"invalidpassword"})
//         }
//         res.status(200).json({message:"login succesful"})
//     }catch(error){
//         res.status(500).json({error:"login failed"})
//     }
// })
//         connectDb()


const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/db');
const User = require('./db/user');
const cors = require('cors');

//Middleware for parsing JSON
app.use(express.json());

//Enable CORS
app.use(cors())

//Registration
app.post('/register',async(req,res) => {
    try{
        const {username,password} = req.body;
        console.log(req.body)
        const user = new User({username,password});
        await user.save();
        res.status(201).json({message:'Registration Successful'});
    }
    catch(error){
        res.status(500).json({error:'Registration failed'});
    }
})

//Login
app.post('/login',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({error:'Invalid username or Password'});
        }

        if(user.password !== password){
            return res.status(401).json({error:'Invalid username or password'});
        }
        res.status(200).json({message:'Login successful'})
    }
    catch(error){
        res.status(500).json({error:'Login failed'})
    }
})

connectDB();

app.listen(port,()=> {
 console.log('Server is listening on Post 8000')
});
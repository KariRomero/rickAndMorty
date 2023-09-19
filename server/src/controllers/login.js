const users = require('../utils/users');

const login = (req,res)=>{
    const { email, password } = req.query;

    // console.log('Email:', email);
    // console.log('Password:', password);

    const userFound = users.find((user)=>user.email === email && user.password === password);
    
    return userFound 
    ? res.status(200).json({ access: true }) 
    : res.status(400).json({ access: false })
};

module.exports = {
    login
};
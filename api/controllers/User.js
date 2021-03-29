const User = require('../../models').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Get user
exports.getUser = (req, res) => {
  return User.findByPk(req.params.id).then(user => {
    res.status(200).json(user)
  }).catch((err) => {
    return res.status(400).json({ message: err.message })
  })
  }

// Create user
exports.createUser = (req, res) => {
  const {firstname,lastname,email,username,contact,address,password,admin} =req.body;
  const hash = bcrypt.hashSync(password, 10);
  console.log(hash)
    return User.create( {firstName:firstname,lastName:lastname,email:email,username:username,contact:contact,physical_address:address,password:hash,admin:admin})
      .then((createdUser) => {
        return res.status(201).json(createdUser)
  
      })
      .catch((err) => {
        return res.status(400).json({ message: err.message })
      })
  }

// Login
exports.login = async (req, res) => {
    //1. check user email -exitst
    const { username, email, password } = req.body
    if ((!username || !email) && !password) {
      return res.status(400).status({ message: "fields are required" })
    }
  
    let userExist;
    if (username) {
      userExist = await User.findOne({ where: { username: username } })
    } else if (email) {
      userExist = await User.findOne({ where: { email: email } })
    }
  
  
    if (!userExist) {
      return res.status(401).json({ message: "Username/EMail does not exist" })
    }
  
    //2. password match
    const match = await bcrypt.compare(password, userExist.dataValues.password)
    // Load hash from your password DB.
    if (match) {
      //3. generate token
      const token = jwt.sign(
        { userId: userExist.dataValues },
        'RANDOM_TOKEN_SECRET',
        { expiresIn: '24h' });
      return res.status(200).json({
        userId: userExist.dataValues,
        token: token
      })
     
    }else{
      return res.status(401).json({ message: "wrong password" })
    }
   }
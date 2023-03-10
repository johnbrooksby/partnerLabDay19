const bcrypt = require("bcryptjs");
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      console.log('Registering User');
      console.log(req.body);
    
      const {username, email, firstName, lastName, password} = req.body;
     
        const salt = bcrypt.genSaltSync(10);
        const passHash = bcrypt.hashSync(password, salt);

        let newUser = {
          username,
          email,
          firstName,
          lastName,
          passHash
        };

        users.push(newUser);
        console.log(newUser);
        res.status(200).send(newUser);
      
    }
}
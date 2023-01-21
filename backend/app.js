const url = require('url')
const axios = require('axios');
const express = require('express')
const cors = require("cors")
const app = express()
const port = 3002
const connection = require('./database')

//REPLACE
app.use(cors({ origin: 'http://localhost:3000' }))
//


const session = require('express-session')
app.use(session({
  secret: 'fzukVH4eJY',
  resave: true,
  saveUninitialized: true,
  rolling:true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}))




app.get('/', (req, res) => {
  res.send('Hello World!')
})


//nations
app.get('/getnations', (req, res) => {
  connection.query("SELECT FULL_NAME, FLAG_URL FROM NationsInfo", (err, result) => {
    res.json(result)
    console.log(err)
  })

  })  

app.get('/getallnationinfo', (req, res) => {
  connection.query("SELECT FULL_NAME, FLAG_URL, ANTHEM, RELIGIOn, MAIN_COUNTRY, ECONOMIC_SYSTEM, GOVERNMENT_SYSTEM, UN_MEMBER, DISCORD_SERVER_ID FROM NationsInfo", (err, result) => {
    res.json(result)
    console.log(err)
  })
  
    })  

app.post('/addmember', (req, res) => {
  const USER_ID = req.params.userid
  const NATION_ID = req.params.nationid
  const query = `INSERT INTO NationsApplications (${USER_ID}, ${NATION_ID}, Pending)`

  connection.query(query, (err, result) => {
    console.log(err)
    res.send(JSON.stringify(result));
  })

})  


//businesses
app.get('/getbusinesses', (req, res) => {
  var businesses
  var businessInfo
 connection.query("SELECT * FROM Businesses WHERE IS_CLOSED IS FALSE; SELECT TYPE, OWNER_ID, PARENT_COMPANY, HEADQUARTERS FROM Businesses", [1, 2], (err, result) => {
  businesses = result[0]
  businessInfo = result[1]

  res.send([businesses, businessInfo])
 })

  // here make sure to create a conditional that checks whether the business has a PARENT_COMPANY
  // and if it does make sure to find the parent company using another query


})  



// my businesses
app.get('/mybusinesses', (req, res) => {
  const query = "SELECT BUSINESS_NAME, TYPE, OWNER_ID, PARENT_COMPANY, HEADQUARTERS, LOGO_URL, FOUNDING_DATETIME FROM Businesses WHERE OWNER_ID = ? AND IS_CLOSED IS FALSE"

 connection.query(query, (err, result) => {
    console.log(err)
    res.send(JSON.stringify(result));
  })
})


// my nations
app.get('/mynations', (req, res) => {
  //make a query condition that checks whether or not the user is in the nation
  
 connection.query("SELECT FULL_NAME, FLAG_URL FROM NationsInfo", (err, result) => {
    console.log(err)
    res.send(JSON.stringify(result));
  })
})  


//oauth
app.get('/auth/discord', async (req, res) => {
  const { code } = req.query;

  if (code) {
    try {
      const formData = new url.URLSearchParams({
        client_id:'1061517929205747823',
        client_secret:'9bfnNQO2YH6diOs2jcWDAFtTR3Br4sEJ',
        grant_type:'authorization_code',
        code: code.toString(),
        redirect_uri: 'http://localhost:3002/auth/discord',
      })
      // REPLACE ALL LOCALHOSTS
      const response = await axios.post('https://discord.com/api/oauth2/token',
      formData.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })

      //REPLACEALL LOCALHOSTS
      req.session.tempData = response.data.access_token
      console.log(response.data.access_token)
      console.log(req.session.tempData)
      const fetchUser = (data) => {
        axios
          .get(`https://discordapp.com/api/users/@me`, {headers: {Authorization: `Bearer ${data}`}})
          .then(response => {
            req.session.userInfo = response.data;
            console.log(req.session.userInfo)
            req.session.save(function (err) {
              if (err) {
                console.log(err);
                res.sendStatus(500)
              } else {
                res.redirect('http://localhost:3000')
                             }
            });
          })
          .catch(err => {
            console.error(err);
          });

      }
      fetchUser(req.session.tempData)
      
    } catch (err){
      console.log(err)
      res.sendStatus(400);
    } 
      
    
    
  }
})

app.get('/userInfo', (req,res) => {
  if (req.session && req.session.userInfo) {
    res.status(200).send(req.session.userInfo);
    console.log(req.session.userInfo);
  } else {
    res.status(404).send('User info not found');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
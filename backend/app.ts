require("dotenv").config();

//import url from "url";
import express, { Request, response } from "express";
import cors from "cors";
import DiscordOauth2, { User } from "discord-oauth2";
import connection from "./database";

const app = express();
const port = parseInt(process.env.PORT as string);
const oauth = new DiscordOauth2({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
});

//REPLACE
//app.use(cors({ origin: "::*" }));
//



app.get("/auth/login", (_, res) => res.redirect(process.env.DISCORD_URI_LOGIN));


app.get("/", (_, res) => {
    res.send("Hello World!");
});


//nations
app.get("/getNations", (_, res) => {
    connection.query("SELECT FULL_NAME, FLAG_URL FROM NationsInfo", (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(result);
        }
    });
});

app.get("/getAllNationInfo", (_, res) => {
    connection.query("SELECT FULL_NAME, FLAG_URL, ANTHEM, RELIGIOn, MAIN_COUNTRY, ECONOMIC_SYSTEM, GOVERNMENT_SYSTEM, UN_MEMBER, DISCORD_SERVER_ID FROM NationsInfo", (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(result);
        }
    });
})  

app.post("/addMember", (req: Request<{
    userid: string
    nationid: string
}>, res) => {
    const USER_ID = req.params.userid
    const NATION_ID = req.params.nationid
    const query = `INSERT INTO NationsApplications (${USER_ID}, ${NATION_ID}, Pending)`

    connection.query(query, (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(result);
        }
    });
})  


//businesses
app.get("/getBusinesses", (_, res) => {
    connection.query("SELECT * FROM Businesses WHERE IS_CLOSED IS FALSE; SELECT TYPE, OWNER_ID, PARENT_COMPANY, HEADQUARTERS FROM Businesses", [1, 2], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        }

        const businesses = result[0]
        const businessInfo = result[1]

        res.send([businesses, businessInfo]);

        // here make sure to create a conditional that checks whether the business has a PARENT_COMPANY
        // and if it does make sure to find the parent company using another query
    });

  


});



// my businesses
app.get("/myBusinesses", (_, res) => {
    const query = "SELECT BUSINESS_NAME, TYPE, OWNER_ID, PARENT_COMPANY, HEADQUARTERS, LOGO_URL, FOUNDING_DATETIME FROM Businesses WHERE OWNER_ID = ? AND IS_CLOSED IS FALSE"

    connection.query(query, (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(result);
        }
    });
});


// my nations
app.get("/myNations", (_, res) => {
  //make a query condition that checks whether or not the user is in the nation
  
    connection.query("SELECT FULL_NAME, FLAG_URL FROM NationsInfo", (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(result);
        }
    });
});


//oauth
app.get("/auth/discord", async (req, res) => {
    const {
        code
    } = req.query;

    if (!code) return res.status(300);

    try {
        let returned: Awaited<ReturnType<typeof oauth["tokenRequest"]>>

        if (req.cookies?.refresh_token) {
            try {
                returned = await oauth.tokenRequest({
                    grantType: "refresh_token",
                    refreshToken: <string>req.cookies.refresh_token,
                    scope: process.env.SCOPE,
                    code: <string>code
                });
            } catch {}
        }

        if (!returned) {
            returned = await oauth.tokenRequest({
                grantType: "authorization_code",
                scope: process.env.SCOPE,
                code: <string>code
            });
        }

        const {
            refresh_token,
            access_token,
            expires_in,
        } = returned;
        const data = {
            user: <User>await fetch(`https://discordapp.com/api/users/@me`, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
                .then(res => res.json()),
            login: {
                refresh_token,
                access_token,
                expires_in
            }
        };

        return res.redirect(`${req.protocol}://${req.hostname}:3000/auth/discord?data=${encodeURIComponent(JSON.stringify(data))}`);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    } 
});

app.get("/userInfo", async (req, res) => {
    const {
        access_token
    } = req.query;

    if (access_token) {
        try {
            res.send(
                <User>await fetch(`https://discordapp.com/api/users/@me`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`
                    }
                })
                    .then(res => res.json())
            );
        } catch (e) {
            return res.status(404).send(e.toString());
        }
    } else {
        res.status(404).send("User info not found");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
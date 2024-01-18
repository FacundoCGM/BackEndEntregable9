import UsersMongo from "../daos/mongodb/usersDao.js"
const usersMongo = new UsersMongo()
import passport from "passport"
import { Strategy as GithubStrategy } from "passport-github2"

const strategyOptions = {
    clientID: "Iv1.c73297e18d3524ca",
    clientSecret: "601b07ebc3ad5240fa44d46a66142176a5ab716b ",
    callbackURL: "http://localhost:8080/mongo/products"
}

const regLog = async (accessToken, refreshToken, profile, done) => {
    const email = profile._json.email
    const user = await usersMongo.findByEmail(email)
    console.log('github user', user)
    if (user){
        return done(null, user)
    } else {
        const registerUser = await usersMongo.register({
            first_name: profile._json.name,
            email,
            isGithub: true
        })
        return done(null, registerUser)
    }
}

passport.use("github", new GithubStrategy(strategyOptions, regLog))
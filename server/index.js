var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var sessions = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var bcrypt = require('bcrypt');


require('dotenv').config({path: __dirname + '/.env'});


var ctrl = require('./controller');

var app = express();

//SET UP DATABASE
massive( process.env.CONNECTION_STRING, { scripts: __dirname + '/db' }).then( dbInstance => {
    app.set( 'db', dbInstance)
    console.log(`The database is connected`)
}).catch( error => {
    console.log(process.env.CONNECTION_STRING)
    console.error(error);
});

app.use(bodyParser.json());

//SESSIONS
app.use(sessions({
    saveUninitialized: false,
    resave: false,
    secret: "shhh it's a secret"
}));

//AUTH WITH PASSPORT
app.use(passport.initialize());
app.use(passport.session());

//register set up 
passport.use( 'register', new LocalStrategy ( { passwordField:"newPassword", usernameField:"newUsername" }, function ( newUsername, newPassword, done ) {
    if ( newUsername.length === 0 || newPassword.length === 0 ) {
        return done( null, false, { message: 'Username, and Password are required' } );
    }

    const dbInstance = app.get( 'db' )
    
    dbInstance.user_table.find( { username: newUsername } )
    .then( userInfo => {
        //what is userInfo and where did it come from/what does it contain?
        if( userInfo.length > 0) {
            return done( null, false, { message: "Username is not available" });
        }
        const hashedPassword = bcrypt.hashSync( newPassword, 15 );
        return dbInstance.add_newUser( [ newUsername, hashedPassword ] );
    })
    .then( user  => {
        //user is coming from add_newUser cuz of returning *
        const newUser = user[0];
        delete newUser.password;
        done( null, newUser );
    })
    .catch( error => {
        console.log(error.message)
    })
}));

//login set up
passport.use( 'login', new LocalStrategy( function ( username, password, done ) {
    
    const dbInstance = app.get( 'db' );
    dbInstance.user_table.find({ username }).then( userInfo => {
        const user = userInfo[0];
        if(user === undefined) {
            return done( null, false, { message: 'Username or Password is incorrect' })
        }
        bcrypt.compare(password, user.password, (err, isSame) => {
            if(err) {
                return done(null, false, { message: 'System Failure'})
            }
            if(!isSame) {
                return done(null, false, { message: 'Username or Password is incorrect'})
            }
        })
        delete user.password
        done( null, user );
    }).catch( error => {
        console.log( error.message );
    })
}));


//auth stuff
passport.serializeUser(( user, done ) => {
    done( null, user.id );
});

passport.deserializeUser(( id, done ) => {
    const dbInstance = app.get('db')
    
    dbInstance.users.find( id )
        .then( user => {
            if(!user) {
                return done(null, undefined)
            }
            delete user.password
            return done(null, user)
        })
        .catch(err => {
            console.log(err)
            done('System failure');
        });
});


//ENDPOINTS

//auth endpoint
app.post(`/auth/register`, passport.authenticate('register'), (req, res) => {
    const { user } = req;
    res.send(user);
});
app.post('/auth/login', passport.authenticate( 'login' ), (req, res) => {
    const { user } = req;
    res.send(user);
});


var Port = 4000;

app.listen(Port, () => {
    console.log(`The server is listening on port ${Port}`)
});


require ('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');

const app = express();
const matrix = require('./server');
const auth = require('./controllers/adminRoll');


// const strategy = require('./strategy');

// const session = require('express-session');
// const passport = require('passport');
// const Auth0Strategy = require('passport-auth0');
// const { logout, login, getAdmins } = require('./controllers/adminController');

app.use(bodyParser.json());
app.use(cors());

// app.use( session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
//   })); 

//   app.use((req, res, next) => {
//     if (!req.session.courses) {
//         req.session.courses = [];
//     }
//     next();
// });

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(strategy);

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
} ).catch(err => console.log(err));

//app.use( express.static( `${__dirname}/build` ) );

// app.post( '/api/addListing', matrix.postRequest );
app.get( '/api/fetchListings', matrix.getRequest );
app.get('/api/auth', auth.getAdmin)
// app.put( '/api/updateListing/:id', matrix.putRequest );
app.delete( '/api/deleteListing/:id', matrix.deleteRequest );

// app.use( passport.initialize() );
// app.use( passport.session() );
// passport.use( new Auth0Strategy({
//   domain:       process.env.DOMAIN,
//   clientID:     process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   callbackURL:  '/login',
//   scope: "openid email profile"
//  },
//  function(accessToken, refreshToken, extraParams, profile, done) {
//    // accessToken is the token to call Auth0 API (not needed in the most cases)
//    // extraParams.id_token has the JSON Web Token
//    // profile has all the information from the user
//    return done(null, profile);
//  }
// ) );

// passport.serializeUser( (user, done) => {
//     db.admins
// .get_admins(admin_name_id.id)
// .then(response => {
//     if (!response[0]) {
//         db.admins
//             .add_admins([admins.displayName, admin_name_id.id])
//             .then(res => done(null, res[0]))
//             .catch(err => done(err, null));
//     } else {
//         return done(null, response[0]);
//     }
// })
// .catch(err => done(err, null));
// });

// passport.deserializeUser( (obj, done) => {
//   done(null, obj);
// });

// app.get( '/login',
//   passport.authenticate('auth0',
//     { successRedirect: '/students', failureRedirect: '/login', connection: 'github' }
//   )
// );

// app.get('/login', login);
// app.post('/logout', logout);
// app.get('/api/me', getAdmins);
// app.post('/api/newAdmins', newAdmins);


const port = 3001
app.listen( port, () => { console.log(`Coming to you live from port ${port} , the hottest port in town!`);});
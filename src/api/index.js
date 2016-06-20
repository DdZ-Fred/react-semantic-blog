import express from 'express';
import postsApi from './posts';
import usersApi from './users';

const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
  console.log('API requested!');
  next();
});

apiRouter.get('/', (req, res) => {
  res.send('API Home - Nothing here, sorry!');
});

// USERS ROUTE
apiRouter.param('user_id', (req, res, next, id) => {
  // TODO: Fetch User
  let user;

  // TODO: Assign User to request
  req.user = user;
});


// POSTS ROUTE

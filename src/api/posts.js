/**
 * POSTS RESTful API
 */
import express from 'express';

const postsRoutes = express.Router().route('/users/:user_id');

// Returns all the users
postsRoutes
  .all((req, res, next) => {
    // Put here code that is run whatever the verb
    //
  })
  .get(({ user }, res, next) => {
  // send single user
    if (user) {
      res.json(user);

    // Send all the users
    } else {
      res.json([
        {
          id: 1,
          fname: 'Albert',
          lname: 'Gilbert',
          email: 'agil@mail.uk',
          password: 'agilPass',
        },
        {
          id: 2,
          fname: 'Franken',
          lname: 'Stein',
          email: 'fste@mail.uk',
          password: 'fstePass',
        },
        {
          id: 3,
          fname: 'Franken',
          lname: 'Stein',
          email: 'fste@mail.uk',
          password: 'fstePass',
        },
      ]);
    }
  })
  .put(({ user, params }, res, next) => {
    // TODO: Get user updated info from params

    // TODO: Update user in DB
    let newUser;

    // TODO: Send updated user
    res.json(newUser);
  })
  .post(({ params }, res, next) => {
    // TODO: Get new user info from params

    // TODO: Insert new user in DB
  });


export default postsRouter;

import {Router} from 'express';
import usersData from './app_modules/users';

const usersRoute = Router();

/* GET users listing. */
usersRoute.get('/getuser/:uid', function(req, res, next) {
  var usersData = new usersData();
  usersData.getUser(req.params.uid)
  .then(function(result){
      res.send(result);
  })
});

export default usersRoute;

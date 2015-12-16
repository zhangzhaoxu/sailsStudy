/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    hello : function(req,res){
        res.send('hello man');
    },
    addUser : function(req,res){
        res.send("boom");
        //User.create({
        //    name : 'YourMother',
        //    password : 'boomShakakala'
        //}).exec(function userCreated(err,user){
        //    if(err){
        //        console.log("error");
        //    }else{
        //        console.log(user.name+" "+user.password);
        //        res.send(user.name+" "+user.password);
        //    }
        //});
    }
};


/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index : function(req,res){
        //User.create({
        //    name : 'sailsUser',
        //    password : 'YourMotherBoom'
        //}).exec(function createCB(err,created){
        //    console.log(created.name+" "+created.password);
        //});
        res.view('test');
    },
    addUser : function(req,res) {
        console.log(req.params.all());
        User.create(req.params.all())
            .exec(function(err,data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            });
        res.send("shoudao");
    }
};


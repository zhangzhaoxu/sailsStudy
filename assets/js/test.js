window.onload = function(){
    $("#add")[0].addEventListener('click',function(){
        $.ajax({
            url : '/test/addUser',
            data : {
                name : 'YourMother',
                password : 'lalala'
            },
            success : function(data){
                console.log(data);
                alert("success");
            },
            error : function(data,err){
                console.log(err);
                alert('error');
            }
        })
    })
};
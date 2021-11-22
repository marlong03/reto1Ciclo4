const email = document.getElementById("email")
const password = document.getElementById("password")
const submit = document.getElementById("submit")

submit.addEventListener("click",function(){
    const ajax = $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/user/all"

    })
    ajax.done(function(res){
        for(x of res){
            if(x.email == email.value){
                console.log(x)
            }else{

            }
            /* if(x.email == email.value && x.password == password.value){
                alert("email si contraseña si")
            }
            if(x.email == email.value && x.password !== password.value){
                alert("email si contraseña no")

            }
            if(x.email !== email.value && x.password == password.value){
                alert("email no contraseña si")

            }
            if(x.email !== email.value && x.password !== password.value){
                alert("email no contraseña no")
            } */
        }
    })
    ajax.fail(function(err){
        console.log(err)
    })

})

//----- post ---- registro -----
/* password.addEventListener("click",function(){
    const ajax = $.ajax({
        method:"POST",
        url:"http://localhost:8080/api/user/new",
        contentType: "application/json; charset=utf-8",
                dataType: 'JSON',
                data: JSON.stringify(
                    {
                        "email": "marlongyes@gmail.com",
                        "password": "123",
                        "name": "marlong"
                    })
        

    })
    ajax.done(function(res){
        console.log(res)
    })
    ajax.fail(function(err){
        console.log(err)
    })
}) */
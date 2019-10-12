function register(){
    name = document.getElementById('name').value;
    phn = document.getElementById('phn').value;
    age = document.getElementById('age').value;
    ht = document.getElementById('ht').value;
    wt = document.getElementById('wt').value;
    pwd = document.getElementById('pwd').value;
    gender = '';
    bmr = '';
   
    if(name && phn && age && ht && wt && pwd){
         var phoneno = /^\d{10}$/;
         if(phn.match(phoneno)){
            //  alert('correct phn');
             if(document.getElementById('m').checked){
                gender = 'm';
                bmr = (10*wt) + ((6.25 * 30.48 * ht) - (5 * age) + 5)
                // alert("your bmr is bmr male: "+bmr);
            }
            else{
                gender = 'f';
                bmr = (10*wt) + ((6.25 * 30.48 * ht) - (5 * age) - 161)
                // alert("your bmr is bmr female: "+bmr);
            }

            axios.post('https://foodsolutions-versionbeta.herokuapp.com/user/register',{
                name : name,
                phone : phn,
                pass : pwd,
                height : ht,
                weight : wt,
                gender : gender,
                bmr : bmr
            })
            .then(res=>{
                console.log(res.data.user)
                if(res.data.success){
                
                    console.log(res.data.user);
                    setStorage('user',res.data.user);
                    window.location.href = '../../index.html';
                }
                else{
                    alert('phone no. already exists');
                }
            })
            .catch(e=>{
                console.log(e)
            })
    // console.log(name);
    // console.log(phn);
    // console.log(age);
    // console.log(ht);
    // console.log(wt);
    // console.log(pwd);
    // console.log(gender);
         }
         else{
             alert('incorrect phn no.');
         }     
    }
    else{
        alert('enter all details')
    }
}

function login(){
    phn = document.getElementById('phn1').value;
    pwd = document.getElementById('pwd1').value;
    // alert(phn +'-->'+pwd);
    var phoneno = /^\d{10}$/;
    if(phn.match(phoneno)){
        axios.post('https://foodsolutions-versionbeta.herokuapp.com/user/login',{
            phone : phn,
            pass : pwd
        })
        .then(res=>{
            console.log(res.data.data[0]);
            if(res.data.success){
                // alert('login successfull');
                setStorage('user',res.data.data[0]);
                window.location.href = '../../index.html'
            }else{
                alert(res.data.message);
            }
           
        })
        .catch(e=>{
            console.log(e);
        })

    }else{
        alert('kindly check your phoneno.!!')
    }

  
   
}
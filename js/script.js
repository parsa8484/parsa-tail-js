    // var username = "Tar"
// var omg = prompt("لطفا نام و نام خانوادگی خود را وارد کنید :")
// alert( " نام شما : "  + omm )
// alert(typeof Number(omg))
// alert(typeof +omg)

                                    // _____finish part1_____

// var x = prompt(" لطفا x را وارد کنید : ")
// var y = prompt("لطفا y را وارد کنید :")

// var z = (x ** y) 
// alert(z)

// or

//  alert(x ** y)

                                    // ______finish part2______

// var x = 4
// var y = 2
// var z = "2"
// var f = "parsa"

// alert(isNaN(y + f) )  
// alert(x == y)    =>      مقایسه متغیر ها با جواب درست و غلط    
//  alert(x < y)    =>      مقایسه متغیر ها با جواب درست و غلط  
// alert(y == z)    =>   2 مساوی فقط مقادیر داخل رو مقایسه میکنه 
// alert(y === z)   =>   3 مساوی ذیتا تایپ ها رو هم بررسی میکنه

                                     //______finish part3_______

//  var x = prompt(" لطفا x را وارد کنید : ")
//  var y = prompt("لطفا y را وارد کنید :")
//  var z = prompt(" لطفا z را وارد کنید : ")

// if(x * y == z) {

//     alert("بله برابر است ")
// } 
// else{
//     alert("خیر برابر نیست")
// }
                                     // ______finish part5_____


//  var userAge = prompt(" لطفا سن خود را وارد کنید : ")
//  var gender = prompt("لطفا جنسیت خود را وارد کنید : (مرد یا زن)")
//  if (gender === "زن" || userAge <= 18){
// alert("شما مجوز استفاده از سایت رو ندارید!!")
//  }
// else {
// alert("به سایت خوش آمدید :) ")    
// }

                                // _________start-function__________    

// var sayHi = function(){
//     alert("Hi Parsa")
// }
// sayHi()

// var showvalue = function() {
//     var x = prompt("Please Enter your value :")
//     // var y = prompt("Please Enter your value :")

//     // var z = (x * y)
//     // alert("result :" + " " + z )

    

//     if (x % 2 == 0) {
//         alert("عدد مورد نظر زوج است")
//     }
//     else{
//         alert("عدد مورد نظر فرد است")
//     }
// }
// showvalue()


// function isevenorodd (number) {
//     if (number % 2 === 0) {
//         alert(number + " Is even ")
//     }
//     else{
//         alert(number + " Is odd ")
//     }
// } 

// isevenorodd(2)
// isevenorodd(3)
 
//  var Number1 = prompt("Enter your Number1 ...")
//  var Number2 = prompt("Enter your Number2 ...")
//                                                         // داخل showpower عدد دیفالت رو میذاریم خط پایین
//  function showpower(Number1 = 1 , Number2 = 1 ){
//   return Number1 ** Number2 
//  }

//  var PowerResult = showpower(Number1 , Number2)
//  alert("Result : " +  PowerResult)


                                    //  ____________finish-function__________
                                        // _________start-string__________

    // var x = "Parsa Abd"
    // var y = x[5]
    // // alert(y)
    // alert(x.length)


    // var Username = prompt("لطفا نام کاربری خود را وارد کنید : ")

    // if(Username.length >= 3){
    //     var Password = prompt("لطفا رمز خود را وارد کنید : ")
    // }
    // else{
    //     alert("نام کاربری مورد نظر باید حداقل 3 رقمی باشد")
    // }
    
    // if(Password.length >= 8){
    //     alert("ثبت شد موفق باشید :) ")
    // }
    // else{
    //     alert("رمز مورد نظر باید حداقل 8 رقمی باشد ")
    // }



    do{
     var captcha = Math.random() * 100000
     var captcha2 = Math.floor(captcha)
     var x =  prompt("لطفا کد کپچا را وارد کنید : " + captcha2)
        if(x == captcha2){
            alert("کد وارد شده صحیح است خوش آمدید :) ")
        }
        else{
            alert("کد وارد شده نادرست است لطفا مجددا تلاش کنید ")
        }
    }while(x != captcha2)

//     var Z = 0
// for(var i = 0; i < 5; i++){
//    var X = parseInt( prompt("لطفا وارد کنید") )
//     Z = Z + X 
// }
// y = Z/i
// alert(y)



// var x = 0
// x = parseInt( prompt("لطفا وارد کنید") )
// for(var i = 0; x/10 != 0 ; i++){
// x =  Math.floor(x / 10)
// }

// alert(i)

// usernumber1 = parseInt( prompt("لطفا عدد اول را وارد کنید :") )
// usernumber2 = parseInt( prompt("لطفا عدد دوم را وارد کنید :") )
// var even = 0
// while(usernumber1 != usernumber2){
// if(usernumber1 / 2 == 0)
// alert(usernumber1)
// usernumber1++
// }

// var usernumber1 = Number( prompt("لطفا عدد اول را وارد کنید :") )
// var usernumber2 = Number( prompt("لطفا عدد دوم را وارد کنید :") )
// var power = 1
// var i = 0
// if(usernumber2 == 0){
//     alert("1")
// }
// else{
//     do{
//         power = usernumber1 * power
//          i++
//         }while(i != usernumber2)
        
//         alert(power)
// }

                                        // _______arrays________    

// var usernumbers = []

// var usernumber = 0
// var sum = 0
// while(usernumber != -1){
//     usernumber = Number(prompt("Enter your number '\n' if you dont have number enter -1 "))
// if(usernumber != -1){
//     usernumbers.push(usernumber)
// }
// }

// for(var i = 0;i < usernumbers.length; i++ ){
//     sum += usernumbers[i]
// }
// alert(sum/i)
                                        // ______object______


// var user = [
// {
//     Name: "Parsa",
//     family: "Abedinejad",
//     Age:19,
//     job: "frontend developer" 
// },
// {
//     Name: "ALi",
//     family: "Torke",
//     Age:18,
//     job: "Bikar" ,
// },
// ];

// console.log(user[1])


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


var kapcha = Math.random() * 100000
var kapcha2 = Math.floor(kapcha)
var x =  prompt("لطفا کد کپچا را وارد کنید : " + kapcha2)
    if(x == kapcha2){
        alert("کد وارد شده صحیح است خوش آمدید :) ")
    }
    else{
        alert("کد وارد شده نادرست است لطفا مجددا تلاش کنید ")
    }

function check(){
    if(document.frm.fname.value=="")
    {
        alert("enter your name")
        document.frm.fname.focus();
        return false;
    }
    var f=/^[A-Za-z]+$/;
    if(!f.test(document.frm.fname.value))
    {
    alert("Please enter your firstname alphbetic character only")
    document.frm.fname.focus();
    return false;
    }   


    if(document.frm.phone.value=="")
    {   
        alert("enter your number")
        document.frm.phone.focus();
        return false;
    }
    var p=/^[0-9]+$/;
    if(!p.test(document.frm.phone.value))
    {
    alert("pleas eneter a number")
    document.frm.phone.focus();
    return false;
    }


    if(document.frm.email.value=="")
    {
        alert("anter your email")
        document.frm.email.focus();
        return false;
    }
    var email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if(!e.test(document.frm.email.value))
    {
        alert("please enter your valid email")
        document.frm.emil.focus();
        return false;
    }
    if(document.frm.message.value=="")
    {
        alert("enter your message")
        document.frm.message.focus();
        return false;
    }
    var f=/^[A-Za-z]+$/;
    if(!m.test(document.frm.message.value))
    {
        alert("please enter your alphbetic character only")
        document.frm.message.focus();
        return false;

    }
    //  
}


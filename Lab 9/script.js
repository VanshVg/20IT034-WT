function validation()
{
    if(document.login_form.username.value=="")
    {
        alert("Please provide your Username");
        document.myForm.Name.focus() ;
        return false;
    }
}

function check(form)
{
if(form.userid.value=="sudhan" && form.pwd.value=="sudhan")
{
    return true;
}
else
{
    alert("Incorrect Username or Password")
    return false;
}
}
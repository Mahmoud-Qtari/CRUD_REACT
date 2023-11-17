export const validationData = (values) => {
    let error={};
    if(values.name.trim() ==''){
        //console.log(values.name);
        error.name="username is requered"
    }else if(values.name.trim().length < 3){
        error.name="username must at lest 3"
        //console.log(values.name);
    }
    if(values.email.trim() ==''){
        error.email="email is requered";
        //console.log(values.email);
    }else if(values.email.trim().length < 9){
        error.email="email must at lest 9";
        //console.log(values.email);
    }
    if(values.password.trim() ==''){
        error.password="password is requered";
        //console.log(values.password);
    }else if(values.password.trim().length < 3){
        error.password="password must at lest 3";
        //console.log(values.password);
    }
    return error;
}
import {API} from '../../backend';

export const signup = user =>{
    return fetch(`${API}/signup`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-type" :"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
}

export const signin = user =>{
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-type" :"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response=>{
        //after signin we need to handle the response using authenticate method
        return response.json();
    })
    .catch(err=>console.log(err))
}

export const authenticate=(data, next)=>{
    if(typeof window !== 'undefined'){
        //if user is signed in the token is set in localstorage
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
}

export const signout = next =>{
    if(typeof window !== 'undefined'){
        //if user is signed in the token is set in localstorage
        localStorage.removeItem('jwt');
        next();

        return fetch(`${API}/signout`, {
            method:"GET"
        })
        .then(res=>console.log('signout succeesss'))
        .catch(err=>console.log(err))
    }
}

export const isAuthenticated=()=>{
    if(typeof window === 'undefined'){
        return false;
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }else{
        return false;
    }
}
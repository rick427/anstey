class AuthService {
    static setSession(userData) {
      this.setId(userData.id);
      this.setToken(userData.authdata);
      this.setRole(userData.role.name);
      this.setPermissions(userData.permissions);
      this.setEmail(userData.email_address);
      this.setName(userData.name);
      this.setPhoneNumber(userData.phone_number);
    }

    static removeSession() {
        this.setId(null);
        this.setToken(null);
        this.setRole(null);
        this.setPermissions(null);
        this.setEmail(null);
        this.setName(null);
        this.setPhoneNumber(null);
    }

    static hasSession(){
        return (
            this.getId() !== null && this.getToken() !== null &&
            this.getRole() !== null && this.getPermissions() !== null &&
            this.getEmail() !== null && this.getName() !== null &&
            this.getPhoneNumber() !== null
        )
    }

    static setId(id){
        if(id){
           localStorage.setItem('anstey:auth:id', id); 
        }
        else{
            localStorage.removeItem('anstey:auth:id')
        }
    }

    static getId(){
        return localStorage.getItem('anstey:auth:id')
    } 

    static setToken(token){
        if(token){
           localStorage.setItem('anstey:auth:token', token); 
        }
        else{
            localStorage.removeItem('anstey:auth:token')
        }
    }

    static getToken(){
        return localStorage.getItem('anstey:auth:token')
    } 

    static setRole(role){
        if(role){
           localStorage.setItem('anstey:auth:role', role); 
        }
        else{
            localStorage.removeItem('anstey:auth:role')
        }
    }

    static getRole(){
        return localStorage.getItem('anstey:auth:role')
    } 

    static setPermissions(permissions){
        if(permissions){
           localStorage.setItem('anstey:auth:permissions', JSON.stringify(permissions)); 
        }
        else{
            localStorage.removeItem('anstey:auth:permissions')
        }
    }

    static getPermissions(){
        return JSON.parse(localStorage.getItem('anstey:auth:permissions'));
    } 

    static setEmail(email){
        if(email){
           localStorage.setItem('anstey:auth:email', email); 
        }
        else{
            localStorage.removeItem('anstey:auth:email')
        }
    }

    static getEmail(){
        return localStorage.getItem('anstey:auth:email')
    } 
    
    static setName(name){
        if(name){
           localStorage.setItem('anstey:auth:name', name); 
        }
        else{
            localStorage.removeItem('anstey:auth:name')
        }
    }

    static getName(){
        return localStorage.getItem('anstey:auth:name')
    } 

    static setPhoneNumber(phoneNumber){
        if(phoneNumber){
           localStorage.setItem('anstey:auth:phoneNumber', phoneNumber); 
        }
        else{
            localStorage.removeItem('anstey:auth:phoneNumber')
        }
    }
    
    static getPhoneNumber(){
        return localStorage.getItem('anstey:auth:phoneNumber')
    } 

    static getCartId(){
        return localStorage.getItem('anstey:cart_id')
    } 
}

export default AuthService;
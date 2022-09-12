const addLocalStorage = () =>{
    const userId = document.getElementById('user-id')
    const id = userId.value
    userId.value = '';
    const userValue= document.getElementById('user-value')
    const value = userValue.value;
    userValue.value = ''

    if ( id && value){
        localStorage.setItem(id, value)
    }

}
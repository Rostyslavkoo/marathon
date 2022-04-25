function askPassword(ok, fail) {
    let password = prompt('Пароль?', '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Іван',
  
    login(result) {
      alert( this.name + (result ? ' увійшов' : ' виконав невдалу спробу входу') );
    }
  };
  
  askPassword(user.login.bind(user,true),user.login.bind(user,false)); // ?
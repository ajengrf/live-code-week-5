class User {
  static login(user) {
    $.ajax({
      method: 'POST',
      url: `${server}/login`,
      data: user
    })
      .done(result => {
        console.log(result, "< result login client")
        localStorage.setItem('token', result)
        $loginForm.hide()
        $comicCollection.show()
        $logoutButton.show()
        Comic.getComic()
      })
      .catch(err => {
        console.log(err, '< error login client')
      })
  }

  static register(user) {
    $.ajax({
      method: 'POST',
      url: `${server}/register`,
      data: user
    })
      .done(result => {
        console.log(result, "< result register client")
        localStorage.setItem('token', result)
        $registerForm.hide()
        $logoutButton.show()
        $comicCollection.show()
        Comic.getComic()
      })
      .catch(err => {
        console.log(err, '< error register client')
      })
  }

  static randomUser() {
    $.ajax({
      method: 'GET',
      url: `${server}/register/random`,
    })
      .done(result => {
        console.log(result, '<<<')
        $('#nameRegister').val(result.name)
        $('#emailRegister').val(result.email)
        $('#passwordRegister').val(result.password)
      })
      .catch(err => {
        console.log(err, '< error register client')
      })
  }
}
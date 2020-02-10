const server = 'http://localhost:3000'

let $loginForm = $('#loginForm')
let $submitLogin = $('#submitLogin')

let $registerForm = $('#registerForm')
let $submitRegister = $('#submitRegister')

let $comicCollection = $('#comicCollection')
let $updateComic = $('#updateComic')
let $alert = $('#alert')
let $logoutButton = $('#logoutButton')

$registerForm.hide()
$alert.hide()
$updateComic.hide()


if (!localStorage.token) {
  $loginForm.show()
  $comicCollection.hide()
  $logoutButton.hide()

} else {
  $loginForm.hide()
  $logoutButton.show()
  Comic.getComic()

}

$('.register').on('click', (e) => {
  e.preventDefault()
  $loginForm.hide()
  $registerForm.show()
})

$('.login').on('click', (e) => {
  e.preventDefault()
  $loginForm.show()
  $registerForm.hide()
})

$('.randomUser').on('click', (e) => {
  e.preventDefault()
  User.randomUser()
})


$logoutButton.on('click', (e) => {
  localStorage.removeItem('token')
  $loginForm.show()
  $comicCollection.hide()
  $logoutButton.hide()
})

$submitLogin.on('submit', (e) => {
  e.preventDefault()
  console.log('login')

  let $emailLogin = $('#emailLogin').val()
  let $passwordLogin = $('#passwordLogin').val()

  let user = {
    email: $emailLogin,
    password: $passwordLogin
  }
  console.log(user, '< user')

  User.login(user)
})

$submitRegister.on('submit', (e) => {
  e.preventDefault()
  console.log('register')

  let $nameRegister = $('#nameRegister').val()
  let $emailRegister = $('#emailRegister').val()
  let $passwordRegister = $('#passwordRegister').val()

  let user = {
    name: $nameRegister,
    email: $emailRegister,
    password: $passwordRegister
  }
  console.log(user, '< user')

  User.register(user)
})


$(this).on('click', (e) => {
  if (document.activeElement.id == 'editComic') {
    e.preventDefault()
    console.log('edit')
    $updateComic.show()
  }
})

$updateComic.on('submit', (e) => {
  e.preventDefault()
  console.log('submit edit!')

  let $idUpdate = $('#idUpdate').val()
  let $titleUpdate = $('#titleUpdate').val()
  let $authorUpdate = $('#authorUpdate').val()
  let $imageUpdate = $('#imageUpdate').val()

  let comic = {
    title: $titleUpdate,
    author: $authorUpdate,
    imageUpdate: $imageUpdate
  }

  console.log($idUpdate, '<<<')

  Comic.update(comic, $idUpdate)
})
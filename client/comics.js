class Comic {
  static getComic() {
    $.ajax({
      headers: {
        token: localStorage.token
      },
      method: 'GET',
      url: `${server}/comics`
    })
      .done(result => {
        console.log(result, "< result getcomic client")
        this.showComics(result)
      })
      .catch(err => {
        console.log(err, '< error getcomic client')
      })
  }

  static showComics(comics) {
    let $allComic = $('#allComic')
    $allComic.empty()

    let templateComic = `<div class="col-4 mb-4">
                <div class="card text-center">
                  <img id="image" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title" id="title"></h5>
                    <p class="card-text" id="author"></p>
                    <a class="btn btn-primary" id="editComic" role="button">Edit</a>
                  </div>
                </div>
                </div>`

    for (let i = 0; i < comics.length; i++) {
      let $item = $(templateComic)
      $item.find('#image').prop('src', comics[i].imageUrl)
      $item.find('#title').text(comics[i].title)
      $item.find('#author').text(comics[i].author)
      $item.find('#editComic').prop('href', `${server}/comics/${comics[i].id}`)

      $allComic.append($item)
    }
  }

  static findOne() {
    $.ajax({
      headers: {
        token: localStorage.token
      },
      method: 'PUT',
      url: url
    })
      .done(result => {
        console.log(update, "< result update comic client")
        this.showComics(result)
      })
      .catch(err => {
        console.log(err, '< error update client')
      })
  }

  static update(comic, id) {
    console.log(id, '< ini id')
    $.ajax({
      headers: {
        token: localStorage.token
      },
      method: 'PUT',
      url: `${server}/comics/${id}`,
      data: comic
    })
      .done(result => {
        console.log(update, "< result update comic client")
        this.showComics(result)
      })
      .catch(err => {
        console.log(err, '< error update client')
      })
  }
}
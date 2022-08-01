function Main() {
  return (
    <main class="page">
      <section class="profile">
        <div class="profile__section-avatar">
          <button class="profile__edit-icon"></button>
          <img class="profile__photo" src="<%=require('./images/image-prof.png')%>" alt="фото профиля" />
        </div>
        <h1 class="profile__name">Жак-Ив Кусто</h1>
        <p class="profile__description">Исследователь океана</p>
        <button class="profile__btn-edit" type="button"></button>
        <button class="profile__btn-add" type="button"></button>
      </section>
      <section class="gallery" aria-label="галерея"></section>
    </main>
  )
}

export default Main;
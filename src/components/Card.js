function Card() {
  return (
    <template id="tempCard">
      <article className="gallery__card">
        <img className="gallery__card-img" src="#" alt="#" />
        <button className="gallery__btn-trash"></button>
        <div className="gallery__card-header">
          <h3 className="gallery__card-name"> </h3>
          <div className="gallery__favorites-header">
            <button className="gallery__btn-favorites" type="button"></button>
            <div className="gallery__counter-favorites">0</div>
          </div>
        </div>
      </article>
    </template>
  )
}

export default Card;
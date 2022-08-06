function Card(props) {

  return (
    <article className="gallery__card">
      <img className="gallery__card-img" src={`${props.card.link}`} alt={`${props.card.name}`} />
      <button className="gallery__btn-trash"></button>
      <div className="gallery__card-header">
        <h3 className="gallery__card-name">{props.card.name}</h3>
        <div className="gallery__favorites-header">
          <button className="gallery__btn-favorites" type="button"></button>
          <div className="gallery__counter-favorites">{props.card.likes.length}</div>
        </div>
      </div>
    </article>
  )
}

export default Card;
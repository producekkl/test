const Card = ({ card, className = '' }) => {
  return (
    <div className={`card-hover ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-full object-cover image-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4">
            {card.category}
          </span>
          <h3 className="text-3xl font-bold mb-2">{card.title}</h3>
          <p className="text-white/90">{card.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card; 
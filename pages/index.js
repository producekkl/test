import { useState } from 'react';
import Card from '../components/Card';

export default function Home() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "디자인의 미래",
      content: "현대적인 디자인 트렌드와 사용자 경험에 대한 깊이 있는 통찰력을 공유합니다.",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop",
      category: "Design"
    },
    {
      id: 2,
      title: "창의성의 순간",
      content: "영감을 주는 순간들과 창의적인 과정에 대한 이야기를 나눕니다.",
      imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop",
      category: "Creativity"
    }
  ]);

  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="pt-16 pb-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="gradient-text text-5xl font-bold text-center leading-tight tracking-normal">
            카드 뉴스 시험관
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Featured Stories</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore our collection of thoughtful insights and creative perspectives.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={prevCard}
                className="btn px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                Previous
              </button>
              <button
                onClick={nextCard}
                className="btn px-8 py-3 bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-300"
              >
                Next
              </button>
            </div>
          </div>

          <Card card={cards[currentCard]} />
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentCard === index ? 'bg-gray-900' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}


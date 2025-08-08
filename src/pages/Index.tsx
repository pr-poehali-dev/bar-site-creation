import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCocktail, setSelectedCocktail] = useState<number | null>(null);

  const cocktails = [
    {
      id: 1,
      name: 'Олд Фэшн',
      ingredients: ['Виски', 'Сахарный сироп', 'Ангостура', 'Лёд'],
      description: 'Классический коктейль с насыщенным вкусом виски и легкими нотками сладости',
      price: '650₽',
      category: 'Классика',
      strength: 'Крепкий'
    },
    {
      id: 2,
      name: 'Мартини Эспрессо',
      ingredients: ['Водка', 'Кофейный ликер', 'Эспрессо', 'Сироп'],
      description: 'Современная интерпретация классики с бодрящим эспрессо',
      price: '580₽',
      category: 'Авторская',
      strength: 'Средний'
    },
    {
      id: 3,
      name: 'Негрони',
      ingredients: ['Джин', 'Кампари', 'Вермут', 'Апельсин'],
      description: 'Горько-сладкий итальянский коктейль с цитрусовыми нотками',
      price: '620₽',
      category: 'Классика',
      strength: 'Крепкий'
    },
    {
      id: 4,
      name: 'Мохито',
      ingredients: ['Белый ром', 'Мята', 'Лайм', 'Содовая', 'Сахар'],
      description: 'Освежающий кубинский коктейль с мятой и лаймом',
      price: '520₽',
      category: 'Освежающие',
      strength: 'Легкий'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">АДЕТАГМИТИА</h1>
          <div className="flex space-x-8">
            <a href="#menu" className="hover:text-accent transition-colors">Меню</a>
            <a href="#interior" className="hover:text-accent transition-colors">Интерьер</a>
            <a href="#booking" className="hover:text-accent transition-colors">Бронирование</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/img/f1f62c60-cffd-4038-b627-02425e28f087.jpg)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h2 className="text-6xl font-bold mb-6">Добро пожаловать в АДЕТАГМИТИА</h2>
          <p className="text-xl mb-8 opacity-90">
            Уютная атмосфера, авторские коктейли и незабываемые вечера в сердце города
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Icon name="Wine" className="mr-2" size={20} />
            Посмотреть меню
          </Button>
        </div>
      </section>

      {/* Cocktail Menu */}
      <section id="menu" className="py-20 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Коктейльная карта</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя мир вкусов в нашей интерактивной коктейльной карте
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cocktails.map((cocktail) => (
              <Card 
                key={cocktail.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  selectedCocktail === cocktail.id ? 'ring-2 ring-accent shadow-lg' : ''
                }`}
                onClick={() => setSelectedCocktail(selectedCocktail === cocktail.id ? null : cocktail.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{cocktail.name}</CardTitle>
                    <Badge variant={cocktail.strength === 'Крепкий' ? 'destructive' : cocktail.strength === 'Средний' ? 'secondary' : 'outline'}>
                      {cocktail.strength}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{cocktail.category}</Badge>
                    <span className="text-lg font-bold text-accent">{cocktail.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {cocktail.description}
                  </CardDescription>
                  
                  {selectedCocktail === cocktail.id && (
                    <div className="animate-accordion-down">
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-2">Состав:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cocktail.ingredients.map((ingredient, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {ingredient}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mt-4">
                    <Icon 
                      name={selectedCocktail === cocktail.id ? "ChevronUp" : "ChevronDown"} 
                      size={16}
                      className="text-muted-foreground"
                    />
                    <Button variant="outline" size="sm">
                      <Icon name="ShoppingCart" size={14} className="mr-1" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section id="interior" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Интерьер</h2>
            <p className="text-lg text-muted-foreground">
              Погрузитесь в атмосферу уюта и элегантности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Уютная атмосфера</h3>
              <p className="text-muted-foreground mb-6">
                Наш интерьер сочетает в себе современные решения и классические элементы. 
                Тёплые тона, мягкий свет и комфортабельная мебель создают идеальную обстановку 
                для романтического ужина или встречи с друзьями.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary">
                  <Icon name="Users" size={14} className="mr-1" />
                  До 80 гостей
                </Badge>
                <Badge variant="secondary">
                  <Icon name="Music" size={14} className="mr-1" />
                  Живая музыка
                </Badge>
                <Badge variant="secondary">
                  <Icon name="Wifi" size={14} className="mr-1" />
                  Wi-Fi
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/1a5a4665-14ec-4c78-80ee-8d8a7ceb96f2.jpg" 
                alt="Интерьер бара"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Бронирование</h2>
            <p className="text-lg text-muted-foreground">
              Забронируйте столик и насладитесь незабываемым вечером
            </p>
          </div>
          
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 999-99-99" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Дата</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Время</label>
                  <Input type="time" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Количество гостей</label>
                  <Input type="number" min="1" max="10" placeholder="2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Предпочтения</label>
                  <Input placeholder="У окна, тихий столик..." />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Комментарий</label>
                <Textarea placeholder="Дополнительные пожелания..." />
              </div>
              
              <Button className="w-full bg-accent hover:bg-accent/90">
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать столик
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Мы будем рады видеть вас в АДЕТАГМИТИА
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Как нас найти</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-accent" />
                  <span>ул. Мира, 15, Москва, 101000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-accent" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-accent" />
                  <span>info@adetagmitia.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-accent" />
                  <span>Пн-Вс: 18:00 - 02:00</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Следите за нами</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Icon name="Instagram" size={16} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Facebook" size={16} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Twitter" size={16} />
                  </Button>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <h4 className="text-lg font-semibold mb-4">Написать нам</h4>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Ваше сообщение..." />
                <Button className="w-full">
                  <Icon name="Send" className="mr-2" size={16} />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">АДЕТАГМИТИА</h3>
          <p className="opacity-80 mb-4">Бар с душой в центре Москвы</p>
          <p className="text-sm opacity-60">
            © 2024 АДЕТАГМИТИА. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
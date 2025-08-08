import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Фирменный стиль Kalinkina Estate
          </h1>
          <p className="text-lg text-muted-foreground">
            Логотип, визитка и вывеска в стиле MONO
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* Логотип */}
          <Card className="p-8 bg-card shadow-xl">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Логотип</h2>
              
              <div className="bg-primary p-8 rounded-xl text-center mb-6">
                <div className="mb-6">
                  <div className="text-6xl font-light text-primary-foreground tracking-[0.2em] mb-2">
                    OK
                  </div>
                </div>
                <h3 className="text-2xl font-light text-primary-foreground tracking-[0.15em]">
                  KALINKINA
                </h3>
                <p className="text-lg text-primary-foreground/80 tracking-[0.1em] mt-1">
                  ESTATE
                </p>
              </div>

              {/* Варианты логотипа */}
              <div className="space-y-4">
                <div className="bg-secondary p-6 rounded-lg text-center">
                  <div className="text-3xl font-light text-secondary-foreground tracking-[0.15em] mb-2">
                    OK
                  </div>
                  <h4 className="text-lg font-light text-secondary-foreground tracking-[0.1em]">
                    KALINKINA ESTATE
                  </h4>
                </div>

                <div className="bg-card border border-muted p-6 rounded-lg text-center">
                  <div className="text-3xl font-light text-accent tracking-[0.15em] mb-2">
                    OK
                  </div>
                  <h4 className="text-lg font-light text-foreground tracking-[0.1em]">
                    KALINKINA ESTATE
                  </h4>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Визитка */}
          <Card className="p-8 bg-card shadow-xl">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Визитка</h2>
              
              {/* Лицевая сторона */}
              <div className="bg-primary p-6 rounded-xl text-primary-foreground mb-4 aspect-[1.75/1] flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-2xl font-light tracking-[0.15em] mb-1">OK</div>
                    <div>
                      <h3 className="text-sm font-light tracking-[0.1em]">KALINKINA</h3>
                      <h4 className="text-sm font-light tracking-[0.1em] opacity-80">ESTATE</h4>
                    </div>
                  </div>
                  <Icon name="Home" size={20} className="opacity-60" />
                </div>
                
                <div>
                  <h3 className="text-base font-normal mb-1">Калинкина Оксана Павловна</h3>
                  <p className="text-xs opacity-80">Риэлтор • Юрист по недвижимости</p>
                </div>
              </div>

              {/* Обратная сторона */}
              <div className="bg-card border border-muted p-6 rounded-xl aspect-[1.75/1] flex flex-col justify-center space-y-3">
                <div className="flex items-center space-x-3 text-foreground">
                  <Icon name="Phone" size={14} className="text-muted-foreground" />
                  <span className="text-sm font-light">8 902 353 02 01</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground">
                  <Icon name="Mail" size={14} className="text-muted-foreground" />
                  <span className="text-sm font-light">o.kalinkina@estate.com</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground">
                  <Icon name="MapPin" size={14} className="text-muted-foreground" />
                  <span className="text-sm font-light">Москва</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground">
                  <Icon name="Globe" size={14} className="text-muted-foreground" />
                  <span className="text-sm font-light">kalinkina-estate.ru</span>
                </div>
              </div>

              <Badge variant="secondary" className="w-full justify-center mt-4">
                85 × 55 мм (стандарт)
              </Badge>
            </CardContent>
          </Card>

          {/* Вывеска */}
          <Card className="p-8 bg-card shadow-xl lg:col-span-2 xl:col-span-1">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Вывеска</h2>
              
              <div className="bg-primary p-8 rounded-xl text-primary-foreground aspect-[4/3] flex flex-col justify-between">
                {/* Верхняя часть с логотипом */}
                <div className="text-center">
                  <div className="text-4xl font-light tracking-[0.2em] mb-3">OK</div>
                  <h2 className="text-xl font-light tracking-[0.15em]">KALINKINA</h2>
                  <p className="text-lg font-light tracking-[0.1em] opacity-80">ESTATE</p>
                </div>

                {/* Центральная часть с информацией */}
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-normal">Калинкина Оксана Павловна</h3>
                  <p className="text-base opacity-80">Риэлтор, юрист по недвижимости</p>
                  <p className="text-xl font-light tracking-wider">8 902 353 02 01</p>
                </div>

                {/* Нижняя часть с QR-кодом */}
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm opacity-70">Сканируйте QR-код</p>
                    <p className="text-xs opacity-60">Наши соц. сети</p>
                  </div>
                  <div className="w-16 h-16 bg-primary-foreground rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary rounded grid grid-cols-4 gap-px p-1">
                      {Array.from({length: 16}).map((_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? 'bg-primary-foreground' : 'bg-primary'} rounded-sm`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <Badge variant="outline" className="w-full justify-center">
                  Рекомендуемый размер: 40 × 30 см
                </Badge>
                <Badge variant="secondary" className="w-full justify-center">
                  Материал: композит/пластик
                </Badge>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Цветовая схема MONO */}
        <Card className="mt-8 p-8 bg-card shadow-xl">
          <CardContent className="p-0">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Цветовая палитра MONO</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-20 bg-primary rounded-lg mb-2"></div>
                <p className="font-semibold text-sm">Основной</p>
                <p className="text-xs text-muted-foreground">Тёмно-серый</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-secondary rounded-lg mb-2"></div>
                <p className="font-semibold text-sm">Зелёный</p>
                <p className="text-xs text-muted-foreground">Природный</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-accent rounded-lg mb-2"></div>
                <p className="font-semibold text-sm">Золотой</p>
                <p className="text-xs text-muted-foreground">Металлик</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-background border-2 border-muted rounded-lg mb-2"></div>
                <p className="font-semibold text-sm">Белый</p>
                <p className="text-xs text-muted-foreground">Чистый</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Сочетание металла с чёрным, белым и зелёным
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Рекомендации */}
        <Card className="mt-8 p-8 bg-card border border-muted">
          <CardContent className="p-0">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Рекомендации по печати</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon name="Printer" size={32} className="mx-auto mb-3 text-accent" />
                <h3 className="font-semibold mb-2">Визитки</h3>
                <p className="text-sm text-muted-foreground">Плотная бумага 300г/м², матовая ламинация</p>
              </div>
              <div className="text-center">
                <Icon name="Monitor" size={32} className="mx-auto mb-3 text-secondary" />
                <h3 className="font-semibold mb-2">Вывеска</h3>
                <p className="text-sm text-muted-foreground">Композит с УФ-печатью, защита от выгорания</p>
              </div>
              <div className="text-center">
                <Icon name="Smartphone" size={32} className="mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">QR-код</h3>
                <p className="text-sm text-muted-foreground">Ссылка на ваши соцсети или сайт</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-muted/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-center">Особенности стиля MONO</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  • Минималистичная типографика<br/>
                  • Увеличенные межбуквенные интервалы<br/>
                  • Монохромная основа с акцентами
                </div>
                <div>
                  • Премиальное ощущение качества<br/>
                  • Универсальность использования<br/>
                  • Легко масштабируемые элементы
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Index;
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Фирменный стиль Kalinkina Realty
          </h1>
          <p className="text-lg text-slate-600">
            Логотип, визитка и вывеска в едином стиле
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* Логотип */}
          <Card className="p-8 bg-white shadow-xl">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Логотип</h2>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl text-center mb-6">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-lg mb-4">
                    <span className="text-4xl font-black text-blue-700 tracking-tight">OK</span>
                  </div>
                </div>
                <h3 className="text-2xl font-light text-white tracking-wider">
                  KALINKINA REALTY
                </h3>
              </div>

              {/* Варианты логотипа */}
              <div className="space-y-4">
                <div className="bg-slate-800 p-6 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-lg mb-3">
                    <span className="text-2xl font-black text-blue-700">OK</span>
                  </div>
                  <h4 className="text-lg font-light text-white tracking-wide">
                    KALINKINA REALTY
                  </h4>
                </div>

                <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 rounded-xl shadow-lg mb-3">
                    <span className="text-2xl font-black text-white">OK</span>
                  </div>
                  <h4 className="text-lg font-light text-blue-700 tracking-wide">
                    KALINKINA ESTATE
                  </h4>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Визитка */}
          <Card className="p-8 bg-white shadow-xl">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Визитка</h2>
              
              {/* Лицевая сторона */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl text-white mb-4 aspect-[1.75/1] flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-lg font-black text-blue-700">OK</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-light tracking-wider">KALINKINA</h3>
                      <h4 className="text-sm font-light tracking-wider">REALTY</h4>
                    </div>
                  </div>
                  <Icon name="Home" size={24} className="text-blue-200" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-1">Калинкина Оксана Павловна</h3>
                  <p className="text-sm text-blue-100">Риэлтор • Юрист по недвижимости</p>
                </div>
              </div>

              {/* Обратная сторона */}
              <div className="bg-white border-2 border-blue-100 p-6 rounded-xl aspect-[1.75/1] flex flex-col justify-center space-y-3">
                <div className="flex items-center space-x-3 text-slate-700">
                  <Icon name="Phone" size={16} className="text-blue-600" />
                  <span className="text-sm font-medium">8 902 353 02 01</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700">
                  <Icon name="Mail" size={16} className="text-blue-600" />
                  <span className="text-sm font-medium">o.kalinkina@realty.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700">
                  <Icon name="MapPin" size={16} className="text-blue-600" />
                  <span className="text-sm font-medium">Москва</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700">
                  <Icon name="Globe" size={16} className="text-blue-600" />
                  <span className="text-sm font-medium">kalinkina-realty.ru</span>
                </div>
              </div>

              <Badge variant="secondary" className="w-full justify-center mt-4">
                85 × 55 мм (стандарт)
              </Badge>
            </CardContent>
          </Card>

          {/* Вывеска */}
          <Card className="p-8 bg-white shadow-xl lg:col-span-2 xl:col-span-1">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Вывеска</h2>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl text-white aspect-[4/3] flex flex-col justify-between">
                {/* Верхняя часть с логотипом */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-4">
                    <span className="text-3xl font-black text-blue-700">OK</span>
                  </div>
                  <h2 className="text-2xl font-light tracking-wider">KALINKINA REALTY</h2>
                </div>

                {/* Центральная часть с информацией */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">Калинкина Оксана Павловна</h3>
                  <p className="text-lg text-blue-100">Риэлтор, юрист по недвижимости</p>
                  <p className="text-2xl font-bold tracking-wider">8 902 353 02 01</p>
                </div>

                {/* Нижняя часть с QR-кодом */}
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm text-blue-200">Сканируйте QR-код</p>
                    <p className="text-xs text-blue-300">Наши соц. сети</p>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-slate-800 rounded grid grid-cols-4 gap-px p-1">
                      {Array.from({length: 16}).map((_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-slate-800'} rounded-sm`} />
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

        {/* Цветовая схема */}
        <Card className="mt-8 p-8 bg-white shadow-xl">
          <CardContent className="p-0">
            <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Цветовая схема</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-20 bg-blue-700 rounded-lg mb-2"></div>
                <p className="font-semibold text-sm">Основной</p>
                <p className="text-xs text-slate-500">#1D4ED8</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-blue-100 rounded-lg mb-2"></div>
                <p className="font-semibold text-sm">Светлый</p>
                <p className="text-xs text-slate-500">#DBEAFE</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-slate-800 rounded-lg mb-2"></div>
                <p className="font-semibold text-sm">Темный</p>
                <p className="text-xs text-slate-500">#1E293B</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-white border-2 border-slate-200 rounded-lg mb-2"></div>
                <p className="font-semibold text-sm">Белый</p>
                <p className="text-xs text-slate-500">#FFFFFF</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Рекомендации */}
        <Card className="mt-8 p-8 bg-gradient-to-r from-blue-50 to-slate-50 border-blue-200">
          <CardContent className="p-0">
            <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Рекомендации по печати</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon name="Printer" size={32} className="mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold mb-2">Визитки</h3>
                <p className="text-sm text-slate-600">Плотная бумага 300г/м², матовая или глянцевая ламинация</p>
              </div>
              <div className="text-center">
                <Icon name="Monitor" size={32} className="mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold mb-2">Вывеска</h3>
                <p className="text-sm text-slate-600">Композитный материал с УФ-печатью, защита от выгорания</p>
              </div>
              <div className="text-center">
                <Icon name="Smartphone" size={32} className="mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold mb-2">QR-код</h3>
                <p className="text-sm text-slate-600">Генерируйте ссылку на ваши социальные сети или сайт</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Index;
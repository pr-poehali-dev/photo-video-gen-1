import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Wand2",
      title: "Готовые шаблоны",
      description: "Библиотека профессиональных пресетов для быстрого старта любого проекта"
    },
    {
      icon: "Sparkles",
      title: "AI-генерация",
      description: "Создавайте уникальный контент высочайшего качества за считанные секунды"
    },
    {
      icon: "Settings2",
      title: "Гибкая настройка",
      description: "Точная подстройка каждого параметра для достижения идеального результата"
    },
    {
      icon: "Zap",
      title: "Мгновенная обработка",
      description: "Высокая скорость генерации без потери качества изображения или видео"
    },
    {
      icon: "Layers",
      title: "Пакетная обработка",
      description: "Создавайте сотни изображений одновременно с единым стилем"
    },
    {
      icon: "BarChart3",
      title: "Аналитика проектов",
      description: "Отслеживайте эффективность и качество сгенерированного контента"
    }
  ];

  const examples = [
    {
      image: "https://cdn.poehali.dev/projects/aca8bed5-0c43-43fa-806b-b73969f716fa/files/37056e65-65d9-440b-a6ce-c83f4c7ef37e.jpg",
      title: "Корпоративная фотография",
      category: "Фото"
    },
    {
      image: "https://cdn.poehali.dev/projects/aca8bed5-0c43-43fa-806b-b73969f716fa/files/7acb76c6-92db-49db-901a-8035b294b480.jpg",
      title: "Продуктовая съёмка",
      category: "Видео"
    },
    {
      image: "https://cdn.poehali.dev/projects/aca8bed5-0c43-43fa-806b-b73969f716fa/files/0d6b2de5-736d-4a1a-aa91-077abe008041.jpg",
      title: "Бизнес-портрет",
      category: "Фото"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Camera" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              GenAI Studio
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">
              Примеры
            </a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Войти
            </Button>
            <Button className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90">
              Начать бесплатно
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              Профессиональная AI-генерация
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Создавайте фото и видео
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              с помощью ИИ
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мощная платформа для генерации профессионального визуального контента. 
            Встроенные шаблоны, гибкая настройка, мгновенный результат.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-lg px-8">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть демо
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" className="text-primary" size={20} />
              <span>Без кредитной карты</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" className="text-primary" size={20} />
              <span>50 генераций в подарок</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Возможности платформы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Всё необходимое для создания профессионального контента в одном месте
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon as any} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Примеры работ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты, созданные нашей AI-платформой
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-semibold mb-2">
                      {example.category}
                    </span>
                    <h3 className="text-xl font-bold">{example.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-8">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              Посмотреть всю галерею
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Готовы создать свой первый проект?
            </h2>
            <p className="text-xl opacity-90">
              Присоединяйтесь к тысячам компаний, которые уже используют GenAI Studio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-primary hover:bg-gray-100">
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-white text-white hover:bg-white hover:text-primary">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Camera" className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold">GenAI Studio</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональная платформа для создания визуального контента с помощью ИИ
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm opacity-60">
            <p>© 2026 GenAI Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

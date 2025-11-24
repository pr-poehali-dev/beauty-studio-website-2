import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const services = [
  { 
    id: 1, 
    category: 'Волосы',
    items: [
      { name: 'Стрижка женская', price: 2500, duration: '60 мин' },
      { name: 'Стрижка мужская', price: 1500, duration: '40 мин' },
      { name: 'Окрашивание', price: 5000, duration: '180 мин' },
      { name: 'Укладка', price: 2000, duration: '45 мин' },
    ]
  },
  { 
    id: 2, 
    category: 'Макияж',
    items: [
      { name: 'Дневной макияж', price: 3000, duration: '60 мин' },
      { name: 'Вечерний макияж', price: 4500, duration: '90 мин' },
      { name: 'Свадебный макияж', price: 6000, duration: '120 мин' },
    ]
  },
  { 
    id: 3, 
    category: 'Ногти',
    items: [
      { name: 'Маникюр', price: 1800, duration: '60 мин' },
      { name: 'Педикюр', price: 2200, duration: '75 мин' },
      { name: 'Наращивание ногтей', price: 3500, duration: '120 мин' },
    ]
  },
  { 
    id: 4, 
    category: 'Брови и ресницы',
    items: [
      { name: 'Коррекция бровей', price: 800, duration: '30 мин' },
      { name: 'Окрашивание бровей', price: 600, duration: '20 мин' },
      { name: 'Наращивание ресниц', price: 3000, duration: '120 мин' },
    ]
  },
];

const masters = [
  { 
    id: 1, 
    name: 'Анна Петрова', 
    specialization: 'Стилист-колорист', 
    experience: '8 лет', 
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    description: 'Специалист по сложным окрашиваниям и стрижкам'
  },
  { 
    id: 2, 
    name: 'Мария Иванова', 
    specialization: 'Визажист', 
    experience: '6 лет', 
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    description: 'Эксперт по свадебному и вечернему макияжу'
  },
  { 
    id: 3, 
    name: 'Екатерина Сидорова', 
    specialization: 'Мастер маникюра', 
    experience: '5 лет', 
    photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop',
    description: 'Nail-арт и укрепление ногтей'
  },
  { 
    id: 4, 
    name: 'Ольга Козлова', 
    specialization: 'Brow-мастер', 
    experience: '4 года', 
    photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
    description: 'Архитектура бровей и lash-стилист'
  },
];

const portfolio = [
  { id: 1, image: 'https://cdn.poehali.dev/projects/a0e711b0-498e-43d4-af89-785a63d6aee8/files/34842d5a-8351-492f-97b0-9c686856334a.jpg', category: 'Макияж' },
  { id: 2, image: 'https://images.unsplash.com/photo-1560869713-bf165a013407?w=600', category: 'Волосы' },
  { id: 3, image: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=600', category: 'Ногти' },
  { id: 4, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600', category: 'Брови' },
  { id: 5, image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600', category: 'Волосы' },
  { id: 6, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600', category: 'Макияж' },
];

const reviews = [
  { id: 1, name: 'Елена М.', rating: 5, text: 'Потрясающий результат! Анна сделала невероятное окрашивание, волосы выглядят шикарно. Обязательно вернусь!', service: 'Окрашивание' },
  { id: 2, name: 'Ирина К.', rating: 5, text: 'Мария - настоящий профессионал! Свадебный макияж был идеальным, продержался весь день.', service: 'Свадебный макияж' },
  { id: 3, name: 'Светлана П.', rating: 5, text: 'Лучший маникюр в городе! Екатерина очень внимательная, работает аккуратно. Маникюр держится 3 недели!', service: 'Маникюр' },
  { id: 4, name: 'Анастасия Д.', rating: 5, text: 'Ольга творит чудеса с бровями! Форма идеальная, теперь хожу только к ней.', service: 'Архитектура бровей' },
];

const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

export default function Index() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedMaster, setSelectedMaster] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState('');

  const handleBooking = () => {
    alert(`Запись успешно создана!\n\nУслуга: ${selectedService}\nМастер: ${selectedMaster}\nДата: ${selectedDate?.toLocaleDateString('ru-RU')}\nВремя: ${selectedTime}`);
    setBookingOpen(false);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Креатив</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#masters" className="text-sm font-medium hover:text-primary transition-colors">Мастера</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary">
                <Icon name="Calendar" className="mr-2 h-4 w-4" />
                Записаться
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Онлайн-запись</DialogTitle>
                <DialogDescription>
                  Выберите услугу, мастера и удобное время
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="service">Услуга</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map(category => (
                        <div key={category.id}>
                          <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">{category.category}</div>
                          {category.items.map(item => (
                            <SelectItem key={item.name} value={item.name}>
                              {item.name} - {item.price}₽ ({item.duration})
                            </SelectItem>
                          ))}
                        </div>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="master">Мастер</Label>
                  <Select value={selectedMaster} onValueChange={setSelectedMaster}>
                    <SelectTrigger id="master">
                      <SelectValue placeholder="Выберите мастера" />
                    </SelectTrigger>
                    <SelectContent>
                      {masters.map(master => (
                        <SelectItem key={master.id} value={master.name}>
                          {master.name} - {master.specialization}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label>Дата</Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="time">Время</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map(time => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Введите имя" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 999-99-99" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea id="comment" placeholder="Дополнительные пожелания" />
                </div>

                <Button 
                  onClick={handleBooking} 
                  className="gradient-primary w-full"
                  disabled={!selectedService || !selectedMaster || !selectedDate || !selectedTime}
                >
                  Записаться
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-accent via-white to-muted">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 gradient-primary text-white">Премиум студия красоты</Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
            Студия красоты «Креатив»
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Профессиональный уход за вашей красотой. Современные техники, опытные мастера, индивидуальный подход.
          </p>
          <div className="flex gap-4 justify-center">
            <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gradient-primary text-lg px-8">
                  Записаться онлайн
                  <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
            </Dialog>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              +7 (999) 123-45-67
            </Button>
          </div>
          <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.poehali.dev/projects/a0e711b0-498e-43d4-af89-785a63d6aee8/files/39cdd250-f144-4e8c-9791-752a1f156a72.jpg" 
              alt="Студия красоты Креатив" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Широкий спектр услуг для вашей красоты</p>
          </div>
          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {services.map((category, index) => (
                <TabsTrigger key={category.id} value={index.toString()}>
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {services.map((category, index) => (
              <TabsContent key={category.id} value={index.toString()} className="mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map(item => (
                    <Card key={item.name} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          <Badge variant="secondary" className="bg-secondary text-white">{item.price}₽</Badge>
                        </div>
                        <CardDescription>
                          <Icon name="Clock" className="inline h-4 w-4 mr-1" />
                          {item.duration}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="masters" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши мастера</h2>
            <p className="text-lg text-muted-foreground">Профессионалы своего дела с многолетним опытом</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {masters.map(master => (
              <Card key={master.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={master.photo} 
                    alt={master.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{master.name}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="font-medium text-primary">{master.specialization}</div>
                    <div className="text-sm">Опыт: {master.experience}</div>
                    <div className="text-sm mt-2">{master.description}</div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-lg text-muted-foreground">Примеры наших работ</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolio.map(item => (
              <div key={item.id} className="relative group overflow-hidden rounded-lg aspect-square">
                <img 
                  src={item.image} 
                  alt={item.category} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <Badge className="bg-white text-primary">{item.category}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map(review => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">{review.service}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Мы всегда рады вам помочь</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Адрес</CardTitle>
                <CardDescription>
                  г. Москва, ул. Примерная, д. 1<br />
                  ТЦ "Красота", 2 этаж
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                  <Icon name="Phone" className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Телефон</CardTitle>
                <CardDescription>
                  +7 (999) 123-45-67<br />
                  Ежедневно 9:00 - 21:00
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                  <Icon name="Mail" className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  info@kreativ-beauty.ru<br />
                  Ответим в течение часа
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gradient-primary text-lg px-12">
                  Записаться на услугу
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2 gradient-text">Студия красоты «Креатив»</h3>
          <p className="text-sm opacity-80">© 2024 Все права защищены</p>
          <div className="flex gap-4 justify-center mt-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="MessageCircle" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
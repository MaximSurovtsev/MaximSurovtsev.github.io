from random import choice, randint
import json 


doctors = ['Содовский Авдей Куприянович', 'Володина Ульяна Иосифовна', 'Никулина Антонина Романовна', 'Илюшин Владимир Еремеевич', 'Юганцев Кир Георгиевич' 
,'Жутов Павел Леонович','Арзамасцева Владислава Станиславовна','Первак Валентин Афанасиевич','Борцова Елизавета Всеволодовна','Дудинов Валерий Егорович','Бабанова Стела Феликсовна','Петров Петр Петрович', 'Краснов Дмитрий Валерьевич', 'Серов Александр Игнатьевич', 'Пылкин Алексей Иванович', 'Иванюк Геннадий Анатольевич']
times = ['{:02}:{:02}'.format(randint(8, 16), randint(0, 59)) for x in range(100)]
direction = ['Хирург', 'Уролог', 'Гинеколог', 'Терапевт', 'Кардиолог', 'Оториноларинголог', 'Офтальмолог', 'Невролог', 'Дерматолог', 'Косметолог', 'Аллерголог', 'Инфекционист']
data = []
for i in range(20):
	item = {}
	item['id'] = i + 1
	item['doctor'] = choice(doctors)
	item['time'] = {day: sorted([choice(times) for x in range(randint(3, 10))]) for day in sorted(['{:02}.08.2020'.format(randint(2, 31)) for x in range(10)])}
	item['direction'] = choice(direction)
	data.append(item)
with open('data.json', 'w') as file:
	json.dump(data, file, indent=4, ensure_ascii=False)




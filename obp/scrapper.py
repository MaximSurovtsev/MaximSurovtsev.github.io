# import requests 
# from bs4 import BeautifulSoup

# r = requests.get('https://www.fgu-obp.ru/price/list_price/priem_vracha/#all1627')
# html = BeautifulSoup(r.text, 'html.parser')

# tables = html.find_all('table', class_='content-table')

# data = {}

# for table in tables:
# 	title = table.find('h3').text

# 	tbody = table.find_all('tbody')
# 	if len(tbody) == 1:
# 		tbody = tbody[0]
# 	elif len(tbody) == 0:
# 		continue
# 	else:
# 		tbody = tbody[1]
	
# 	offers = []

# 	for tr in tbody.find_all('tr'):
# 		item = [td.text for td in tr.find_all('td')]
# 		if item:
# 			id, name, cost = item
# 			offer = dict(id=id, title=name.replace('    ', ' '), price=cost)
# 			offers.append(offer)

# 	data[title] = offers


import json

# with open('offers.json', 'w') as file:
	# json.dump(data, file, indent=4, ensure_ascii=False)

# with open('offers.json', 'r') as file:
# 	data = json.load(file)
# data2 = {}
# for key in data:
# 	if not 'Стоматология' in key:
# 		data2[key] = data[key]

# with open('offers1.json', 'w') as file:
# 	json.dump(data2, file, indent=4, ensure_ascii=False)

#  


# import requests 
# from bs4 import BeautifulSoup

# r = requests.get('https://www.fgu-obp.ru/pol/hirur/doctors.php')
# html = BeautifulSoup(r.text, 'html.parser')

# trs = html.find_all('tr')

# data = {}

# for tr in trs:
# 	img = tr.find('img')
# 	if img:
# 		print(img['src'])

	

# with open('acupuncture.json', 'w') as file:
# 	json.dump(data, file, indent=4, ensure_ascii=False)



import requests 
from bs4 import BeautifulSoup

r = requests.get('https://yandex.ru')
html = BeautifulSoup(r.text, 'html.parser')

weather = html.find('div', class_='weather__temp')
print(weather.text)








































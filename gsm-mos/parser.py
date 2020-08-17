import requests
from bs4 import BeautifulSoup

r = requests.get('https://moba.ru')

html = BeautifulSoup(r.text, 'html.parser')

links = [link.text.strip() for link in html.find_all('a', class_='menu-catalog__item_a')]

def make(data):
	return '''			<div class="wrapper-sidebar-link">
				<a href="#" class="sidebar-link" title="{}">{}</a>
			</div>'''.format(data, data)

elements = list(map(make, links))

for el in elements:
	print(el)
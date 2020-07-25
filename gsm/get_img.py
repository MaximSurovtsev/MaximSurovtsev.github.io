import vk_api
from vk_api.longpoll import VkLongPoll, VkEventType
from random import randint
import pprint as p
import os
vk_session = vk_api.VkApi(token='4ba2103d6f42342ad38a05c7bc3744eda8577573d198804db52b867e34ea1c93cac58a8233febd2e47ce4')

vk_longpoll = VkLongPoll(vk_session)
vk = vk_session.get_api()

upload = vk_api.VkUpload(vk_session)

images = [file for file in os.listdir() if '.jpg' in file and file[0] != '.']
data = []

for image in images:
	url = upload.photo_messages(photos=image)[0]
	data.append((image, f'photo{url["owner_id"]}_{url["id"]}'))
print(data)
text = ''
for name, url in data:
	text += name + '|' + url + ','
print(text)

with open('data.txt', 'w') as file:
	file.write(text)


for event in vk_longpoll.listen():
    if event.type == VkEventType.MESSAGE_NEW:
        if event.to_me:
            print(f'Получено сообщение "{event.text}" от {event.user_id}')
            if event.text.lower() == 'привет':
                 text = 'Привет!'
            elif event.text == 'Как твои дела?':
                text = 'Отлично! А как твои?'
            #---------------------
            elif event.text.lower() == 'картинка':
                text = 'Держи'
                vk.messages.send(user_id=event.user_id, random_id=randint(0, 2**32), attachment=data)
            #-------------------------
            else:
                text = 'Я умею отвечать только на "Привет" и "Как твои дела?"'
            vk.messages.send(user_id=event.user_id, random_id=randint(0,2**32), message=text)
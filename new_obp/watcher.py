from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import time 
import os 




class Handler(FileSystemEventHandler):
	def on_created(self, event):
		print (event)

	def on_deleted(self, event):
		print (event)

	def on_modified(self, event):
		if '.html' in str(event):
			with open('header.html', 'r') as file:
				header = file.read()
			with open('footer.html', 'r') as file:
				footer = file.read()

			for name in os.listdir():
				if '.html' in name and name not in ['footer.html', 'header.html']:
					with open(name, 'r') as file:
						html = file.read()
					with open('dist/' + name, 'w') as file:
						file.write(html.replace('{ header }', header).replace('{ footer }', footer))


		print(event)

	def on_moved(self, event):
		print (event)



observer = Observer()
# observer.schedule(Handler(), path='/Users/maximsurovtsev/new_obp/', recursive=False)
observer.schedule(Handler(), path='/home/maxim/MaximSurovtsev.github.io/new_obp', recursive=False)
observer.start()

try:
    while True:
        time.sleep(0.1)
except KeyboardInterrupt:
    observer.stop()
observer.join() 
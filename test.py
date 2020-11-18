import requests

BASE = "http://127.0.0.1:5000/"

#data = [{"likes": 7, "name:": "Nico", "views": 10000},
      #  {"likes": 73, "name:": "co", "views": 1044000},
      #  {"likes": 75, "name:": "Ni", "views": 1000330}]

#for i in range(len(data)):
  #  response = requests.put(BASE + "video/" + str(i), data[i])
   # print(response.json())

response = requests.put(BASE + "listing/4", {"name": "Murphy", "views": 6420, "likes": 42})
print(response.json())
input()

response = requests.patch(BASE + "listing/4", {"views": 64600, "likes": 1897})
print(response.json())
input()

response = requests.get(BASE + "listing/2")
print(response.json())
response = requests.get(BASE + "listing/1")
print(response.json())
response = requests.get(BASE + "listing/0")
print(response.json())
# response = requests.patch(BASE + "video/2", {"views": 99, "likes": 101})
# print(response.json())

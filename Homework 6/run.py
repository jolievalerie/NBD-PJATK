import riak

myClient = riak.RiakClient(pb_port=8087)

myBucket = myClient.bucket('s24564')

# wrzuc dane

print("Starting adding a new document")

val1 = {"one": 1}
key1 = myBucket.new('one', data=val1)
key1.store()

print("Adding succeed")

# pobierz dane

print("Getting a recently added document")

fetched1 = myBucket.get('one')
assert val1 == fetched1.data

print("Geting succeed")

# wypisz dane

print("Printing a recently gotten document")

print(fetched1.data)

print("Printing succeed")

# zmodyfikuj dane

print("Editing a recently added document")

val2 = 2
fetched1.data["one"] = val2
fetched1.store()

print("Modification succeed")

# pobierz dane

print("Getting a recently modified document")

fetched1 = myBucket.get('one')
assert val2 == fetched1.data["one"]

print("Getting succeed")

# wypisz dane

print("Printing a recently modified document")

print(fetched1.data)

print("Printing succeed")

# usun dane

print("Deleting a recently modified document")

fetched1.delete()
assert myBucket.get('one').exists == False

print("Delete succeed")

# sprobuj pobrac dane

print("Trying to delete a recently deleted document")

print(myBucket.get('one').data)

print("Document not found")
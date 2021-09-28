import xml.dom.minidom as md

file = md.parse("files/example.xml")

# Raise the price of French Toast to $5.00
file.getElementsByTagName("price")[3].childNodes[0].nodeValue = "$5.00"

print(type(file))
print(file.toxml())

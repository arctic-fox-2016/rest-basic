# rest-basic

1. GET api/items (all items)
curl -X GET http://localhost/api/items
RESPONSE:
[{"name":"chips ahoy","category":"cookies","price":5,"tag":"chocolatte","picture_location":"chipsaohiy"},{"name":"chips ahoy","category":"cookies","price":5,"tag":"chocolatte","picture_location":"chipsaohiy"},{"name":"chips ahoy","category":"cookies","price":5,"tag":"chocolatte","picture_location":"chipsaohiy"},{"name":"chips ahoy","category":"cookies","price":5,"tag":"chocolatte","picture_location":"chipsaohiy"},{"name":"chips ahoy","category":"cookies","price":5,"tag":"chocolatte","picture_location":"chipsaohiy"},{"name":"chips ahoy","category":"cookies","price":5,"tag":"chocolatte","picture_location":"chipsaohiy"},{"name":"chips ahoy","category":"cookies","price":5,"tag":"chocolatte","picture_location":"chipsaohiy"},{"name":"chips ahoy","category":"cookies","price":5,"tag":"chocolatte","picture_location":"chipsaohiy"},{"name":"chips ahoy","category":"cookies","price":5,"tag":"chocolatte","picture_location":"chipsaohiy"},{"name":"chips ahoy","category":"cookies","price":5,"tag":"chocolatte","picture_location":"chipsaohiy"},{"name":"chips ahoy","category":"cookies","price":5,"tag":"chocolatte","picture_location":"chipsaohiy"},{"name":"chips ahoy","category":"cookies","price":5,"tag":"chocolatte","picture_location":"chipsaohiy"},{"name":"chips ahoy","category":"cookies","price":5,"tag":"chocolatte","picture_location":"chipsaohiy"},{"name":"tortila","category":"crackers","price":10,"tag":"corn","picture_location":"tortilla"},{"name":"tortila","category":"crackers","price":10,"tag":"corn","picture_location":"tortilla"}]


2. GET api/items/:id (get any item)
curl -X GET http://localhost/api/items/21
RESPONSE:
[{"name":"tortila","category":"crackers","price":10,"tag":"corn","picture_location":"tortilla"}]

3. DELETE api/items/:id (delete any item)
curl -X DELETE http://localhost/api/items/21
RESPONSE:
[1]

4. POST api/items (add new item)
curl -X POST http://localhost/api/items
RESPONSE:
{"id":22,"name":"tortila","category":"crackers","price":10,"tag":"corn","picture_location":"tortilla","updatedAt":"2016-09-26T13:03:26.145Z","createdAt":"2016-09-26T13:03:26.145Z"}

5. PUT api/items/:id (update any item)
curl -X PUT http://localhost/api/items
RESPONSE:
[1]

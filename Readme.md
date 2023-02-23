endpoint: /user/register,
method:post,
body: {
  name: String,
  email: String,
  password: String
}
response:{'status':201,'msg':"Signup successful"}

endpoint: /user/login,
method:post,
body : {
  email: String,
  password: String
}
response: {'status':201,'msg':'Login successful','token':token}

endpoint: /flight/flights
method:get,
response:{'status':200,'flights':allflights}

endpoint: /flight/flights/:id
method:get,
response:{'status':200,'flights':flight}

endpoint: /flight/flights
method:post,
response: {'status':201,'msg':'Flight added successfully'},
body:{
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number
}

endpoint: /flight/flights/:id
method:patch,
response:{'status':204,'msg':'Flight updated successfully'}

endpoint: /flight/flights/:id
method:delete,
response:{'status':202,'msg':'Flight deleted successfully'}
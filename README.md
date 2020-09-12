# AdmitKard Exercise - II [OTP Verification]

A Simple and Responsive Web Application to Authenticate User with One Time Password using their Phone Number.  The application consists of 
* Mobile Number Screen
* OTP Verification Screen
* Success Screen
# Screen Shots
![login-screen](https://user-images.githubusercontent.com/53308191/93003890-07845500-f560-11ea-9391-70747ddca537.JPG)
![login-invalid-screen](https://user-images.githubusercontent.com/53308191/93003886-05ba9180-f560-11ea-8639-ed6e5bf8d5eb.JPG)
![login-require-screen](https://user-images.githubusercontent.com/53308191/93003889-06ebbe80-f560-11ea-8657-f5b717cf5925.JPG)
![login-require-pattern-screen](https://user-images.githubusercontent.com/53308191/93003888-06532800-f560-11ea-84b1-afb87f958fc9.JPG)
![otp-verify-failed-screen](https://user-images.githubusercontent.com/53308191/93003881-02bfa100-f560-11ea-9478-decf2e8f4c42.JPG)
![otp-verify-screen](https://user-images.githubusercontent.com/53308191/93003883-04896480-f560-11ea-80ff-9a8a74096de3.JPG)
![welcome-screen](https://user-images.githubusercontent.com/53308191/93003885-0521fb00-f560-11ea-9ce8-0d27f396eb2b.JPG)





## Workflow
* Open the index.html file from the project "client" folder
* Enter Mobile Number
* Click on "Sign In with OTP"
* An OTP is  generated via REST-API and is stored in the database against the user phone number (a static otp: "1234" is used on the backend as of now)
* On Success, the user is redirected to a new screen to enter OTP
* Enter OTP number
* Click on "Verify"
* Verification of  the OTP is done via REST-API
* On Success, the user is redirected to the welcome screen else Otp verfication failed message is displayed on the screen


## Getting Started

Download/Clone the repo and follow the Steps mentioned in the installation part to get started
```sh
$ git clone https://github.com/roshnirsks/admitKard-exercise.git
```

### Prerequisites

* Install NodeJs (12.18.3)
**https://nodejs.org/en/download/**
* Install MongoDB (4.2)
**https://www.mongodb.com/try/download/community**

## Installation & Setup

1. Install dependencies.
```sh
> cd admitKard-exercise/server
> npm install
```

2.In a separate shell start MongoDB.
```sh
> mongod
```

## Start Node Backend

```sh
> node server.js or nodemon server.js (for dev mode)
```
## Front End 

* Open index.html in the browser to view the user login screen

# API Routes

## Signin
url:
```
http://localhost:3000/api/admitKard/userLogin/sendOtp
```
method:
```
POST
```
body:
```
{
  "phone":9876543210,
  "code": "+91"
}
```
response: 
```
{
    "message": "User created!",
    "otp": 1234,
    "result": { "n": 1, "nModified": 0, "upserted": [{ "index": 0, "_id": "5f5d212d72fc4de986f5c022" }], "ok": 1 }
}

```

## Login
url:
```
http://localhost:3000/api/admitKard/userLogin/verifyOtp
```
method:
```
POST
```
body:
```
{
  "phone":9876543210,
  "otp": "1234"
}
```
response: 
```
{
"message":"Otp verification successful!","verified":true
}

```

## Built With

* HTML5/CSS3
* Javascript
* Bootstrap
* Node Js
* Express Js
* MongoDB
* Mongoose

## Author

* **Roshni Kumari**

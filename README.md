# electrical-car-shop

# How to install the app
 First install nodejs on your environment
 You also need to have git installed

1. Open your terminal/cmd in your preferred folder
2. Extract the zip folder
3. Open the electrical-car-shop folder in your project and run the command "npm install".This will install all the project dependencies.

# Database configuration
1. You need to have mysql installed on your machine preferrably phpmyadmin
2. Create an empty database and name it as "catalog_db"
3. Import the electrical_car_db.sql fie  located in the  electrical-car-shop folder to your empty database on phpmyadmin
4. Navigate to electrical-car-shop > config and open the config.json file and you input your database credentials.
   Below is an illustration how the file looks like

"development": {
    "username": "root",
    "password": "",
    "database": "catalog_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

# Starting the application
After the above instructions your app in now ready
Open the your terminal/cmd from the electrical-car-shop folder and run the following command to start your application
 
 "npm run app"

 Your app should now lauch succesfully on http://localhost:3000/
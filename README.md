# Cozy Haven - Hotel Booking System
1.Description - A Hotel Booking Application allows user to book new rooms,view reservation history and Hotel Management to manage reservation list,user accounts,refund requests and allows user to add their reviews.
2.Technologies used :
 Backend: Java, Spring Boot, Spring Data JPA, MySQL
 Frontend: Angular, Bootstrap ,HTML, CSS
 Tools: Git, Postman, Swagger, Docker 
3.Main Modules - In my project there are 3 main modules User,HotelOwner,Admin
# Project Flow
# Register and Login
User,Owner,Admin can register to new account by providing necessary details with their respective roles and they can login and logout as per their wish and after login they can edit their profile details.
# User Module
In User Module user can search for hotels by providing location, check-in-date, check-out-date,no-of-rooms,no-of-adults,no-of-children and from the list of hotels he/she can view all rooms and can filter rooms by criterias like AC room,Availability,Base fare and Bed type.
From the rooms list he/she can calculate total fare according to no-of-adults and no-of-children and then he/she can book rooms and all required data will be autofilled and it was set as readonly.
Before reservation he/she should do payment and for payment I have implemented Payment Microservice. After payment Reservation Confirmed and user can view their reservation history and if they want they can cancel booking and can request for refund by submitting the refund form and also if they wish they can leave a review to the respective hotels they have booked.
If user want to update 
# Owner Module
Onwer is the person responsible to approve or reject refund requests and he/she can add new rooms to their existing hotel and can edit and delete existing room and he/she can manage room listings
# Admin Module
Admin is responsible to add new hotels and he/she can manage hotel listings and he/she also manages user accounts separately and owner accounts separately if admin found any suspicious activity admin can delete user/owner account by searching their ID and he can edit his own profile.
# Deployment
I have deployed my project in Docker and all further details and output screenshots have been given in PPT kindly refer it.Thank you



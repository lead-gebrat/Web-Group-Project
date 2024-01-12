### Web-Group-Project 
### Group Title 
Zemnanit Hair Salon Appointment Scheduling 
### Description 
Zemnanit hair salon appointment scheduling website is designed to make booking appointments easier for customers and salon owners. It provides a user-friendly platform where customers can effortlessly choose a convenient time slot for their hair appointments on a specific day. At the same time, salon owners can showcase their available time slots on the website. By collaborating with numerous salons, Zemnanit hair salon appointment scheduling improves the convenience of appointment booking for customers and increases the visibility of participating salons. 
## Section: 01 
## Group Members 
Lidya Gebretsadik UGR/1362/14 
Fenet Girma UGR/3427/14 
Mahlet Asrat UGR/2181/14 
Maedot Asrat UGR/2867/14 


### Start the page from signup page
### Frontend tools Used 
1. Tailwind 
2. Typescript 
 
### Backend tools Used 
1. Nestjs 
2. MongoDB database

   
### Reasons for choosing the mongoDB database  
• MongoDB provides excellent query functionality, particularly with its query language and flexible document model. This allows us to efficiently retrieve and manipulate data using query strings. 
 
##### • MongoDB supports creating explicit schemas and validating data. 
 
##### • Data in MongoDB is stored in documents with key-value pairs instead of rows and columns which makes it easier and faster to manipulate input values. 
##### • Furthermore, MongoDB offers the advantage of robustness through the use of the Mongoose module.  

 
#### 1. Booking an appointment (Users): 
##### • GET: Users can see their bookings in the ‘appointments page’. 
##### • POST: Users can create a new booking by providing necessary details such as time, date, email, and preferred style on the ‘book page’. 
##### • PUT: Users can update their existing bookings, including modifying the appointment time, date, email, and preferred style on the ‘appointments page’. 
##### • DELETE: Users can cancel their bookings, removing them from the ‘appointments page’. 
 
#### 2. Salon Management (Administrators) all on the manage salon page. 
##### • GET:  admins can view a list of all salons with information about each salon. 
##### • POST: admins can add new salons by providing the required details such as salon name, address and salon profile picture. 
##### • PUT:  admins have the ability to edit salon information, allowing them to update details such as the salon name and location. 
##### • DELETE:  admins can remove salons from the system, deleting their information from the database. 
#### 3. Management of users(Admins) 
##### • GET: admins can access the list of users registered. 
##### • PATCH: admins can update users info.

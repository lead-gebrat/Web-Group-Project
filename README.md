Web-Group-Project 
Group Title 
Zemnanit Hair Salon Appointment Scheduling 
Description 
Zemnanit hair salon appointment scheduling website is designed to make booking appointments easier for customers and salon owners. It provides a user-friendly platform where customers can effortlessly choose a convenient time slot for their hair appointments on a specific day. At the same time, salon owners can showcase their available time slots on the website. By collaborating with numerous salons, Zemnanit hair salon appointment scheduling improves the convenience of appointment booking for customers and increases the visibility of participating salons. 
Section: 01 
Group Members 
Lidya Gebretsadik UGR/1362/14 
Fenet Girma UGR/3427/14 
Mahlet Asrat UGR/2181/14 
Maedot Asrat UGR/2867/14 
We Choose the mongodb database because of the following reasons. 
MongoDB's horizontal scalability enables you to handle large volumes of data and traffic by distributing the load acro 
ss multiple servers. This ensures that your system can handle increased demand and maintain good performance. 
 
 
 
Default Admin Email:- admin@email.com  
Please use the above email to create an admin on the signup page as all users who don't create their account with the above email will be authomatically 
 Authorized as Users and not admins by the backend. A user who signsup with the above email will automatically be given the role of an admin by the backend. The authorization given to an Admin gives access for the admin to a page where the admin uses to manage the users and the Hotels.  
 
Admin privilege on the salon_management page:  
1. Read all salons  
2. Delete salons 
3. Update salon information (Salon name and Location) 
User privilege on the book page and appointments page: 
1. Create an appointment 
2. Delete an appointment 
3. Update and appointment 
OVERVIEW OF CRUD CAPABILITIES FEATURE 1:- USER CREATE:-The user can signup which CREATEs a user in the database READ:- The Admin can READ all the users of the system UPDATE:- The user can UPDATE their Password DELETE:- The Admin can DELETE the users FEATURE 2:- HOTELS CREATE:- Hotels can be CREATED. READ:- Details of Hotels can be READ. UPDATE:- Fields that define the hotels and theirl locations along with their price can be updated DELETE:- Hotels can be DELETED 
 
 
 The Crud Functionalities  
1. Booking an appointment(Users) 
Get: users can see their bookings on the appointments page 
Post: users can create  
Put: Users can update their bookings i.e time, date, email and style. 
Delete: Users can cancel their bookings on the appointments page. 
 
2. Salon Management(General admins) on salon_management page 
Get: general admins can see all salons 
Post: general admins can also add salons 
Put: they also have access to edit salon information 
Delete: they have access to removing salons 
 
 
Frontend tools Used 
1. Tailwind 
2. Typescript 
 
Backend tools Used 
3. Nestjs 
4. MongoDB database 
Reasons for choosing the mongoDB database  
• MongoDB provides excellent query functionality, particularly with its query language and flexible document model. This allows us to efficiently retrieve and manipulate data using query strings. 
 
• MongoDB supports creating explicit schemas and validating data. 
 
• Data in MongoDB is stored in documents with key-value pairs instead of rows and columns which makes it easier and faster to manipulate input values. 
• Furthermore, MongoDB offers the advantage of robustness through the use of the Mongoose module.  
 
1. Booking an appointment (Users): 
• GET: Users can see their bookings in the ‘appointments page’. 
• POST: Users can create a new booking by providing necessary details such as time, date, email, and preferred style on the ‘book page’. 
• PUT: Users can update their existing bookings, including modifying the appointment time, date, email, and preferred style on the ‘appointments page’. 
• DELETE: Users can cancel their bookings, removing them from the ‘appointments page’. 
 
1. Salon Management
(Administrators) all on the manage salon page. 
• GET:  admins can view a list of all salons with information about each salon. 
• POST: admins can add new salons by providing the required details such as salon name, address and salon profile picture. 
• PUT:  admins have the ability to edit salon information, allowing them to update details such as the salon name and location. 
• DELETE:  admins can remove salons from the system, deleting their information from the database. 
2. Management of users(Admins) 
• GET: admins can access the list of users registered. 
• PATCH: admins can update users info.

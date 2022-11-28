# team-project-beta

### Use Case:

Implement an end2end Airport Management system that can be configured for a given airport (Web interface or Mobile app interface with supporting Backend APIs), that integrates Airline Flight Schedules, Gate Assignments, Baggage Claim assignment for arriving flights

The emphasis here is on team collaboration, so the points awarded will be based on individual contributions to the team and how the team performed overall.  


# Team Beta  

## Members :

* Anesha Sekara Pandian
* Varun Reddy
* Shravani Naikoti

## Sprint Task Sheet :

https://docs.google.com/spreadsheets/d/1EWeiEBik2nprr3mrWz8Mh7B7vrYxZw-e32XF0iEgXzI/edit?usp=sharing
  
## Feature Set:  

##### User  
* Can singup for an account.
* Can login in to their account.
* Can view flight schedules and gate information.

##### Airline Employee  
* Can add or edit flight schedules.  

##### Airport Employee  
* Can enable and disable gates.
* Can assign baggage carousel to flights.  


## Design Decisions:  

#### Backend :
##### Django Python framework   
Django is a high-level Python web framework. It allows us to use modules for faster development. We chose Django python over other technologies as the requirement was a data-driven content management application.  
#### Frontend : 
##### ReactJS and Redux  
We chose React to make UI development easy. Using React, we imported a lot of predefined UI packages which saved a lot of development time. Redux, along with React provides a state which is maintained globally across the application. This helps one component track changes to the other components.  
#### Database :
##### MySQL  
MySQL is reliable, flexible and easy to use. It was our first choice because it is efficient and fast. MySQL databases are easy to configure and provide multiuser capabilities and can handle many connections at the same time.  
#### UI library :
##### Material-UI    
We used MUI, a React component library which can be easily imported and used, instead of painstakingly code the UI components. It provides fully loaded UI components which made development faster.  
  


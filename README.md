# App(erture) of New York

![New York Night](https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/10/c0.jpg)

## Project Description

App(erture) is a city directory for the intrepid photographer.  The user can view a detailed listing of recommended locales in New York city for capturing epic photographs according to the users search criteria.  Recommended locales are categorized according to shared attributes that may be of interest to the photograper such as skyline, historical, landscape, ect.  Selected landmarks are accompanied by a detailed description as to what makes the selection a joy to photograph.

## Entity Relationship Diagram

![ERD](https://i.imgur.com/0OombKB.jpg)

* Locales table also has the following columns
expressed as boolean values which will be compared to the input of a dropdown menu to filter through the data in this table
	* Historical
	* Landscape
	* Skyline
	

## Wireframes

### Register page
![Register](https://i.imgur.com/zQQSGFc.png)

* Components Rendered
	* Header, Footer, Register

* API Endpoint
	*  '/register'

* routes
	*  read request to visit page
	*  create (post) request from submitting form

### Login Page
![Login](https://i.imgur.com/1j22c59.png)

* Components Rendered
	* Header, Footer, Login

* API Endpoint
	*  '/Login'

* routes
	*  read request to visit page
	*  create (post) request from submitting form

### Homepage
![Homepage](https://i.imgur.com/L4ALsBe.png)

* Components Rendered
	* Header, Footer, Homepage or UserProfile

* API Endpoint
	*  '/' 

* routes 
	* Read (index) request to visit page either from the guest or the user after post request from login page
	* clicking on carousel image will trigger show request for data on corresponing locale id entry
	* add locale button will trigger read for DOM corresponding to '/create' endpoint.

* additional functionality
	* Search function will filter through the locales table for data whose state is true for the matching column and update the carosel with only those values.

### Create Entry
![Create](https://i.imgur.com/P7w0kcj.png)

* Components Rendered
	* Header, Footer, CreateEntry

* API Endpoint
	*  '/create'

* routes
	*  read request to visit page
	*  create (post) request from submitting form

### Single Entry
![Single](https://i.imgur.com/7wbFceF.png)

* Components Rendered
	* Header, Footer, SingleEntry, CreateReview

* API Endpoint
	*  '/:id'

* routes
	*  read (show) request to visit page
	*  create and update for CreateReview
	*  delete for both locale and review
	
	## Timeframes
	
	Component        | Priority      | Estimated Time     | Time Invested               | Actual Time
--------------------|------------------|-----------------------|---------------------------------------|-------|Intra-word emphasis | So A\*maz\*ing   | So A<em>maz</em>ing   |
Auth      | High  | 2 hours   |
Backend Routes | High     | 2-3 hours       |
    Frontend Routes  | High  | 4-5 hours    |
Frontend Components          | High  | 4-5 hours |
Styling         | High     | 6 hours   |
     Post - MVP   | Low    | ???      |
        

# Welcome to Kakeibo Budgeting:
This project is a simple budgeting tool based on the Japanese budgeting philosophy named Kakeido, aka "the art of saving money". As users manage their individual expenses they become more mindful of their spending habits. Like Kakeido, each expense falls into one of four categories: need, want, cultural, and unexpected. For example, cultural expenses represent anything that broaders an individual's horizons like travel or self improvement. Within this app, users will be able to Create, Read, Update, and Delete expense resources from a React frontent to an Express backend API to a MongoDB database. Users can also see a visual breakdown of their overall spending defined by the four categories of expenses.   

### Setup to run frontend 
1. clone ``` git clone git@github.com:matthewhiggins415/kakeibofrontend.git ```
2. ``` npm install ```
3. ``` npm start ```
4. [Kakeibo Backend Repo](https://github.com/matthewhiggins415/kakeibobackend) ..should you need it

### Link to deployed site:
[kakeibo](https://matthewhiggins415.github.io/kakeibofrontend/) 

### Technologies Used: 
- React 
- styled-components
- framer-motion
- axios
- toastify
- apexcharts
- react-router-dom
- react-icons

### Planning: 
I recently stumbled across Kakeibo just out of curiousity and decided it would make a fun project. Once I had the concept in mind I drew out a quick wireframe for each view within the app to define both look and function. As I drew the wireframe I wrote down a list of key features and functionality needed to bring this project together. This list was a very conceptual; for some features I was unsure what technology or package would work best. I also listed out a quick breakdown of my project file structure. For example, would there be a "Views" folder and "Components" folder in src, this step helps me stay organized as I build. From there, I was ready to setup my project, git/github, and begin. 

<img src="https://user-images.githubusercontent.com/67120920/157351099-f944a781-0d82-4015-a02a-5f2f14e1734d.jpg" alt="wireframe" style="width:450px; height: 450px; margin: 0 auto;"/>

..the home view turned into this ???

<img src="https://user-images.githubusercontent.com/67120920/157352116-b3dab2ac-3a16-466e-b903-ffa60f7594c8.png" alt="app home screen" style="width:550px; height:auto; margin:0 auto;"/>

..and the data view turned into that ???

<img src="https://user-images.githubusercontent.com/67120920/157352124-9848975e-a775-426e-bc9f-b858895c1e6a.png" alt="app data screen" style="width:550px; height:auto; margin:0 auto;"/>

### Challenges:
1. First time working with framer-motion. I really liked the built-in functionality of jQuery's page transitions. Had to use framer-motion to get the same effect. 
2. Working with data as Number values in Javascript can be a little tough to just keep track when interpolating into a string and things. 

### Future Goals: 
1. Create a seed script on the backend that is triggered with a toggle button on the frontend. So if someone new comes to site they can just toggle the button to see a data rich project. 
2. Connect with the Plaid API, this is a major goal, but by using the Plaid API in a production level environment users could see their own expenses in realtime after connecting through Plaid to their preferred banking. 
3. More data visualization. It was really fun using apexcharts to represent the numerical data and found the package really straightforward. Would be fun to see more useful info. 
4. Work with framer motion more to improve micro-animations and become more comfortable with that package. 

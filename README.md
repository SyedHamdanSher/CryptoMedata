# CryptoMedata
HackIllinois

# Inspiration
Electronic Health Records' lack interoperability is exceedingly costly. Because EHRs are unable to effectively communicate with each other, physicians and surgeons often treat acutely ill patients without access to medical histories, current medications, and prior imaging studies that could influence patient care. Achieving full interoperability has been projected to save the U.S. health care system $77.8 billion per year, largely by avoiding redundant tests and imaging studies, and by decreasing administrative expenses.

# What it does
A system that uses blockchain technology could hold a patients total medical history. The blockchain allows the necessary security for storing sensitive data. Our system will act as a convergence point for medical records, prescriptions, and other health histories, allowing the patient to have control over his/her data and allowing easy sharing to other medical providers.

# Features
It gives the patient control over his/her records.
It reduces the administration cost as the record is stored in a secured blockchain.
It recommends a doctor for a specific disease based on the doctor's popularity.
It displays graphical information about doctors to allows patients to make informed decisions regarding their provider.
It allows user to request an appointment with a provider upon selection by pressing a button.
Automatic prescription purchasing available once vendor is selected.
Prescription is secured via blockchain preventing alteration or misuse.
How we built it
We collected data from online resources like Data.gov and Kaggle.com regarding health and finance. With the insights, we confirmed that Electronic Health Records are inefficient for secure data storage and processing. We implemented blockchain technology which includes 3 hash keys with SHA algorithm. We deployed [Azure MySQL Server] to load the database and then connected it to the Power Bi Desktop application to create graphical analysis. These visuals were published to the Azure Power Bi. Then with the help of I-frame, we displayed the graphical analysis on our Web Application.

# Challenges we ran into
Implementing blockchain on peer to peer connection using SHA in JavaScript .
Deploying the database on MySql Server by enabling the public IP address of the desired connections
Connecting Power Bi with Azure MySql Server to create graphical analysis.
Implementing Azure Machine Learning API
Connecting the Power Bi with the recommendation system in the application
Accomplishments that we're proud of
Successfully implementing a blockchain
Successfully using Azure MySql Server for deploying the database
Using Azure Power Bi for visualizing the data and then publishing it to the Web Application using I-frame

# What we learned
How to implement blockchain
How to work on Microsoft Azure Portal with MySQL Server
How to use Microsoft Azure for Machine Learning
How to use Microsoft Power Bi" for **data visualization

# What's next for CryptoMedata
Implement blockchain across a distributed system
Determine other useful provider metrics and find relevant data to improve Machine Learning suggestion of Providers
Implement feature allowing patients to choose which portion of the medical record to send to each doctor
Add more third-party vendors for prescription fulfillment
Implement CryptoMedata on a Global Level

# Built With
azure-power-bi
node.js
javascript
azure
blockchain
data-analytics
twilio
azure-mysql
chart.js
jquery

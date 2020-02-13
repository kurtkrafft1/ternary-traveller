Welcome to Mira's blog. Enjoy this 70's themed website with a modern edge that we gave to Mira in order to track her adventures.

to get this website going just follow the next few steps

1. in the root directory enter this command `mkdir api`


2. after that enter in `cd api/`


3. following that enter `touch database.json`


4. in that file copy and paste the following code :
`{
  "places": [
    { 
      "id": 1, 
      "name": "Italy", 
      "visa_required": false 
    },
    { 
      "id": 2, 
      "name": "Switzerland", 
      "visa_required": true 
    },
    { 
      "id": 3, 
      "name": "France", 
      "visa_required": false
    }
  ],
  "interests": []
}`

5. you may now close out of this and go back to the root directory in your terminal

6. in a new tab in your terminal and in the root directory enter in this command '
cd api/'

7. in the api folder enter this code in `json-server -p 8088 -w database.json`

8. finally, in the other tab that is still in the root directory enter in this code `hs -o`

9. enjoy!

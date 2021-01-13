#!/bin/bash
echo "
----------------------
Updating your computer
----------------------
"
sudo apt-get update && sudo apt-get upgrade && sudo apt-get dis-upgrade
echo "
-------------------
Updating completed!
-------------------
"
echo "
------------------
Installing node...
------------------
"
sudo apt-get install node
echo "
------------------
Installing modules
------------------
"
sudo npm install axios
echo "
-----------------
    Finished!
-----------------
"

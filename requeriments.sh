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
sudo apt-get install nodejs
echo "
--------------
Insalling npm
--------------
"
sudo apt-get install npm
echo "
-----------------
    Finished!
-----------------
"

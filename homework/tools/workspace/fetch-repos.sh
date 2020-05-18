for i in material rxjs libimobiledevice ansible
do
cd ~/workspace/$i
git checkout master
git pull origin master
done

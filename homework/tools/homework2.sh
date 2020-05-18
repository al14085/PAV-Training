#open Visual Studio Code
open -a VisualStudioCode

#kill VisualStudioCode
kill 11118

#make multi-layer directry
mkdir -p tmp/tmp1/tmp2/tmp3/tmp4/tmp5

#rename tmp3 to tmp3-sub
mv tmp/tmp1/tmp2/tmp3 tmp/tmp1/tmp2/tmp3-sub

#restart my computer
shutdown -r now

#create a zip file for folder tmp2
zip temp2 temp2

#create tar file for folder tmp3
tar -cvf tmp3 tmp3

#resister linux command（ll）
alias ll='ls -la'

#create a file and put content
touch test.txt | echo "hello world" > test.txt

print("welcom to our app")
num1=float(input("choose first number:"))
oper=input("choose operation (+,-,*,/,%):")
num2=float(input("choose second number:"))
print("................................")

if oper=="+":
    print(num1,"+",num2,"=",num1+num2)
elif oper=="-":
    print(num1,"-",num2,"=",num1-num2)
elif oper=="*":
    print(num1,"*",num2,"=",num1*num2)
elif oper=="%":
    print(num1,"%",num2,"=",num1%num2)
elif oper=="/":
    if num2!=0:
        
            print(num1,"/",num2,"=",num1/num2)
    else:
        print("we cant division by zero")
        
else:
	print("invalied opration",oper)
e=input("press enter to exit")

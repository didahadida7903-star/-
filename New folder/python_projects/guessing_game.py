import random

print("welcome to our gussing game")

secret_number=random.randint(1,10)
attempt=0 

while True:
    guss=int(input("guss number between 1,10:"))
    attempt+=1 
    if guss==secret_number:
        print(f"correct you gussed the number in {attempt} tries")
        e=input("press enter to exit")
        break
    elif guss>secret_number:
        print(" too high try again")
    else:
        print("too low try again")

from tkinter import *

def press(key):
    current = entry_text.get()
    entry_text.set(current + str(key))

# دالة للمساواة
def calculate():
    try:
        result = eval(entry_text.get())
        entry_text.set(result)
    except ZeroDivisionError:
        entry_text.set("Cannot divide by zero")
    except:
        entry_text.set("Error")

# دالة لمسح الشاشة
def clear():
    entry_text.set("")

root = Tk()
root.title("Simple Calculator")
root.geometry("300x400")

entry_text = StringVar()
entry = Entry(root, textvariable=entry_text, font=('Arial',18), bd=10, insertwidth=2, width=18, borderwidth=4)
entry.pack(pady=10)

# أزرار الأرقام والعمليات
buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','%','+'
]

# إنشاء أزرار
frame = Frame(root)
frame.pack()

row = 0
col = 0
for button in buttons:
    b = Button(frame, text=button, width=5, height=2, font=('Arial',18),
               command=lambda x=button: press(x))
    b.grid(row=row, column=col, padx=5, pady=5)
    col += 1
    if col > 3:
        col = 0
        row += 1

# زر المساواة
Button(root, text='=', width=22, height=2, font=('Arial',18), command=calculate, bg='lightblue').pack(pady=5)

# زر المسح
Button(root, text='C', width=22, height=2, font=('Arial',18), command=clear, bg='pink').pack(pady=5)

root.mainloop()

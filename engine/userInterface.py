from interfaces import AbstractUserInterface, Tuple
from tkinter import *

class UserInterface(AbstractUserInterface):
    
    count: int = 0
    
    def drawInterface(self) -> Tuple[int, list[str]]:
        numOfChars: int = int(input("How many characters do you want? "))
        print("What type of chars do you want in your password? ")

        resp: list[str] = []

        print("1 - Lowercase letters")
        print("2 - Uppercase letters")
        print("3 - Special letters")
        print("4 - Numeric letters")
        print("0 - Accept options")

        while True:
            
            temp: str = ''
            temp = input("If using the same option, the type will have priority when generating. Option: ")
            
            if temp == "0":
                break
            if len(temp) > 1:
                print("Only one option each time!")
            else:
                resp.append(temp)
       
        return numOfChars, resp
    
    def drawInterfaceTkinter(self) -> None:
        # instance of a window
        window = Tk() 
        window.geometry("420x420")
        window.title("Password Generator")
        
        icon = PhotoImage(file="icon.png")
        window.iconphoto(True, icon)
        window.config(background="#1f2836")

        button = Button(window,
                        text="Don't click!",
                        command=self.click,
                        font=("Bold", 30),
                        bg="white",
                        fg="#14161a",
                        activeforeground="#14161a",
                        activebackground="#ccdaf0")
        button.pack()
        
        x = IntVar()
        check_button = Checkbutton(window,
                                    text="I agree",
                                    command=self.display(x),
                                    variable=x,
                                    onvalue=1,
                                    offvalue=0,
                                    )

        check_button.pack()
        
        # windon on the screen and listen for events
        window.mainloop()

    def click(self) -> None:
        print("You clicked the f button!")
    
    def display(self, x) -> None:
        print("Checked")
        if(x.get() == 1):
            print("You agree!")
        else:
            print("You don't agree!")
    
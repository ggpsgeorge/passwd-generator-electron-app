from engine import Engine
from userInterface import UserInterface

def main():
    
    userInterface = UserInterface()
    engine = Engine()
    
    numOfChars: int
    options: list[str]
    
    # numOfChars,  options = userInterface.drawInterface()
    # password = engine.generatePassword(numOfChars, options)
    # print(password)

    # userInterface.drawInterfaceTkinter()

if __name__ == "__main__":
    main()

    

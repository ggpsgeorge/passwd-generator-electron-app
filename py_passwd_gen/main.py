from engine import Engine
from userInterface import UserInterface
import sys

def main():
    
    userInterface = UserInterface()
    engine = Engine()
    
    numOfChars: int
    options: list[str] = []
    
    # numOfChars,  options = userInterface.drawInterface()

    numOfChars = int(sys.argv[1])
    
    # argv option are lowercase, uppercase, special chars and numbers
    for i in range(2, len(sys.argv)):
        options += str(sys.argv[i])

    password = engine.generatePassword(numOfChars, options)
    print(password)

    # userInterface.drawInterfaceTkinter()

if __name__ == "__main__":
    main()

    

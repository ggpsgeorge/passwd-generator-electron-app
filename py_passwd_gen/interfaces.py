from abc import ABC
from typing import Tuple
import secrets

############## USER INTERFACE ######################

class AbstractUserInterface(ABC):
    
    def drawInterface(self) -> Tuple[int, list[str]]:
        pass

    def drawInterfaceTkinter(self):
        pass

############## ENGINE ######################

class AbstractEngine(ABC):
    def generatePassword(self, numOfChars: int, options: str) -> str:
        pass
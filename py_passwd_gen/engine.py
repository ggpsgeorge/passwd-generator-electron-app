from interfaces import AbstractEngine, secrets

class Engine(AbstractEngine):

    characters = {
        "1": "abcdefghijklmnopqrstuvwxyz",
        "2": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "3": "!@#$%&*()-_=+[{]}?/\|",
        "4": "0123456789"
    }
    
    def generatePassword(self, numOfChars: int, options: str) -> str:
        
        alphabet: str = ''

        for option in options:
            if option in self.characters.keys():
                alphabet += self.characters[option]
        
        alphabet_len: int = len(alphabet)
        password: str = ''
        
        for _ in range(numOfChars):
            password += (alphabet[secrets.randbelow(alphabet_len)])
        
        return password
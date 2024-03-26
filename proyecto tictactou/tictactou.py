import random
import math
import os


class ticTacTou:
    def __init__(self):
        self.board = ['-' for _ in range(9)]
        if random.randint(0,1) == 1:
            self.humanPlayer = "x"
            self.botPlayer = "O"
        else:
            self.humanPlayer = "O"
            self.botPlayer = "x"
    
    def show_board(self):
        print("")
        for i in range(3):
            print("  ",self.board[0+(i*3)]," | ",self.board[1+(i*3)]," | ",self.board[2+(i*3)])
            print("")

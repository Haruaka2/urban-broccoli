# Transcribed from a seperate location. May have errors during transcription.

class LlNode:
    def __init__(self, value, nextVal):
        self.value = value;
        self.nextVal = nextVal;

class PyLinkedList:
    def __init__(self):
        self.head = None;
        self.size = 0;
    
    def insertFirst(self, value):
        if(self.head is None):
            self.head = LlNode(value, None);
            self.size += 1;
        else:
            temp = self.head;
            self.head = LlNode(value, temp);
            self.size += 1;

    def insertLast(self, value):
        if(self.head is None):
            self.head = LlNode(value, None);
            self.size += 1;
        else:
            pointer = self.head;
            while(pointer.nextVal is not None):
                pointer = pointer.nextVal;
            pointer.nextVal = LlNode(value, None);
            self.size += 1;

    def insertAt(self, value, index):
        if(index <= self.size):
            if(index == 0):
                temp = self.head;
                self.head = LlNode(value, temp);
                self.size += 1;
            else:
                pointer = self.head;
                counter = 0;
                while(pointer.nextVal is not None):
                    if counter == (index - 1):
                        temp = pointer.nextVal;
                        pointer.nextVal = LlNode(value, temp);
                        self.size += 1;
                        return;
                    pointer = pointer.nextVal;
                    counter += 1;
        else:
            return;

    def get(self, index):
        if(index <= self.size):
            if(index == 0):
                return self.head.value;
            else:
                pointer = self.head;
                counter = 0;
                while(pointer.nextVal is not None):
                    if counter == (index - 1):
                        return pointer.value;
                    pointer = pointer.nextVal;
                    counter += 1;
                return -1;
        else:
            return -1;

    def find(self, findVal):
        if(self.size == 0):
            return False;
        else:
            pointer = self.head;
            while pointer.nextVal is not None:
                if pointer.value == findVal:
                    return True;
                pointer = pointer.nextVal;
            return False;

    def getHead(self):
        return self.head;

    def getTail(self):
        if(self.size == 0):
            return None;
        elif(self.size == 1):
            return self.head;
        else:
            pointer = self.head;
            while pointer.nextVal is not None:
                pointer = pointer.nextVal;
            return pointer;

    def clear(self):
        self.head = None;

    def size(self):
        return self.size;

    def printLinkedList(self):
        if(self.size > 0):
            pointer = self.head;
            while pointer is not None:
                print(pointer.value);
                pointer = pointer.nextVal;
        else:
            print("This is an empty list. Please add a value to generate the list.");

sample = PyLinkedList();
sample.insertLast(1);
sample.insertLast(2);

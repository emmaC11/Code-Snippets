# Given an array of integers, find the sum of its elements.
# https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

def sumArray(arr):
    sum = 0
    for i in arr:
        sum = sum + i
    print(sum)
    return sum
    


myArray = [3,5,7,4] 
sumArray(myArray)


    
    
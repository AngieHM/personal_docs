import csv
import math
import random
import operator

def loadDataset(filename, split, trainingSet=[], testSet=[]):
    with open(filename, 'rb') as csvfile:
        lines = csv.reader(csvfile)
        dataSet = list(lines)
        for x in range(len(dataSet)-1):
            for y in range(4):
                dataSet[x][y] = float(dataSet[x][y])
            if random.random() < split:
                trainingSet.append(dataSet[x])
            else:
                testSet.append(dataSet[x])
                
def euclidianDistance(instance1, instance2, length):
    distance = 0
    for x in range(length):
        distance += pow((instance1[x] - instance2[x]), 2)
    return math.sqrt(distance)

def getNeighbors(trainingSet, testInstance, k):
    distances = []
    length = len(testInstance)-1
    for x in range(len(trainingSet)):
        dist = euclidianDistance(testInstance, trainingSet[x], length)
        distances.append((trainingSet[x], dist))
    distances.sort(key=operator.itemgetter(1))
    neighbors = []
    for x in range(k):
        neighbors.append(distances[x][0])
    return neighbors

def getResponse(neighbors):
    classVotes = {}
    for x in range(len(neighbors)):
        response = neighbors[x][-1]
        if response in classVotes:
            classVotes[response] +=1
        else:
            classVotes[response] = 1
    sortedVotes = sorted(classVotes.iteritems(), key=operator.itemgetter(1), reverse=True)
    return sortedVotes[0][0]

def main():
    trainingSet = []
    testSet = []
    predictions = []
    split = 0.67
    loadDataset('iris.dat', split, trainingSet, testSet)
    k = 3
    for x in range(len(testSet)):
        neighbors = getNeighbors(trainingSet, testSet[x], k)
        response = getResponse(neighbors)
        predictions.append(response)
        print('predicted: ' + response + 'actual: ' + testSet[x][-1])


main()



    

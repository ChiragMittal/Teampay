from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.decorators import api_view
import os

from .scripts.check_word import check_word

text_file = open(os.path.join(os.path.dirname(os.path.dirname(__file__)),'dictionary.txt'), "r")
arr = []
for l in text_file.readlines():
    as_list = l.split(", ")
    arr.append(as_list[0].replace("\n", ""))

@api_view(['GET'])
def index(request,word):
    all_values = tuple(arr)

    get_word = min(all_values, key=lambda x: check_word(word.lower(), x))
    print(get_word)
    suggestions = []
    suggest=[]
    
    for i in all_values:
        if(i == word):
            return JsonResponse({'suggestions':[],"correct": True},status=200)
        elif (i.startswith(word.lower())):
            suggestions.append(i)
        elif(i.startswith(get_word) and i.startswith(word[0])):
            suggest.append(i)
    print(len(suggestions),len(suggest))
    if(len(suggestions)):
        return JsonResponse({'suggestions':suggestions,"correct": False},status=200)
    elif(len(suggest)):
        return JsonResponse({'suggestions':suggest,"correct": False},status=200)
    else:
        return JsonResponse({'error':"No Word Found",},status=404)

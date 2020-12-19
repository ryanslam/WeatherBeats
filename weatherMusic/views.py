from django.shortcuts import render

# Create your views here.

def weatherTest(request):
    return render(request, 'test.html')

def winter(request):
    return render(request, 'winter.html')
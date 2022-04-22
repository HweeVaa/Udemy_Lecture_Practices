from django.shortcuts import render
from . import forms

# Create your views here.


def index(request):
    return render(request, "basicapp/index.html")


def from_name_view(request):
    form = forms.FormName()

    if request.method == "POST":
        form = forms.FormName(request.POST)

        if form.is_valid():
            # Do something code
            print("VALIDATION SUCCESS!")
            print("NAME: " + form.cleaned_data["name"])
            print("Email: " + form.cleaned_data["email"])
            print("TEXT: " + form.cleaned_data["text"])

    return render(request, "basicapp/form_page.html", {"form": form})

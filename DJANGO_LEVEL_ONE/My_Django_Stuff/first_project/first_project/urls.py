"""first_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from first_app import views

# 강의에서는 django.conf.urls를 썼으나 현재는 django.urls로 바뀐 것 같다.
# 강의에서는 url 함수를 썼으나, 삭제되고 path로 대체된 듯 하다.
urlpatterns = [
    path("", views.index),
    path("first_app/", include("first_app.urls")),
    path("admin/", admin.site.urls),
]

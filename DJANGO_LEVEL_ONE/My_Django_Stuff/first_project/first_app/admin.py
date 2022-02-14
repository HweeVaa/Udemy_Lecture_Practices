from django.contrib import admin
from first_app.models import AccesssRecord, Topic, Webpage

# Register your models here.

admin.site.register(AccesssRecord)
admin.site.register(Topic)
admin.site.register(Webpage)

from django.db import models

class blogs(models.Model):
    title = models.CharField(max_length = 1024)
    content = models.CharField(max_length = 10240)
    time = models.DateTimeField(max_length = 20)
    
    class Meta:
        db_table = 'blogs'
# Create your models here.

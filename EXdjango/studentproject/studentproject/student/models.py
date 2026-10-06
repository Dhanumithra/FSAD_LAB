from django.db import models


class Student(models.Model):
    rollno = models.IntegerField()
    name = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    year = models.IntegerField()

    def __str__(self):
        return self.name
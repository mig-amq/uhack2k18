from django.db import models

# Create your models here.
class Account(models.Model):
    fname = models.CharField(max_length=255, null=False)
    lname = models.CharField(max_length=255, null=False)

    cardno = models.CharField(max_length=18, null=False)
    password = models.CharField(max_length=255, null=False)
    email = models.EmailField(max_length=255, null=False)
    contact = models.CharField(max_length=255, default="")

    def __str__(self):
        return  self.fname + " " + self.lname

    def login (self, email, password):
        try:
            user = Account.objects.get(email=email)
            
            if user.password == password:
                return True
            
            return False
        except Account.DoesNotExist:
            return False

    def create (self, email, password, fname, lname, cardno, contact):
        try:
            user = Account.objects.get(email=email)

            print(user)
            return False
        except Account.DoesNotExist:
            try:
                user = Account.objects.get(cardno=cardno)

                return False
            except Account.DoesNotExist:
                user = Account(email=email, password=password, fname=fname, lname=lname, cardno=cardno, contact=contact)
                user.save()

                return True


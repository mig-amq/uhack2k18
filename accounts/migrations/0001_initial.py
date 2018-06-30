# Generated by Django 2.0.2 on 2018-06-30 00:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fname', models.CharField(max_length=255)),
                ('lname', models.CharField(max_length=255)),
                ('cardno', models.CharField(max_length=18)),
                ('password', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255)),
                ('contact', models.CharField(default='', max_length=255)),
            ],
        ),
    ]

# Generated by Django 4.0.3 on 2022-04-06 16:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usersapp', '0002_alter_user_options_alter_user_managers_and_more'),
        ('todo', '0009_todo_updated_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='owner',
            field=models.ManyToManyField(to='usersapp.user'),
        ),
    ]

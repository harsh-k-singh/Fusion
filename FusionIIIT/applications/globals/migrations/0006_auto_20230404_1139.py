# Generated by Django 3.1.5 on 2023-04-04 11:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('globals', '0005_merge_20230404_1133'),
    ]

    operations = [
        migrations.AlterField(
            model_name='extrainfo',
            name='user_status',
            field=models.CharField(choices=[('NEW', 'NEW'), ('PRESENT', 'PRESENT')], default='PRESENT', max_length=50),
        ),
    ]

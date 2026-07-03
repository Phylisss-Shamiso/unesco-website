from django.db import models
from django.utils import timezone

class ArticleSeries(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True)
    slug= models.SlugField('Series Slug',blank=False, null=False, unique=True)
    published_at = models.DateTimeField("Date published", default=timezone.now)
    class Meta:
        verbose_name_plural = "Series"
        ordering = ['-published_at']
        
# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True)
    content = models.TextField()
    published_at = models.DateTimeField("Date published", default=timezone.now)
    modified_at = models.DateTimeField("Date modified", default=timezone.now)
    article_slug = models.SlugField('Article Slug',blank=False, null=False, unique=True)
    series= models.ForeignKey(ArticleSeries,default='', on_delete=models.SET_DEFAULT, null=True, blank=True)
    def __str__(self):
        return self.title
    
    @property
    def slug(self):
        return self.article_slug
    
    class Meta:
        verbose_name_plural = "Articles"
        ordering = ['-published_at']
from django.db import models
from django.utils import timezone

class Post(models.Model):
    title = models.CharField(max_length=200, verbose_name="عنوان")
    content = models.TextField(verbose_name="محتوا")
    created_at = models.DateTimeField(default=timezone.now, verbose_name="تاریخ ایجاد")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="تاریخ بروزرسانی")
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = "پست"
        verbose_name_plural = "پست‌ها"
    
    def __str__(self):
        return self.title
    
    def get_comments_count(self):
        return self.comments.count()

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments', verbose_name="پست")
    name = models.CharField(max_length=100, verbose_name="نام")
    email = models.EmailField(blank=True, null=True, verbose_name="ایمیل")
    content = models.TextField(verbose_name="متن کامنت")
    created_at = models.DateTimeField(default=timezone.now, verbose_name="تاریخ ایجاد")
    
    class Meta:
        ordering = ['created_at']
        verbose_name = "کامنت"
        verbose_name_plural = "کامنت‌ها"
    
    def __str__(self):
        return f"کامنت از {self.name} برای {self.post.title}"
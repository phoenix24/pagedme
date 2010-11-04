from django.conf.urls.defaults import *
from pagedme.resume.views import *

urlpatterns = patterns('',
     
     url(r'^create/$', 'resume.views.create', name='create'),
     url(r'^update/$', 'resume.views.update', name='update'),
     
     url(r'^(?P<username>\w+)/resume/$', 'resume.views.index', name='resume'),
)

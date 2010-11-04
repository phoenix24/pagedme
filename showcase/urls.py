from django.conf.urls.defaults import *
from pagedme.showcase.views import *

urlpatterns = patterns('',
     
     url(r'^create/$', 'showcase.views.create', name='create'),
     url(r'^update/$', 'showcase.views.update', name='update'),
     
     url(r'^(?P<username>\w+)/showcase/$', 'showcase.views.index', name='showcase'),
)

from django.conf.urls.defaults import *
from pagedme.splashpg.views import *

urlpatterns = patterns('',
     
     url(r'^create/$', 'splashpg.views.create', name='create'),
     url(r'^update/$', 'splashpg.views.update', name='update'),
     
     url(r'^(?P<username>\w+)/$', 'splashpg.views.index', name='splashpg'),
)

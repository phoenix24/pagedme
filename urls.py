from django.conf import settings
from django.conf.urls.defaults import *

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
     
     (r'', include('pagedme.splashpg.urls')),
     (r'', include('pagedme.showcase.urls')),
     (r'', include('pagedme.resume.urls')),
     (r'', include('pagedme.static_pages.urls')),
     
    # Uncomment the admin/doc line below and add 'django.contrib.admindocs' 
    # to INSTALLED_APPS to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),
     
    # Uncomment the next line to enable the admin:
    # (r'^admin/', include(admin.site.urls)),
)

#while application runs under debug mode, serve static files from here.
if settings.DEBUG:
    print "debug settings"
    urlpatterns += patterns('',
        (r'^media/(?P<path>.*)$', 'django.views.static.serve',
         {'document_root': settings.MEDIA_ROOT }),
    )

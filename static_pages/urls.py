from django.conf.urls.defaults import *

urlpatterns = patterns('',
     #welcome page.
     url(r'^$', 'static_pages.views.welcome', name='welcome'),
     
     url(r'^faq/$', 'static_pages.views.faq', name='faq'),
     url(r'^about/$', 'static_pages.views.about', name='about'),
     url(r'^contact/$', 'static_pages.views.contact', name='contact'),
     url(r'^terms/$', 'static_pages.views.terms', name='terms'),
     url(r'^privacy/$', 'static_pages.views.privacy', name='privacy'),
)

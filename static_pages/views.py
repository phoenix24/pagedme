from django.template import RequestContext
from django.core.urlresolvers import reverse 
from django.http import HttpResponseRedirect
from django.utils.translation import ugettext as _
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required, permission_required
from django.shortcuts import render_to_response, get_object_or_404, get_list_or_404

from django.db.models import Max, Min

def welcome(request, template='static_pages/welcome.html'):
    """ returns welcome-page to the user. """
    return render_to_response(template, {
         }, context_instance=RequestContext(request))
    
def faq(request, template="static_pages/faq.html"):
  """ return the faq page. """
  return render_to_response(template, {
       }, context_instance=RequestContext(request))
    
def about(request, template="static_pages/about.html"):
  """ return the about page. """
  return render_to_response(template, {
       }, context_instance=RequestContext(request))
    
def contact(request, template="static_pages/contact.html"):
  """ return the contact page. """
  return render_to_response(template, {
       }, context_instance=RequestContext(request))
    
def terms(request, template="static_pages/terms.html"):
  """ return the terms page. """
  return render_to_response(template, {
       }, context_instance=RequestContext(request))
    
def privacy(request, template="static_pages/privacy.html"):
  """ return the privacy page. """
  return render_to_response(template, {
       }, context_instance=RequestContext(request))
    
    
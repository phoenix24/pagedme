from django.utils import simplejson

from django.template import RequestContext
from django.core.urlresolvers import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.utils.translation import ugettext as _
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required, permission_required
from django.shortcuts import render_to_response, get_object_or_404, get_list_or_404

from django.db.models import Max, Min

#@login_required
def create(request, template='showcase/create.html'):
    """ returns create page for user. """
    
    return render_to_response(template, {
         }, context_instance=RequestContext(request))
    
#@login_required
def update(request):
    """ returns json, on successful-page updation. """
    
    data = {'name':'gopi'}
    return HttpResponse(simplejson.dumps(data), mimetype='application/javascript')
    
#@login_required
def index(request, username, template='showcase/showcase.html'):
    """ returns the users showcase. """
    
    return render_to_response(template, {
         }, context_instance=RequestContext(request))
    
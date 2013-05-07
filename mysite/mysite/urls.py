from django.conf.urls import patterns, include, url
from blog.views import *
from django.conf.urls.defaults import *
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()
import settings

urlpatterns = patterns('',
    url(r'^$',home),
    url(r'^blogs/',include('blog.urls')),
    url(r'^write/',write),
    url(r'^about/',about),
    url(r'^error/',error),
    url(r'^search/',search),
    url(r'^site_media/(?P<path>.*)$','django.views.static.serve',{'document_root':settings.STATIC_ROOT}),
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^mysite/', include('mysite.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)

from blog.views import blog_browse, showblogs
from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^$',showblogs),
    url(r'(?P<blog_id>\d+)/$',blog_browse),
    #url(r'^write/',write),
    #url(r'^about/',about),
    #url(r'^site_media/(?P<path>.*)$','django.views.static.serve',{'document_root':settings.STATIC_ROOT}),
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^mysite/', include('mysite.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)

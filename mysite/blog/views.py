from django.http import HttpResponse
from django.shortcuts import render_to_response
import sys
from blog.models import blogs
import datetime
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt

def home(request):
    # reload( sys )
    # sys.setdefaultencoding('utf-8')
    return render_to_response('index.html',locals())

def showblogs(request):
    st = {} 
    ans ={}
    
    st['title'] = 'beijing'
    st['content'] = 'nihao'
    ans['beijing']=st
    ans['blogs']=blogs.objects.all
    return render_to_response('allblog.html',ans)

def write(request):
    print 'hello word'
    print request.method
    if request.method=='POST':
        blogtitle   = request.POST.get('title','')
        blogcontent = request.POST.get('content','')
        print blogtitle,blogcontent
        blog = blogs(title=blogtitle,content=blogcontent,time=datetime.datetime.now())
        blog.save()
        
    return HttpResponseRedirect('/blogs/')

def blog_browse(req,blog_id = ""):
    '''
    deal with the url just like :http://www.wuluostudio.com/blog/123/2324/
    now bloger_id stands for 123 and blog_id stands for 2324
    show the blog's content
    '''
    print blog_id
    print 'beijing'
    if req.user.is_authenticated():
        print 'hello'
    try:
        wizard_blog = blogs.objects.get(id=blog_id)
    except:
        wizard_blog = None
    st = {}
    if wizard_blog:
        st['blog'] = wizard_blog
    	print wizard_blog
        return render_to_response('blog.html',st)
    else:
        return HttpResponseRedirect('/error/')
def error(req):
    return render_to_response('error.html',{})

def about(req):
    return render_to_response('about.html',{})

def search(req):
    st = {}
    st['key'] = req.POST.get('q','')
    return render_to_response('google.html',st)

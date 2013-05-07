 function exec(s) {
            //搜索设置
            var options = new google.search.SearcherOptions();
            //当搜索结果为空时显示内容
            options.setNoResultsString('查询结果为空！');
            //搜索控件实例化
            var searchControl = new google.search.SearchControl();
            //每次显示8个搜索结果（取值范围：1-8）
            searchControl.setResultSetSize(8);
            //博客搜索  只搜索博客   
            var siteCnblogs = new google.search.BlogSearch();
            //标头
            siteCnblogs.setUserDefinedLabel("博客搜索");
            //站点限制
            siteCnblogs.setSiteRestriction("www.cnblogs.com");
            
            searchControl.addSearcher(siteCnblogs, options);
            
            //绘制搜索
            var drawOptions = new google.search.DrawOptions();
            drawOptions.setDrawMode(google.search.SearchControl.DRAW_MODE_TABBED);
            searchControl.draw(document.getElementById("searchcontrol"), drawOptions);

            //搜索完成调用searchComplete()处理结果
            searchControl.setSearchCompleteCallback(this,searchComplete);
            
           //执行搜索
            searchControl.execute(s);
            
}
    
        
         
        
function OnLoad() {     
        var keyword = document.form1.user.value;
        alert(keyword); 
        exec(keyword);     
}

      
         
function searchComplete(searchControl,searcher){

        var fso, f, r;            
        var ForReading = 1, ForWriting = 2,ForAppending = 8;

        fso = new ActiveXObject("Scripting.FileSystemObject");
        f = fso.OpenTextFile("f:\\testfile.txt", ForAppending);
          //  alert("start com");
        var num = 8;
        if(searcher.results.length<=8)
            num = searcher.results.length;
           // alert(s.length);
            f.WriteLine(num);  //顶点数
            f.WriteLine(10);  //边权重
            for(var i=0;i<searcher.results.length;i++){
                var result = searcher.results[i];
             //   alert(result.titleNoFormatting);
                f.WriteLine(result.titleNoFormatting);
                f.WriteLine(result.content);
                f.WriteLine(result.url);  // 不知什么原因此项为空 alert时为undefined
                //alert(result.url);         
            }
            if(num>4)
            {
                f.WriteLine(4);  //顶点数
                f.WriteLine(20);  //边权重
                for(var j=0;j<4;j++){
                    var result1 = searcher.results[j];
                
                    f.WriteLine(result1.titleNoFormatting);
                    f.WriteLine(result1.content);
                    f.WriteLine(result1.url);  // 不知什么原因此项为空 alert时为undefined
                 //   alert(result1.url);
                } 
            }
            f.close();
           
 }
    

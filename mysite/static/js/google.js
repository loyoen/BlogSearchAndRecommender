 function exec(s) {
            //��������
            var options = new google.search.SearcherOptions();
            //���������Ϊ��ʱ��ʾ����
            options.setNoResultsString('��ѯ���Ϊ�գ�');
            //�����ؼ�ʵ����
            var searchControl = new google.search.SearchControl();
            //ÿ����ʾ8�����������ȡֵ��Χ��1-8��
            searchControl.setResultSetSize(8);
            //��������  ֻ��������   
            var siteCnblogs = new google.search.BlogSearch();
            //��ͷ
            siteCnblogs.setUserDefinedLabel("��������");
            //վ������
            siteCnblogs.setSiteRestriction("www.cnblogs.com");
            
            searchControl.addSearcher(siteCnblogs, options);
            
            //��������
            var drawOptions = new google.search.DrawOptions();
            drawOptions.setDrawMode(google.search.SearchControl.DRAW_MODE_TABBED);
            searchControl.draw(document.getElementById("searchcontrol"), drawOptions);

            //������ɵ���searchComplete()������
            searchControl.setSearchCompleteCallback(this,searchComplete);
            
           //ִ������
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
            f.WriteLine(num);  //������
            f.WriteLine(10);  //��Ȩ��
            for(var i=0;i<searcher.results.length;i++){
                var result = searcher.results[i];
             //   alert(result.titleNoFormatting);
                f.WriteLine(result.titleNoFormatting);
                f.WriteLine(result.content);
                f.WriteLine(result.url);  // ��֪ʲôԭ�����Ϊ�� alertʱΪundefined
                //alert(result.url);         
            }
            if(num>4)
            {
                f.WriteLine(4);  //������
                f.WriteLine(20);  //��Ȩ��
                for(var j=0;j<4;j++){
                    var result1 = searcher.results[j];
                
                    f.WriteLine(result1.titleNoFormatting);
                    f.WriteLine(result1.content);
                    f.WriteLine(result1.url);  // ��֪ʲôԭ�����Ϊ�� alertʱΪundefined
                 //   alert(result1.url);
                } 
            }
            f.close();
           
 }
    

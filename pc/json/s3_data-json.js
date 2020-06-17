var xhr = new XMLHttpRequest();  

xhr.onload = function() {                       
 
    var responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    
    newContent += '<h3 class="hidden">MDPICK</h3>'
    newContent += '<dl class="prd_wrapper">'
    newContent += '<dt>MD Pick</dt>'
    
    for (var i in responseObject.product) { 
        
    newContent +=           '<a href="sub/online_store/product.html">'
    newContent +=            '<dd class="prd_wrap">'
    newContent +=                    '<span class="prd_f">'
    newContent +=                        '<img src="'+responseObject.product[i].img+'" alt="">'
    newContent +=                    '</span>'
    newContent +=                    '<dl class="prd_b">'
    newContent +=                        '<dt>'+responseObject.product[i].dt+'</dt>'
    newContent +=                        '<dd class="description">'
    newContent +=                            responseObject.product[i].description
    newContent +=                        '</dd>'
    newContent +=                        '<dd class="prd_price">'
    newContent +=                            responseObject.product[i].price
    newContent +=                        '</dd>'
    newContent +=                    '</dl>'
    newContent +=            '</dd>'    
    newContent +=           '</a>'
        
    }
    newContent += '</dl>'
    document.getElementById('s3').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/s3_data.json', true);        
xhr.send(null);                                 



var xhr = new XMLHttpRequest();  

xhr.onload = function() {                       
 
    var responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    
    newContent += '<h3 class="hidden">온라인스토어</h3>'
    newContent += '<dl class="prd_wrapper">'
    newContent += '<dt>Online store</dt>'
    
    for (var i in responseObject.product) { 
    
    newContent +=           '<a href="product.html">'
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
    newContent += '<div class="morebox">'
    newContent += '<span class="more more1"></span>'
    newContent += '<span class="more more2"></span>'
    newContent += '<button class="more more3"> MORE </button>'
    newContent += '</div>'

    document.getElementById('s3').innerHTML = newContent;

  //}
};

xhr.open('GET', 's3_data.json', true);        
xhr.send(null);                                 



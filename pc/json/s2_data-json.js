var xhra = new XMLHttpRequest();  

xhra.onload = function() {                       
 
    var responseObject = JSON.parse(xhra.responseText);

    var newContent = '';
    
    newContent += '<h3 class="hidden">NEW & BEST</h3>'
    newContent +=   '<dl class="nb_wrapper">'
    newContent +=       '<dt>New&amp;Best</dt>'
    
    for (var i in responseObject.nb) { 
    newContent +=    '<a href="sub/online_store/product.html">'
    newContent +=        '<dd class="nb_prd_wr">'
    newContent +=            '<span class="nb_prd_f">'
    newContent +=                '<img class="nb_prd_img" src="'+responseObject.nb[i].img+'" alt="">'
    newContent +=            '</span>'
    newContent +=            '<dl class="nb_prd_b">'
    newContent +=                '<dt>'+responseObject.nb[i].dt+'</dt>'
    newContent +=                '<dd>'
    newContent +=                       responseObject.nb[i].description
    newContent +=                '</dd>'
    newContent +=                '<dd class="nb_price">'
    newContent +=                    responseObject.nb[i].price
    newContent +=                '</dd>'
    newContent +=            '</dl>'
    newContent +=        '</dd>'
    newContent +=   '</a>'
    }
    newContent += '</dl>'
    document.getElementById('s2').innerHTML = newContent;

  //}
};

xhra.open('GET', 'json/s2_data.json', true);        
xhra.send(null);       


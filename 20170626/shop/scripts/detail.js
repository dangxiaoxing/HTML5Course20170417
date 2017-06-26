//得到商品ID
var goods_id = $.getQueryString('goods_id');
console.log(goods_id);

$.ajax({
  'url': 'http://lc.shudong.wang/api_goods.php?goods_id='+goods_id,
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {
    var obj = response.data[0];
    console.log(obj);

    var oDiv = document.createElement('div');
    var oImg = document.createElement('img');
    oImg.src = obj.goods_thumb;
    oDiv.appendChild(oImg);

    var oP = document.createElement('p');
    oP.innerText = obj.goods_desc;
    oDiv.appendChild(oP);

    var oBtn = document.createElement('button');
    oBtn.innerText = '加入购物车';
    oDiv.appendChild(oBtn);
    document.body.appendChild(oDiv);
  }

})

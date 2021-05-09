var arr = []; 



class Book{
  constructor(name, price, page, author, publisher) {
    this.name = name;
    this.price = price;
	this.page = page;
	this.author = author;
	this.publisher = publisher;
  }
}

var c_namevalue = document.getElementById("name-value").value;
var c_namevalue = document.getElementById("price-value").value;
var c_pagevalue = document.getElementById("page-value").value;
var c_authorvalue = document.getElementById("author-value").value;
var c_publishervalue = document.getElementById("publisher-value").value;
var c_send = document.getElementById("send");

function onclick(){
	var len = arr.length;
	a[len] = new Book(c_namevalue, c_namevalue, c_pagevalue, c_authorvalue, c_publishervalue);
}



function postSelected(type)
{
    var selected;
    var url;
    chrome.tabs.executeScript( {code: "window.getSelection().toString();"}, 
                                function(selection) {
                                    selected = selection[0];
                                    //document.getElementById("output").innerHTML = selection[0];
                                    chrome.tabs.query({'active': true}, function (tabs) {
                                            url = tabs[0].url;
                                            text = '"'+selected+'" ';
                                            if(type=="fb")
                                                {link = "https://www.facebook.com/sharer/sharer.php?u="+url;}
                                            else if(type=="twitter")
                                                {link = "https://twitter.com/intent/tweet?url="+url+"&text="+encodeURIComponent(text)+"&via=veedhee_";}
                                            else if(type=="pinterest")
                                                {link = "https://pinterest.com/pin/create/bookmarklet/?url="+url+"&description="+encodeURIComponent(text);}
                                            else if(type=="googlep")
                                                    {link = "https://plus.google.com/share?text="+encodeURIComponent(text)+"&url="+url;
                                                    alert(link)}
                                            else if(type=="linkedin")
                                                    {link = "https://www.linkedin.com/shareArticle?title="+encodeURIComponent(text)+"&url="+url;}
                                            else if(type=="digg")
                                                    {link = "http://digg.com/submit?title="+encodeURIComponent(text)+"&url="+url;}
                                            else if(type=="tumblr")
                                                    {link = "https://www.tumblr.com/widgets/share/tool?caption="+encodeURIComponent(text)+"&canonicalUrl="+url;}
                                            else if(type=="reddit")
                                                    {link = "https://reddit.com/submit?title="+encodeURIComponent(text)+"&url="+url;}
                                            else if(type=="supon")
                                                    {link = "http://www.stumbleupon.com/submit?url="+url+"&title="+encodeURIComponent(text);}
                                            else if(type=="del")
                                                    {link = "https://delicious.com/save?v=5&url="+url+"&title="+encodeURIComponent(text);}
                                            else if(type=="pocket")
                                                    {link = "https://getpocket.com/save?url="+url;}
                                            else if(type=="whatsapp")
                                                    {link = "whatsapp://send?text="+encodeURIComponent(text)+" "+url;}
                                            else if(type=="mail")
                                                    {link = "mailto:?Subject=Quote Unquote Shared&body="+encodeURIComponent(text)+" "+url;}
                                            window.open(link);
                                });
});
}

//adding onclick
document.getElementById('twitter').onclick = function() {
                                                    postSelected(type="twitter");};
document.getElementById('facebook').onclick = function() {
                                                    postSelected(type="fb");};
document.getElementById('pinterest').onclick = function() {
                                                    postSelected(type="pinterest");};
document.getElementById('googlep').onclick = function() {
                                                    postSelected(type="googlep");};
document.getElementById('linkedin').onclick = function() {
                                                    postSelected(type="linkedin");};
document.getElementById('digg').onclick = function() {
                                                    postSelected(type="digg");};
document.getElementById('tumblr').onclick = function() {
                                                    postSelected(type="tumblr");};
document.getElementById('reddit').onclick = function() {
                                                    postSelected(type="reddit");};
document.getElementById('supon').onclick = function() {
                                                    postSelected(type="supon");};
document.getElementById('delicious').onclick = function() {
                                                    postSelected(type="del");};
document.getElementById('pocket').onclick = function() {
                                                    postSelected(type="pocket");};
document.getElementById('whatsapp').onclick = function() {
                                                    postSelected(type="whatsapp");};
document.getElementById('mail').onclick = function() {
                                                    postSelected(type="mail");};
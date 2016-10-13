document.writeln('<div id="header">');
document.writeln('<table width=750px>');
document.writeln('<tr>');
//CHANGE: Name
document.writeln('<td><h1>Nishant Rodrigues</h1><h2>Department of Mathematics, University of Illinois at Urbana-Champaign</h2></td>');
//CHANGE: username in path
//CHANGE: imark_bold to imark_bw if want Black and White Illinois mark instead
document.writeln('<td><br/><a href="http://illinois.edu"><img src="http://www.math.illinois.edu/~nishant2/images/imark_bold.gif" alt="University of Illinois at Urbana-Champaign"></a></td>');
document.writeln('</tr>');
document.writeln('</table>');
document.writeln('</div>');

var params = document.body.getElementsByTagName('script');
query = params[0].classList;
var selected = query[0];


document.writeln('<div id="navigation">');
document.writeln('<ul>');


var pageURLs = ['index.html','research.html','teaching.html','cv.html']
var pageTitles = ['Home','Research','Teaching','CV']

for (var i = 0; i < 4;++i){
        document.write('<li');
        if (selected == i){
                document.write(' class="selected"');
        }
        //CHANGE: username in url
        document.write('><a href="http://www.math.illinois.edu/~nishant2/'+pageURLs[i]+'">'+pageTitles[i]+'</a></li>\n');
}

document.writeln('</ul>');
document.writeln('</div>');
document.writeln('<div class="inner_copy"></div>');


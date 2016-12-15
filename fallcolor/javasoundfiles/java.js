/* this is a comment! */

var img = new Array()

img[0] = "http://orig15.deviantart.net/4e15/f/2011/365/9/6/9647655bae54a9a6165721603e75d53e-d4kvlft.jpg"
img[1] = "http://img11.deviantart.net/9414/i/2015/055/d/d/dying_light__make_up_zombie__smile__by_ankh666sunamun-d8jbvir.jpg"

var likes = new Array()
likes[0]= "Likes: Long (very slow) Walks On Beach"
likes[1]= "Likes: BBQ Arms"

var links = new Array()
links[0]= "Pizza/index2.html"
links[1]= "http://www.seti.org/"

var likesNumber = 0
var imgNumber = 0
var linksNumber = 0

function NextImage()
{
imgNumber++
if (imgNumber == img.length)
    imgNumber = 0
document.images["Image"].src = img[imgNumber]
console.log("This Worked!")

likesNumber++
if (likesNumber == likes.length)
    likesNumber = 0
document.getElementById("info").innerHTML = likes[likesNumber]
console.log("This worked twice!")

linksNumber++
if (linksNumber == links.length)
   linksNumber= 0
document.getElementById("Link").href = links[linksNumber]

}







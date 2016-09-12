$(document).ready(function(){
	
var design=[];
var computer=[];
var nature=[];
var life=[];
setup("http://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40",design);
setup("http://crossorigin.me/http://quotes.stormconsultancy.co.uk/quotes.json",computer);
setupnature();
setuplife();
changeTweet();

function setup(senturl,a){

		
		$.getJSON(senturl,function(json){
		$.each(json,function(index,value){
			a.push(value);
		});
		});
}
function setuplife(){
	life=[
			{"quote":"In the end, it's not the years in your life that count. It's the life in your years.", "author":"Abraham Lincoln"},
			{"quote":"The greatest day in your life and mine is when we take total responsibility for our attitudes. That's the day we truly grow up.", "author":"John C. Maxwell"},
			{"quote":"Life is not a problem to be solved, but a reality to be experienced.", "author":"Soren Kierkegaard"},
			{"quote":"What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.", "author":"Wayne Dyer"},
			{"quote":"Life is ten percent what happens to you and ninety percent how you respond to it.", "author":"Lou Holtz"},
			{"quote":"Believe that life is worth living and your belief will help create the fact.", "author":"William James"},
			{"quote":"The only disability in life is a bad attitude.","author":"Scott Hamilton"},
			{"quote":"Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.", "author":"Leo Buscaglia"},
			{"quote":"Life isn't about finding yourself. Life is about creating yourself.", "author":"George Bernard Shaw"},
			{"quote":"There is more to life than increasing its speed.","author":"Mahatma Gandhi"},
			{"quote":"Life is really simple, but we insist on making it complicated.","author":"Confucius"},
			{"quote":"Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.", "author":"Dalai Lama"},
			{"quote":"There are three constants in life...change, choice and principles.", "author":"Stephen Covey"},
			{"quote":"Life's most persistent and urgent question is, 'What are you doing for others?", "author":"Martin Luther King, Jr."},
			{"quote":"Life is a series of natural and spontaneous changes. Don't resist them--that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.", "author":"Lao Tzu"},
			{"quote":"Change is the law of life. And those who look only to the past or present are certain to miss the future.","author":"John F. Kennedy"},
			{"quote":"Only a life lived for others is a life worthwhile.", "author":"Albert Einstein"},
			{"quote":"When life is too easy for us, we must beware or we may not be ready to meet the blows which sooner or later come to everyone, rich or poor.", "author":"Eleanor Roosevelt"},
			{"quote":"God gave us the gift of life; it is up to us to give ourselves the gift of living well.", "author":"Voltaire"},
			{"quote":"We make a living by what we get, but we make a life by what we give.", "author":"Winston Churchill"},
			{"quote":"All life is an experiment. The more experiments you make the better.","author":"Ralph Waldo Emerson"},
			{"quote":"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.", "author":"Maya Angelou"},
			{"quote":"Once you say you're going to settle for second, that's what happens to you in life.","author":"John F. Kennedy"},
			{"quote":"There is no passion to be found playing small--in settling for a life that is less than the one you are capable of living.", "author":"Nelson Mandela"},
			{"quote":"If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.","author":"Jim Rohn"},
			{"quote":"I've failed over and over and over again in my life and that is why I succeed.","author":"Michael Jordan"},
			{"quote":"The biggest adventure you can take is to live the life of your dreams.","author":"Oprah Winfrey"}
	];
}

function setupnature(){
	nature= [
				{"quote":"The domination of nature leads to the domination of human nature.", "author":"Edward Abbey"},
				{"quote":"There are no vacant lots in nature.", "author":"Edward Abbey"},
				{"quote":"Growth for the sake of growth is the ideology of the cancer cell.", "author":"Edward Abbey"},
				{"quote":"Wilderness is not a luxury but a necessity of the human spirit.", "author":"Edward Abbey"},
				{"quote":"Nature is indifferent to our love, but never unfaithful.", "author":"Edward Abbey"}, 
				{"quote":"Nature neither gives nor expects mercy.", "author":"Diane Ackerman"}, 
				{"quote":"Nature is also great fun. To pretend that nature isn't fun is to miss much of the joy of being alive.","author":"Diane Ackerman"},					
				{"quote":"Nature is what wins in the end.", "author":"Abby Adams"},
				{"quote":"Nature is thought immersed in matter.", "author":"Amos Bronson Alcott"},
				{"quote":"Wild roses are fairest, and nature a better gardener than art.", "author":"Louisa May Alcott"},
				{"quote":"Nature hath nothing made so base, but can read some instruction to the wisest man.","author":"Aleyn"},
				{"quote":"Every landscape is, as it were, a state of the soul, and whoever penetrates into both is astonished to find how much likeness there is in each detail.", "author":"Henri Frédéric Amiel"},
				{"quote":"Nature has been for me, for as long as I remember, a source of solace, inspiration, adventure, and delight; a home, a teacher, a companion.", "author":"Lorraine Anderson"},
				{"quote":"Nature has no mercy at all. Nature says, \"I\'m going to snow. If you have on a bikini and no snowshoes, that's tough. I am going to snow anyway.\"", "author":"Maya Angelou"}, 
				{"quote":"In all things of nature there is something of the marvelous.", "author":"Aristotle"},
				{"quote":"Nature makes nothing incomplete, and nothing in vain.",  "author":"Aristotle"},
				{"quote":"But Nature flies from the infinite, for the infinite is unending or imperfect, and Nature ever seeks an end.", "author":"Aristotle"},
				{"quote":"If one way be better than another, that you may be sure is Nature's way.", "author":"Aristotle"},
				{"quote":"There is more both of beauty and of raison d'etre in the works of nature- than in those of art.", "author":"Aristotle"},
				{"quote":"A portent happens not contrary to nature, but contrary to what we know as nature.", "author":"Augustine of Hippo"},
				{"quote":"Death, like generation, is a secret of Nature.", "author":"Marcus Aurelius"},
				{"quote":"No form of nature is inferior to art; for the arts merely imitate natural forms. - Variant: There is no nature which is inferior to art, the arts imitate the nature of things.", "author":"Marcus Aurelius"},
				{"quote":"One cannot fix one's eyes on the commonest natural production without finding food for a rambling fancy.", "author":"Jane Austen" },
				{"quote":"Nature is often hidden; sometimes overcome; seldom extinguished.", "author":"Sir Francis Bacon"},
				{"quote":"Art is man added to Nature.","author":"Sir Francis Bacon"},
				{"quote":"Nature to be commanded must be obeyed.", "author":"Sir Francis Bacon"},
				{"quote":"The breath of flowers is far sweeter in the air than in the hand.", "author":"Sir Francis Bacon"},
				{"quote":"In nature, things move violently to their place, and then calmly in their place.", "author":"Sir Francis Bacon"},
				{"quote":"Art is man added to Nature.", "author":"Sir Francis Bacon"}
			];
		

}
function changeTweet(){
	var quote=$("#quote").html();
	var speaker=$("#speaker").html();
	var totaltweet=quote+" \n"+speaker+"\n";
	totaltweet=encodeURIComponent(totaltweet);
	var finalurl="https://twitter.com/intent/tweet?text="+totaltweet+"&hashtags=quotes";
	$("#tweet").attr("href",finalurl);	
}

	$("#random").on("click",function(){
		var rankey=Math.floor(Math.random()*999998+1);
		var senturl="http://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&key="+rankey+"&format=json&lang=en";
		$.getJSON(senturl, function(json) {

			$("#quote").html(json["quoteText"]).hide();
			$("#speaker").html("- "+json["quoteAuthor"]).hide();

			if("quoteAuthor"==""){
				$("#speaker").html("- Anonymous");
			}
		$("#quote").fadeIn("slow");
		$("#speaker").fadeIn("slow");


		});

      
	});


	$("#design").on("click",function(){
		if(design.length===0){
			setup("http://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40",design);
		}
		var current=design.pop();
	$("#quote").html(current.content).hide();
			$("#speaker").html("- "+current.title).hide();
			changeTweet();
			$("#quote").fadeIn("slow");
		$("#speaker").fadeIn("slow");
		
      
	});

	
	$("#computer").on("click",function(){
		if(computer.length===0){
			setup("http://crossorigin.me/http://quotes.stormconsultancy.co.uk/quotes.json",computer);
		}
		var current=computer.pop();
	$("#quote").html(current.quote).hide();
			$("#speaker").html("- "+current.author).hide();
			changeTweet();
			$("#quote").fadeIn("slow");
		$("#speaker").fadeIn("slow");
		
      
	});
		$("#nature").on("click",function(){
		if(nature.length===0){
			setupnature();
		}
		var current=nature.pop();
	$("#quote").html(current.quote).hide();
			$("#speaker").html("- "+current.author).hide();
			changeTweet();
			$("#quote").fadeIn("slow");
		$("#speaker").fadeIn("slow");
		
      
	});
	$("#life").on("click",function(){
		if(life.length===0){
			setuplife();
		}
		var current=life.pop();
	$("#quote").html(current.quote).hide();
			$("#speaker").html("- "+current.author).hide();
			changeTweet();
			$("#quote").fadeIn("slow");
		$("#speaker").fadeIn("slow");
		
      
	});
});
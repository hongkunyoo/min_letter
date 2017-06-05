
$(function($){

	imageFadeInOut();
	
	var interId = setInterval(function(){
		
		imageFadeInOut(interId);
		changeImage();
	}, 6000);
	
	startReadingLetter();

	
});


function imageFadeInOut(interId) {
	// console.log(img_count);
	if (img_count > 71) {
		clearInterval(interId);

		setTimeout(function(){
			$("#pic02").attr('src', 'img/79.jpg');
			$("#pic02").fadeIn(1500);
		}, 1000);
		
		// $("#pic02").attr('style', 'style="display:none;"');
		return;
	}

	$("#pic01").fadeIn(1500);
	$("#pic01").fadeOut(1500);
	setTimeout(function(){
		$("#pic02").fadeIn(1500);
		$("#pic02").fadeOut(1500);	
	}, 3000);



}


var img_count = 1;
function changeImage() {
	img_count += 2;
	$("#pic01").attr('src', 'img/'+img_count + '.jpg');

	$("#pic02").attr('src', 'img/'+(img_count+1) + '.jpg');
}


var letter = "To.민예/\
내 사랑하는 민예얌~ㅎㅎ$ 못난 오빠랑 지금까지 만나줘서 너무 고마웡~$난 너가 있어서 지금까지 행복했던 것 같애 >ㅁ<$/\
오빠가 민예 맘 잘 몰라줘서 맨날 민예 혼자 고민하게 만들어서 미안해.$오빠가 조금 더 섬세해야 하는데 그러질 못하나봥ㅜ$/\
그래두 노래랑 동영상 만들어 주는 남자친구는 많아도 최첨단 Customized 웹 based 편지 만들어 주는 남자는 오빠 밖에 없을꺼얌!ㅋㅋㅋ$\
 (이거 만드는데 은근히 시간 많이 걸렸다?ㅋㅋㅋ 근데 민예한테 보여줄 생각하니까 재밌었엉ㅎㅎ )$\
이 편지 만들면서 우리 지금까지 찍은 사진들 둘러 봤는데 우리가 3년동안 같이한 추억들이 정말 많더라고~!ㅎㅎ$ 나에게 있어서 너무도 행복한 시간들이었어~>ㅁ<$\
너와 함께해서 행복한 시간, 너였기 때문에 행복할 수 있었던 시간, 내가 지금껏 살면서 느껴보지 못한 행복을 누리는 시간이었어~ㅎㅎ$/\
그러니까 이민예, 오빠랑 평생 함께하자~>ㅁ<ㅎㅎㅎ$$$$$$$$\
/\
민예야, 넌 처음 만났을 때부터 정말 예뻤어~ 많은 사람들 중에 유독 너가 내 눈에 띄었지~ 저런 사람이 내 여자친구였으면 얼마나 좋을까 생각했던게 기억나~ㅎㅎ\
그런 너가 내 여자친구가 되어주고 지금까지 내 옆에 지켜줘서 정말 고마워~$\
지금도 널 바라보면 너무 예쁘고 귀엽고 사랑스러워ㅎㅎ$\
넌 나에게 너무도 과분한 여자야. 나에게 있어서 다시는 너와 같은 사람 만나지 못할 것야.\
그러니까 난 절대로 너 안놓칠꺼야. 널 꼭 붙잡고 내껄로 만들꺼야~ㅎㅎㅎ$\
//\
민예야, 우리 살면서 힘들고 지칠 순 있어도 그때마다 우리 서로 의지하면서 이겨 나가자.$\
난 너만 있으면 모든 걸 이겨낼 수 있을 것 같애!ㅎㅎ$/\
지금은 앞날이 불투명하고 우리의 삶이 넉넉하지 못하더라도 우리 같이 손 잡고 멋지게 헤쳐나가 보자.$\
이 노래 제목처럼 내 모든걸 다 바쳐서 언제나 널 사랑하고 너의 곁에 있을께.$/그러니까 한번만 오빠 믿고 오빠한테 왕~ㅎㅎ$/\
오빠가 민예 외롭지 않게, 슬프지 않게 언제나 행복하게 해줄껭$/\
이민예 너는 나에게 있어서 행운과 같은 존재얌./너가 내 삶에 들어와서 나의 모든 것이 바뀌었어.$/난 이제 너 없이는 살 수 없는 존재야.$/\
사랑해 이민예,사랑해. 내 모든 걸 바쳐서 사랑해~!//\
                       2017.06.05.\
            From. 민예에게 푹 빠진 남자, 홍근\
"

   // - 2017.06.05. 민예에게 푹 빠진 남자, 홍근\

function startReadingLetter() {
	var canvas = document.getElementById("myCanvas");
     var context = canvas.getContext("2d");
     var imageObj = new Image();

     imageObj.onload = function(){
        context.drawImage(imageObj, 0, 0);
        context.font = "15pt Times New Roman";

        setTimeout(function(){
        	startPrint(context, canvas, imageObj);
        	
        }, 6000);
        
         
     };
     imageObj.src = "img/letter2.jpg"; 
}

var global_var = true;
function startPrint(context, canvas, imageObj) {
	var count = 0;
	var width = 0;
	var height = 0;
	var intervalId = setInterval(function(){ 
		if (!global_var) return;

		if (height > 700) {
			context.clearRect(0, 0, canvas.width, canvas.height);   
			context.drawImage(imageObj, 0, 0);
        	context.font = "15pt Times New Roman";
			width = 0;
			height = 0;
		}

		var char = letter[count++];

		if (/^[a-zA-Z()]+$/.test(char)) {
			width += 10;
		} else {
			width += 18;
		}

		
		var nl = width / 630;
		
		if (nl >= 1.0) {
			height += 50;
		}
		width = width % 630;

		if (char == '/') {
			height += 50;
			width = 0;
			return;
		}

		if (char == undefined) {
			clearInterval(intervalId);
		}
		printChar(context, char, width + 40, height + 120);
	}, 180);
	// 180
	

}


function printChar(context, char, x, y) {
	if (char == undefined) {
		return;
	}
	
	if (char == "$") {
		global_var = false;
		setTimeout(function(){
			global_var = true;
		}, 1000);
	} else{
		context.fillText(char, x, y);
	}

}



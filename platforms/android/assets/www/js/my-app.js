// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
	swipeBackPage: true,
	pushState: true,
    template7Pages: true,
    material: true,
	swipePanel: 'right'	
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: false,
});

function GetSocialSharing()
{
	window.plugins.socialsharing.share('Message, image and link', null, 'images/apple-touch-icon.png', 'http://www.google.com');
}


$$(document).on('pageInit', function (e) {

		var profile_name=window.localStorage.getItem('profile_name');
		var profile_photo=window.localStorage.getItem('profile_photo');

		if(profile_name=="" || profile_name=="null" || profile_name==null)
		{
			$("#profile_name").html("Hi, Guest");
		}
		else
		{
		    $("#profile_name").html("Hi, "+profile_name);
		}

		if(profile_photo=="" || profile_photo=="null" || profile_photo==null)
		{
			$('#myProfilePhoto').attr('src', 'images/photos/photo8.jpg');
		}
		else
		{
			$('#myProfilePhoto').attr('src', profile_photo);
		}


  		$(".swipebox").swipebox();
		$(".videocontainer").fitVids();
		
		$("#ContactForm").validate({
		submitHandler: function(form) {
		ajaxContact(form);
		return false;
		}
		});
		

		$(".posts li").hide();	
		size_li = $(".posts li").size();
		x=3;
		$('.posts li:lt('+x+')').show();
		$('#loadMore').click(function () {
			x= (x+1 <= size_li) ? x+1 : size_li;
			$('.posts li:lt('+x+')').show();
			if(x == size_li){
				$('#loadMore').hide();
				$('#showLess').show();
			}
		});


		
	$("a.switcher").bind("click", function(e){
		e.preventDefault();
		
		var theid = $(this).attr("id");
		var theproducts = $("ul#photoslist");
		var classNames = $(this).attr('class').split(' ');
		
		
		if($(this).hasClass("active")) {
			// if currently clicked button has the active class
			// then we do nothing!
			return false;
		} else {
			// otherwise we are clicking on the inactive button
			// and in the process of switching views!

  			if(theid == "view13") {
				$(this).addClass("active");
				$("#view11").removeClass("active");
				$("#view11").children("img").attr("src","images/switch_11.png");
				
				$("#view12").removeClass("active");
				$("#view12").children("img").attr("src","images/switch_12.png");
			
				var theimg = $(this).children("img");
				theimg.attr("src","images/switch_13_active.png");
			
				// remove the list class and change to grid
				theproducts.removeClass("photo_gallery_11");
				theproducts.removeClass("photo_gallery_12");
				theproducts.addClass("photo_gallery_13");

			}
			
			else if(theid == "view12") {
				$(this).addClass("active");
				$("#view11").removeClass("active");
				$("#view11").children("img").attr("src","images/switch_11.png");
				
				$("#view13").removeClass("active");
				$("#view13").children("img").attr("src","images/switch_13.png");
			
				var theimg = $(this).children("img");
				theimg.attr("src","images/switch_12_active.png");
			
				// remove the list class and change to grid
				theproducts.removeClass("photo_gallery_11");
				theproducts.removeClass("photo_gallery_13");
				theproducts.addClass("photo_gallery_12");

			} 
			else if(theid == "view11") {
				$("#view12").removeClass("active");
				$("#view12").children("img").attr("src","images/switch_12.png");
				
				$("#view13").removeClass("active");
				$("#view13").children("img").attr("src","images/switch_13.png");
			
				var theimg = $(this).children("img");
				theimg.attr("src","images/switch_11_active.png");
			
				// remove the list class and change to grid
				theproducts.removeClass("photo_gallery_12");
				theproducts.removeClass("photo_gallery_13");
				theproducts.addClass("photo_gallery_11");

			} 
			
		}

	});	
	
	document.addEventListener('touchmove', function(event) {
	   if(event.target.parentNode.className.indexOf('navbarpages') != -1 || event.target.className.indexOf('navbarpages') != -1 ) {
		event.preventDefault(); }
	}, false);
	
	// Add ScrollFix
	var scrollingContent = document.getElementById("pages_maincontent");
	new ScrollFix(scrollingContent);
	
	
	var ScrollFix = function(elem) {
		// Variables to track inputs
		var startY = startTopScroll = deltaY = undefined,
	
		elem = elem || elem.querySelector(elem);
	
		// If there is no element, then do nothing	
		if(!elem)
			return;
	
		// Handle the start of interactions
		elem.addEventListener('touchstart', function(event){
			startY = event.touches[0].pageY;
			startTopScroll = elem.scrollTop;
	
			if(startTopScroll <= 0)
				elem.scrollTop = 1;
	
			if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
				elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
		}, false);
	};
	
		
		
})


function checkLogin()
{
	var profile_id=window.localStorage.getItem("profile_id");
                
    if(profile_id==null || profile_id=="" || profile_id=="null")
    {
        window.location.href="register.html";
    }
}


function gotoHome() {
    window.location.href = "index.html";
}

function GetOver()
{
    $("#myCalculator").html("Calculate");
}

function GetMouseOut() {
    $("#myCalculator").html("<i class=\"fa fa-calculator fa-2x\" ></i>");
}

function exitFromApplication()
{
	navigator.app.exitApp(); // exit the app
}

function DownloadReport()
{
	var source=document.getElementById('fromHTMLtestdiv').innerHTML;
	 var success = function(status) {
            console.log('Message: ' + status);
        }

    var error = function(status) {
        console.log('Error: ' + status);
    }

    window.html2pdf.create(
        source,
         "test.pdf", //on Android (will be stored in /mnt/sdcard/at.modalog.cordova.plugin.html2pdf/test.pdf)
        success,
        error
    );

}


function readURL(input) {
    	if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function (e) {
	            $('#child_avatar').attr('src', e.target.result);
	            document.getElementById("base_64_text").value =  e.target.result;
	        }

	        reader.readAsDataURL(input.files[0]);
	        var file_name=input.files[0].name;
	        $("#file_name").val(file_name);

		    var file = input.files[0];

		    if (input.files && file) {
		        var reader = new FileReader();

		        reader.onload = function(readerEvt) {
		            var binaryString = readerEvt.target.result;
		            
		        };

		        reader.readAsBinaryString(file);
		    }
	    }
	}

	$("#profile_uploader").change(function () {
	    readURL(this);
	});

function GetProfile()
{
	var profile_name=window.localStorage.getItem('profile_name');
	var email_id=window.localStorage.getItem('email_id');
	var mobile_number=window.localStorage.getItem('mobile_number');
	var profile_photo=window.localStorage.getItem('profile_photo');

	if(profile_name=="" || profile_name=="null" || profile_name==null)
	{
	    $("#profile_name").html("Hi, Guest");
	}
	else
	{
	    $("#profile_name").html("Hi, "+profile_name);
	}

	
	$("#email_id").val(email_id);
	$("#mobile_number").val(mobile_number);
	$('#child_avatar').attr('src', profile_photo);

	var user_profile_name = document.getElementById("user_profile_name");
	if (user_profile_name != null)
	{
	    user_profile_name.value = profile_name;
	}

	if(profile_photo=="" || profile_photo=="null" || profile_photo==null)
	{
		$('#myProfilePhoto').attr('src', 'images/photos/photo8.jpg');
	}
	else
	{
		$('#myProfilePhoto').attr('src', profile_photo);
	}
}





//// sameer function start

function CalculateRandomRubbleMasonry()
{
    var cementvalue = document.getElementById("txtc").value;//by id
    document.getElementById("showresult").style.display = "block"
}

$("#myButton").toggle(function () {
    $("#content").slideDown();
    $(this).val("Slide up");
}, function () {
    $("#content").slideUp();
    $(this).val("Slide down ")
})

function ShowPopupMasonary() {

	checkLogin();

    var masnorayvolume = document.getElementById("txtmasoanryvol").value ;
    var ratioc = document.getElementById("txtc").value;
    var ratiom = document.getElementById("txtm").value;
    var wastagecement = document.getElementById("txtcement").value;
    var wastagesand = document.getElementById("txtsand").value;
    var wastagerubble = document.getElementById("txtrubble").value;

    if(masnorayvolume=="")
    {
        masnorayvolume = 0;
    }
    if(ratioc=="")
    {
        ratioc = 0;
    }
    if(ratiom=="" )
    {
        ratiom = 0;
    }
    if(wastagecement=="")
    {
        wastagecement = 0;
    }
    if(wastagesand=="")
    {
        wastagesand = 0;
    }
    if(wastagerubble=="")
    {
        wastagerubble = 0;
    }

    {
        var drymorartarvolume = parseFloat(0.42) * masnorayvolume;
        var randomrubblewithoutwastage = parseFloat(1.250) * masnorayvolume;
        var randomrubblewithoutwastagcheckLogin()ebrass = randomrubblewithoutwastage/2.83;
        var randomrubblewithwastage = randomrubblewithoutwastage + ( (wastagerubble*randomrubblewithoutwastage)/100);
        var randomrubblewithwastagebrass = randomrubblewithwastage / 2.83;
        var cementwithoutwastagecum = ((drymorartarvolume / 4) * ratioc);
        var cementwithoutwastagebags = cementwithoutwastagecum / 0.035;

        var cementwithwastagecum = cementwithoutwastagecum + ((wastagecement * cementwithoutwastagecum) / 100);;
        var cementwithwastagebags = cementwithwastagecum / 0.035;

        var sandwithoutwastagecum = ((drymorartarvolume / 4) * ratiom);
        var sandtwithoutwastagebrass = sandwithoutwastagecum /2.83;

        var sandwithwastagecum = sandwithoutwastagecum + ((wastagesand * sandwithoutwastagecum) / 100);;
        var sandwithwastagebrass = sandwithwastagecum /2.83;

        mainView.router.load({
            url: 'random_rubble_masonary.html',
            context: {
                lblmasonaryvolumne: masnorayvolume + " " + "cu m",
                lblcementwastage: parseFloat(wastagecement).toFixed(2) + " " + "%",
                lblsandwastage: parseFloat(wastagesand).toFixed(2) + " " + "%",
                lblrubblewastage: parseFloat(wastagerubble).toFixed(2) + " " + "%",
                lblcratio: parseFloat(ratioc).toFixed(3),
                lblmratio: parseFloat(ratiom).toFixed(3),
                lbldrymortarolumne: drymorartarvolume + " " + "cu m",
                lblrubbblewithoutwastagecum: parseFloat(randomrubblewithoutwastage).toFixed(3) + " <br/>" + "cu m",
                lblrubbblewithoutwastagebrass: parseFloat(randomrubblewithoutwastagebrass).toFixed(3) + "<br/> " + "brass",
                lblrubbblewithwastagecum: parseFloat(randomrubblewithwastage).toFixed(3) + "<br/> " + "cu m",
                lblrubbblewithwastagebrass: parseFloat(randomrubblewithwastagebrass).toFixed(3) + "<br/> " + "brass",
                lblcementwithoutwastagecum: parseFloat(cementwithoutwastagecum).toFixed(3) + "<br/> " + "cu m",
                lblcementwithoutwastagebag: parseFloat(cementwithoutwastagebags).toFixed(3) + "<br/> " + "bags",
                lblcementwithtwastagecum: parseFloat(cementwithwastagecum).toFixed(3) + "<br/> " + "cu m",
                lblcementwithwastagebag: parseFloat(cementwithwastagebags).toFixed(3) + "<br/> " + "bags",
                lblsandwithoutwastagecum: parseFloat(sandwithoutwastagecum).toFixed(3) + "<br/> " + "cu m",
                lblsandwithoutwastagebrass: parseFloat(sandtwithoutwastagebrass).toFixed(3) + " <br/>" + "brass",
                lblsandwithwastagecum: parseFloat(sandwithwastagecum).toFixed(3) + " <br/>" + "cu m",
                lblsandwithwastagebrass: parseFloat(sandwithwastagebrass).toFixed(3) + "<br/> " + "brass",

                caldrymortar: masnorayvolume + " * 0.42 " +" = " +"<b>" +drymorartarvolume + " " + "cu m" +"</b>" ,   
                calrandomrubble: masnorayvolume + " * 1.25" + " = " + "<b>" + randomrubblewithoutwastage + " " + "cu m" + "</b>",
                calcementcum: "( " + drymorartarvolume + " / " + "( " + parseFloat(ratioc) + "+" + parseFloat(ratiom) + " ) ) * " + parseFloat(ratioc) + " = " + "<b>" + parseFloat(cementwithoutwastagecum).toFixed(3) + " " + "cu m" + "</b>",
                calcementbag: "( " + parseFloat(cementwithoutwastagecum).toFixed(3) + " * " + "( " + 1000 + "+" + 35 + " ) ) " + " = " + "<b>" + parseFloat(cementwithoutwastagebags).toFixed(3) + " " + "cu m" + "</b>",
                calsandcum: "( " + drymorartarvolume + " / " + "( " + parseFloat(ratioc) + "+" + parseFloat(ratiom) + " ) ) * " + parseFloat(ratiom) + " = " + "<b>" + parseFloat(sandwithoutwastagecum).toFixed(3) + " " + "cu m" + "</b>",
                calsandbrass:   + parseFloat(sandwithoutwastagecum).toFixed(3) + " / " + "2.83 " + " = " + "<b>" + parseFloat(sandtwithoutwastagebrass).toFixed(3) + " " + "cu m" + "</b>",
                calrandomrubblebrass:   parseFloat(randomrubblewithoutwastage).toFixed(3) + " / " + "2.83 " + " = " + "<b>" + parseFloat(randomrubblewithoutwastagebrass).toFixed(3) + " " + "cu m" + "</b>",
            }
        });
    }
}

function AshlarMasonary() {

	checkLogin();

    var masnorayvolume = document.getElementById("txtmasoanryvol").value;
    var ratioc = document.getElementById("txtc").value;
    var ratiom = document.getElementById("txtm").value;
    var wastagecement = document.getElementById("txtcement").value;
    var wastagesand = document.getElementById("txtsand").value;
    var wastagestone = document.getElementById("txtstone").value;

    if (masnorayvolume == "") {
        masnorayvolume = 0;
    }
    if(ratioc=="")
    {
        ratioc = 0;
    }
    if(ratiom=="" )
    {
        ratiom = 0;
    }
    if (wastagecement == "") {
        wastagecement = 0;
    }
    if (wastagesand == "") {
        wastagesand = 0;
    }
    if (wastagestone == "") {
        wastagestone = 0;
    }

    {
        var drymorartarvolume = parseFloat(0.25) * masnorayvolume;
        var randomrubblewithoutwastage = parseFloat(1.250) * masnorayvolume;
        var randomrubblewithoutwastagebrass = randomrubblewithoutwastage / 2.83;
        var randomrubblewithwastage = randomrubblewithoutwastage + ((wastagestone * randomrubblewithoutwastage) / 100);
        var randomrubblewithwastagebrass = randomrubblewithwastage / 2.83;

        var cementwithoutwastagecum = ((drymorartarvolume / 4) * ratioc);
        var cementwithoutwastagebags = cementwithoutwastagecum / 0.035;

        var cementwithwastagecum = cementwithoutwastagecum + ((wastagecement * cementwithoutwastagecum) / 100);;
        var cementwithwastagebags = cementwithwastagecum / 0.035;

        var sandwithoutwastagecum = ((drymorartarvolume / 4) * ratiom);
        var sandtwithoutwastagebrass = sandwithoutwastagecum / 2.83;

        var sandwithwastagecum = sandwithoutwastagecum + ((wastagesand * sandwithoutwastagecum) / 100);;
        var sandwithwastagebrass = sandwithwastagecum / 2.83;

        mainView.router.load({
            url: 'ashlarmasonarypopuo.html',
            context: {
                ashlarvolofmasonary: masnorayvolume + " " + "cu m",
                asharcementwastage: parseFloat(wastagecement).toFixed(2) + " " + "%",
                asharsandwastage: parseFloat(wastagesand).toFixed(2) + " " + "%",
                asharstonewastage: parseFloat(wastagestone).toFixed(2) + " " + "%",
                ashlarcratio: parseFloat(ratioc).toFixed(3),
                ashlarmratio: parseFloat(ratiom).toFixed(3),
                ashlarvolofdrymortar: drymorartarvolume + " " + "cu m",
                ashlarstoneqtywithoutwastagecum: parseFloat(randomrubblewithoutwastage).toFixed(3) + "<br/>" + "cu m",
                ashlarstoneqtywithoutwastagebrass: parseFloat(randomrubblewithoutwastagebrass).toFixed(3) + " <br/>" + "brass",
                ashlarstoneqtywithwastagecum: parseFloat(randomrubblewithwastage).toFixed(3) + "<br/> " + "cu m",
                ashlarstoneqtywithwastagebrass: parseFloat(randomrubblewithwastagebrass).toFixed(3) + "<br/> " + "brass",
                ashlarcementqtywithoutwastagecum: parseFloat(cementwithoutwastagecum).toFixed(3) + "<br/> " + "cu m",
                ashlarcementqtywithoutwastagebags: parseFloat(cementwithoutwastagebags).toFixed(3) + "<br/> " + "bags",
                ashlarcementqtywithwastagecum: parseFloat(cementwithwastagecum).toFixed(3) + "<br/> " + "cu m",
                ashlarcementqtywithwastagebags: parseFloat(cementwithwastagebags).toFixed(3) + "<br/> " + "bags",
                ashlarsandqtywithoutwastagecum: parseFloat(sandwithoutwastagecum).toFixed(3) + "<br/> " + "cu m",
                ashlarsandqtywithoutwastagebrass: parseFloat(sandtwithoutwastagebrass).toFixed(3) + "<br/> " + "brass",
                ashlarsandqtywithwastagecum: parseFloat(sandwithwastagecum).toFixed(3) + "<br/> " + "cu m",
                ashlarsandqtywithwastagebrass: parseFloat(sandwithwastagebrass).toFixed(3) + "<br/> " + "brass",


                caldrymortar: masnorayvolume + " * 0.25 " + " = " + "<b>" + drymorartarvolume + " " + "cu m" + "</b>",
                calrandomrubble: masnorayvolume + " * 1.25" + " = " + "<b>" + randomrubblewithoutwastage + " " + "cu m" + "</b>",
                calcementcum: "( " + drymorartarvolume + " / " + "( " + parseFloat(ratioc) + "+" + parseFloat(ratiom) + " ) ) * " + parseFloat(ratioc) + " = " + "<b>" + parseFloat(cementwithoutwastagecum).toFixed(3) + " " + "cu m" + "</b>",
                calcementbag: "( " + parseFloat(cementwithoutwastagecum).toFixed(3) + " * " + "( " + 1000 + "+" + 35 + " ) ) " + " = " + "<b>" + parseFloat(cementwithoutwastagebags).toFixed(3) + " " + "cu m" + "</b>",
                calsandcum: "( " + drymorartarvolume + " / " + "( " + parseFloat(ratioc) + "+" + parseFloat(ratiom) + " ) ) * " + parseFloat(ratiom) + " = " + "<b>" + parseFloat(sandwithoutwastagecum).toFixed(3) + " " + "cu m" + "</b>",
                calsandbrass: +parseFloat(sandwithoutwastagecum).toFixed(3) + " / " + "2.83 " + " = " + "<b>" + parseFloat(sandtwithoutwastagebrass).toFixed(3) + " " + "cu m" + "</b>",
                calrandomrubblebrass: parseFloat(randomrubblewithoutwastage).toFixed(3) + " / " + "2.83 " + " = " + "<b>" + parseFloat(randomrubblewithoutwastagebrass).toFixed(3) + " " + "cu m" + "</b>",
            }
        });
    }
}

function RubbleStonMasonary() {

	checkLogin();

    var masnorayvolume = document.getElementById("txtmasoanryvol").value;
    var ratioc = document.getElementById("txtc").value;
    var ratiom = document.getElementById("txtm").value;
    var wastagecement = document.getElementById("txtcement").value;
    var wastagesand = document.getElementById("txtsand").value;
    var wastagerubble = document.getElementById("txtrubble").value;

    if (masnorayvolume == "") {
        masnorayvolume = 0;
    }
    if (ratioc == "" ) {
        ratioc = 0;
    }
    if (ratiom == "") {
        ratiom = 0;
    }
    if (wastagecement == "") {
        wastagecement = 0;
    }
    if (wastagesand == "") {
        wastagesand = 0;
    }
    if (wastagerubble == "") {
        wastagerubble = 0;
    }

    {
        var drymorartarvolume = parseFloat(0.4) * masnorayvolume;
        var randomrubblewithoutwastage = parseFloat(1.250) * masnorayvolume;
        var randomrubblewithoutwastagebrass = randomrubblewithoutwastage / 2.83;
        var randomrubblewithwastage = randomrubblewithoutwastage + ((wastagerubble * randomrubblewithoutwastage) / 100);
        var randomrubblewithwastagebrass = randomrubblewithwastage / 2.83;

        var cementwithoutwastagecum = ((drymorartarvolume / 4) * ratioc);
        var cementwithoutwastagebags = cementwithoutwastagecum /0.035;

        var cementwithwastagecum = cementwithoutwastagecum + ((wastagecement * cementwithoutwastagecum) / 100);;
        var cementwithwastagebags = cementwithwastagecum / 0.035;

        var sandwithoutwastagecum = ((drymorartarvolume / 4) * ratiom);
        var sandtwithoutwastagebrass = sandwithoutwastagecum / 2.83;

        var sandwithwastagecum = sandwithoutwastagecum + ((wastagesand * sandwithoutwastagecum) / 100);;
        var sandwithwastagebrass = sandwithwastagecum / 2.83;

        mainView.router.load({
            url: 'coursemasonarypopup.html',
            context: {
                coursevolofmasonary: masnorayvolume + " " + "cu m",
                coursecementwastage: parseFloat(wastagecement).toFixed(2) + " " + "%",
                coursesandwastage: parseFloat(wastagesand).toFixed(2) + " " + "%",
                courserubblewastage: parseFloat(wastagerubble).toFixed(2) + " " + "%",
                coursecratio: parseFloat(ratioc).toFixed(3),
                coursemratio: parseFloat(ratiom).toFixed(3),
                coursevolofdrymortar: drymorartarvolume + " " + "cu m",
                coursestoneqtywithoutwastagecum: parseFloat(randomrubblewithoutwastage).toFixed(3) + "<br/> " + "cu m",
                coursestoneqtywithoutwastagebrass: parseFloat(randomrubblewithoutwastagebrass).toFixed(2) + "<br/> " + "brass",
                coursestoneqtywithwastagecum: parseFloat(randomrubblewithwastage).toFixed(3) + "<br/> " + "cu m",
                coursestoneqtywithwastagebrass: parseFloat(randomrubblewithwastagebrass).toFixed(2) + "<br/> " + "brass",
                coursecementqtywithoutwastagecum: parseFloat(cementwithoutwastagecum).toFixed(3) + "<br/> " + "cu m",
                coursecementqtywithoutwastagebags: parseFloat(cementwithoutwastagebags).toFixed(2) + " <br/>" + "bags",
                coursecementqtywithwastagecum: parseFloat(cementwithwastagecum).toFixed(3) + "<br/> " + "cu m",
                coursecementqtywithwastagebags: parseFloat(cementwithwastagebags).toFixed(2) + " <br/>" + "bags",
                coursesandqtywithoutwastagecum: parseFloat(sandwithoutwastagecum).toFixed(2) + "<br/> " + "cu m",
                coursesandqtywithoutwastagebrass: parseFloat(sandtwithoutwastagebrass).toFixed(2) + "<br/> " + "brass",
                coursesandqtywithwastagecum: parseFloat(sandwithwastagecum).toFixed(3) + "<br/> " + "cu m",
                coursesandqtywithwastagebrass: parseFloat(sandwithwastagebrass).toFixed(2) + "<br/> " + "brass",

                caldrymortar: masnorayvolume + " * 0.4 " + " = " + "<b>" + drymorartarvolume + " " + "cu m" + "</b>",
                calrandomrubble: masnorayvolume + " * 1.25" + " = " + "<b>" + randomrubblewithoutwastage + " " + "cu m" + "</b>",
                calcementcum: "( " + drymorartarvolume + " / " + "( " + parseFloat(ratioc) + "+" + parseFloat(ratiom) + " ) ) * " + parseFloat(ratioc) + " = " + "<b>" + parseFloat(cementwithoutwastagecum).toFixed(3) + " " + "cu m" + "</b>",
                calcementbag: "( " + parseFloat(cementwithoutwastagecum).toFixed(3) + " * " + "( " + 1000 + "+" + 35 + " ) ) " + " = " + "<b>" + parseFloat(cementwithoutwastagebags).toFixed(3) + " " + "cu m" + "</b>",
                calsandcum: "( " + drymorartarvolume + " / " + "( " + parseFloat(ratioc) + "+" + parseFloat(ratiom) + " ) ) * " + parseFloat(ratiom) + " = " + "<b>" + parseFloat(sandwithoutwastagecum).toFixed(3) + " " + "cu m" + "</b>",
                calsandbrass: +parseFloat(sandwithoutwastagecum).toFixed(3) + " / " + "2.83 " + " = " + "<b>" + parseFloat(sandtwithoutwastagebrass).toFixed(3) + " " + "cu m" + "</b>",
                calrandomrubblebrass: parseFloat(randomrubblewithoutwastage).toFixed(3) + " / " + "2.83 " + " = " + "<b>" + parseFloat(randomrubblewithoutwastagebrass).toFixed(3) + " " + "cu m" + "</b>",

            }
        });
    }
}

function RCC() {
	checkLogin();

    var wetconcretevolume = document.getElementById("txtwetconcretevol").value;
    var rcccementprp = document.getElementById("txtcementprp").value;
    var rcccsandprp = document.getElementById("txtsandprp").value;
    var rcccaggrprp = document.getElementById("txtaggrprp").value;

    var wastagecement = document.getElementById("txtcement").value;
    var wastagesand = document.getElementById("txtsand").value;
    var wastageaggregate = document.getElementById("txtaggregate").value;

    if (wetconcretevolume == "") {
        wetconcretevolume = 0;
    }
    if (rcccementprp == "" ) {
        rcccementprp = 0;
    }
    if (rcccsandprp == "") {
        rcccsandprp = 0;
    }
    if (rcccaggrprp == "" ) {
        rcccaggrprp = 0;
    }
    if (wastagecement == "") {
        wastagecement = 0;
    }
    if (wastagesand == "") {
        wastagesand = 0;
    }
    if (wastageaggregate == "") {
        wastageaggregate = 0;
    }
    {
        var drymixturevol = parseFloat(1.52) * wetconcretevolume;
        var cementwithoutwastagecum = ((drymixturevol / (parseFloat(rcccementprp)  + parseFloat(rcccsandprp)  + parseFloat(rcccaggrprp))) * parseFloat(rcccementprp));
        var cementwithoutwastagebags = cementwithoutwastagecum / 0.035;

        var cementwithwastagecum = cementwithoutwastagecum + ((wastagecement * cementwithoutwastagecum) / 100);
        var cementwithwastagebags = cementwithwastagecum / 0.035;

        var sandwithoutwastagecum = ((drymixturevol / (parseFloat(rcccementprp)  + parseFloat(rcccsandprp)  + parseFloat(rcccaggrprp))) * parseFloat(rcccsandprp));
        var sandtwithoutwastagebrass = sandwithoutwastagecum / 2.83;

        var sandwithwastagecum = sandwithoutwastagecum + ((wastagesand * sandwithoutwastagecum) / 100);
        var sandwithwastagebrass = sandwithwastagecum / 2.83;

        var aggregatewithoutwastage = ((drymixturevol / (parseFloat(rcccementprp)  + parseFloat(rcccsandprp)  + parseFloat(rcccaggrprp))) * parseFloat(rcccaggrprp));
        var aggregatewithoutwastagebrass = aggregatewithoutwastage / 2.83;

        var aggregatewithwastage = aggregatewithoutwastage + ((wastageaggregate * aggregatewithoutwastage) / 100);
        var aggregatewithwastagebrass = aggregatewithwastage / 2.83;

        mainView.router.load({
            url: 'rcc_report.html',
            context: {
                rcccementprp: rcccementprp,
                rccsandprp: rcccsandprp,
                rccaggrprp: rcccaggrprp,
                rccvolofwetconcrete: wetconcretevolume + " " + "cu m",
                rcccementwastage: parseFloat(wastagecement).toFixed(2) + " " + "%",
                rccsandwastage: parseFloat(wastagesand).toFixed(2) + " " + "%",
                rccaggrewastage: parseFloat(wastageaggregate).toFixed(2) + " " + "%",
                rccvolofdrymix: drymixturevol + " " + "cu m",
                rcccementqtywithoutwastagecum: parseFloat(cementwithoutwastagecum).toFixed(3) + "<br/> " + "cu m",
                rcccementqtywithoutwastagebags: parseFloat(cementwithoutwastagebags).toFixed(2) + "<br/> " + "bags",
                rcccementqtywithwastagecum: parseFloat(cementwithwastagecum).toFixed(3) + "<br/> " + "cu m",
                rcccementqtywithwastagebags: parseFloat(cementwithwastagebags).toFixed(2) + "<br/> " + "bags",
                rccsandqtywithoutwastagecum: parseFloat(sandwithoutwastagecum).toFixed(3) + "<br/> " + "cu m",
                rccsandqtywithoutwastagebrass: parseFloat(sandtwithoutwastagebrass).toFixed(2) + "<br/> " + "brass",
                rccsandqtywithwastagecum: parseFloat(sandwithwastagecum).toFixed(3) + "<br/> " + "cu m",
                rccsandqtywithwastagebrass: parseFloat(sandwithwastagebrass).toFixed(2) + "<br/> " + "brass",
                rccaggrqtywithoutwastagecum: parseFloat(aggregatewithoutwastage).toFixed(3) + "<br/> " + "cu m",
                rccaggrqtywithoutwastagebrass: parseFloat(aggregatewithoutwastagebrass).toFixed(2) + " <br/>" + "brass",
                rccaggrqtywithwastagecum: parseFloat(aggregatewithwastage).toFixed(3) + "<br/> " + "cu m",
                rccaggrqtywithwastagebrass: parseFloat(aggregatewithwastagebrass).toFixed(2) + "<br/> " + "brass",

                caldrymix: wetconcretevolume + " * 1.52 " + " = " + "<b>" + drymixturevol + " " + "cu m" + "</b>",
                calcementcum: "( " + drymixturevol + " / " + "( " + parseFloat(rcccementprp) + "+" + parseFloat(rcccsandprp) + "+" + parseFloat(rcccaggrprp) + " ) ) * " + parseFloat(rcccementprp) + " = " + "<b>" + parseFloat(cementwithoutwastagecum).toFixed(3) + " " + "cu m" + "</b>",
                calcementbag: "( " + parseFloat(cementwithoutwastagecum).toFixed(3) + " * " + "( " + 1000 + "+" + 35 + " ) ) " + " = " + "<b>" + parseFloat(cementwithoutwastagebags).toFixed(3) + " " + "cu m" + "</b>",
                calsandcum: "( " + drymixturevol + " / " + "( " + parseFloat(rcccementprp) + "+" + parseFloat(rcccsandprp) + "+" + parseFloat(rcccsandprp) + " ) ) * " + parseFloat(rcccsandprp) + " = " + "<b>" + parseFloat(sandwithoutwastagecum).toFixed(3) + " " + "cu m" + "</b>",
                calsandbrass: +parseFloat(sandwithoutwastagecum).toFixed(3) + " / " + "2.83 " + " = " + "<b>" + parseFloat(sandtwithoutwastagebrass).toFixed(3) + " " + "cu m" + "</b>",
                calaggregate: "( " + drymixturevol + " / " + "( " + parseFloat(rcccementprp) + "+" + parseFloat(rcccsandprp) + "+" + parseFloat(rcccaggrprp) + " ) ) * " + parseFloat(rcccaggrprp) + " = " + "<b>" + aggregatewithoutwastage + " " + "cu m" + "</b>",
                calaggregaterass: parseFloat(aggregatewithoutwastage).toFixed(3) + " / " + "2.83 " + " = " + "<b>" + parseFloat(aggregatewithoutwastagebrass).toFixed(3) + " " + "cu m" + "</b>",
            },
        });
    }
}

function BrickworkM3() {

	checkLogin();

    var ratioc = document.getElementById("txtc").value;
    var ratiom = document.getElementById("txtm").value;

    var m3bricklencm = document.getElementById("txtbricklen").value;
    var m3brickwidcm = document.getElementById("txtbrickwid").value;
    var m3brickhgtcm = document.getElementById("txtbrickhgt").value;

    var m3mortarthk = 1;//In cm

    var m3brickvol = document.getElementById("txtbrickworkvol").value;

    // In Meters
   

    var wastagecement = document.getElementById("txtcement").value;
    var wastagesand = document.getElementById("txtsand").value;

    if (m3bricklencm == "" ) {
        m3bricklencm = 0;
    }
    if (m3brickwidcm == "" ) {
        m3brickwidcm = 0;
    }
    if (m3brickhgtcm == "" ) {
        m3brickhgtcm = 0;
    }
    if (ratioc == "" ) {
        ratioc = 0;
    }
    if (ratiom == "" ) {
        ratiom = 0;
    }
    if (wastagecement == "") {
        wastagecement = 0;
    }
    if (wastagesand == "") {
        wastagesand = 0;
    }

    var m3bricklenmortarm = (parseFloat(m3bricklencm )+ parseFloat(m3mortarthk)) /100;
    var m3brickwidmortarm = (parseFloat(m3brickwidcm) + parseFloat(m3mortarthk)) / 100;
    var m3brickhgtmortarm = (parseFloat(m3brickhgtcm) + parseFloat(m3mortarthk)) / 100;
    var m3nofbricks = m3brickvol / (m3bricklenmortarm * m3brickwidmortarm * m3brickhgtmortarm);

    var m3mortarvol = parseFloat(m3brickvol) - ((parseFloat(m3nofbricks) *parseFloat( m3bricklencm) * parseFloat(m3brickwidcm) * parseFloat(m3brickhgtcm)) / 1000000);

    var m3wetmortarvol = parseFloat(m3mortarvol) + (parseFloat(m3mortarvol) * 0.15);

    var m3drymortarvol = parseFloat(m3wetmortarvol) + (parseFloat(m3wetmortarvol) * 0.33);

    {
        var cementwithoutwastagecum = parseFloat(m3drymortarvol) / (parseFloat(ratioc) + parseFloat(ratiom));
        var cementwithoutwastagebags = (cementwithoutwastagecum * 1000) / 35;

        var cementwithwastagecum = cementwithoutwastagecum+ (cementwithoutwastagecum * (wastagecement / 100));
        var cementwithwastagebags = (cementwithwastagecum * 1000) / 35;

        var sandwithoutwastagecum = cementwithoutwastagecum * ratiom;
        var sandtwithoutwastagebrass = sandwithoutwastagecum / 2.83;

        var sandwithwastagecum = sandwithoutwastagecum + (sandwithoutwastagecum * (wastagesand / 100));
        var sandwithwastagebrass = sandwithwastagecum / 2.83;

        mainView.router.load({
            url: 'brickworkm3_report.html',
            context: {
                m3bricklencm: parseFloat(m3bricklencm).toFixed(2),
                m3brickwidcm: 	parseFloat(m3brickwidcm).toFixed(2),
                m3brickhegtcm: parseFloat(m3brickhgtcm).toFixed(2),
                mortarthk: parseFloat(m3mortarthk).toFixed(2) + " " + "cm",
                m3bricklenmortarm: 	parseFloat(m3bricklenmortarm).toFixed(2),
                m3brickwidmortarm: parseFloat(m3brickwidmortarm).toFixed(2),
                m3brickhgtmortarm: parseFloat(m3brickhgtmortarm).toFixed(2),
                m3brickworkvol: parseFloat(m3brickvol).toFixed(2) + " " +"cu m",
                m3noofbricks: parseFloat(m3nofbricks).toFixed(1) + " " + "bricks",
                m3mortarvol: parseFloat(m3mortarvol).toFixed(2),
                m3wetmortarvol: parseFloat(m3wetmortarvol).toFixed(2),
                m3drymortarvol: parseFloat(m3drymortarvol).toFixed(2),
                m3cementwastage: parseFloat(wastagecement).toFixed(2) + " " + "%",
                m3sandwastage: 	parseFloat(wastagesand).toFixed(2) + " " + "%",
                m3cratio: parseFloat(ratioc).toFixed(2),
                m3mratio: parseFloat(ratiom).toFixed(2),
                m3cementqtywithoutwastagecum: parseFloat(cementwithoutwastagecum).toFixed(3) + "</br>" + "cu m",
                m3cementqtywithoutwastagebags: parseFloat(cementwithoutwastagebags).toFixed(2) + "</br>" + "bags",
                m3cementqtywithwastagecum: parseFloat(cementwithwastagecum).toFixed(3) + "</br>" + "cu m",
                m3cementqtywithwastagebags: parseFloat(cementwithwastagebags).toFixed(2) + "</br>" + "bags",
                m3sandqtywithoutwastagecum: parseFloat(sandwithoutwastagecum).toFixed(3) + "</br>" + "cu m",
                m3sandqtywithoutwastagebrass: parseFloat(sandtwithoutwastagebrass).toFixed(2) + "</br>" + "brass",
                m3sandqtywithwastagecum: parseFloat(sandwithwastagecum).toFixed(3) + "</br>" + "cu m",
                m3sandqtywithwastagebrass: parseFloat(sandwithwastagebrass).toFixed(2) + "</br>" + "brass"
            },
        });
    }
}

function BrickworkM2() {

	checkLogin();

    var ratioc = document.getElementById("txtc").value;
    var ratiom = document.getElementById("txtm").value;

    var m2bricklencm = document.getElementById("txtbricklen").value;
    var m2brickwidcm = document.getElementById("txtbrickwid").value;
    var m2brickhgtcm = document.getElementById("txtbrickhgt").value;
    var m2mortarthk = document.getElementById("txtMortarthk").value

    var m2brickvol = document.getElementById("txtbrickworkvol").value;

    var wastagecement = document.getElementById("txtcement").value;
    var wastagesand = document.getElementById("txtsand").value;

    //var noofbricks=

   
    if (m2brickvol == "") {
        m2brickvol = 0;
    }
    if (m2mortarthk == "") {
        m2mortarthk = 0;
    }
    if (m2brickwidcm == "" ) {
        m2brickwidcm = 0;
    }
    if (m2bricklencm == "") {
        m2bricklencm = 0;
    }
    if (m2brickhgtcm == "") {
        m2brickhgtcm = 0;
    }
    if (ratioc == "") {
        ratioc = 0;
    }
    if (ratiom == "") {
        ratiom = 0;
    }
    if (wastagecement == "") {
        wastagecement = 0;
    }
    if (wastagesand == "") {
        wastagesand = 0;
    }

    // In Meters
    var m2bricklenmortarm = (parseFloat(m2bricklencm) + parseFloat(m2mortarthk)) / 100;
    var m2brickwidmortarm = (parseFloat(m2brickwidcm) + parseFloat(m2mortarthk)) / 100;
    var m2brickhgtmortarm = (parseFloat(m2brickhgtcm) + parseFloat(m2mortarthk)) / 100;

    var m2nofbricks = (m2brickvol * m2brickhgtmortarm) / (m2bricklenmortarm * m2brickwidmortarm * m2brickhgtmortarm);

    var m2mortarvol = (parseFloat(m2brickvol) * parseFloat(m2brickhgtmortarm)) - ((parseFloat(m2nofbricks) * parseFloat(m2bricklencm) * parseFloat(m2brickwidcm) * parseFloat(m2brickhgtcm)) / 1000000);

    var m2wetmortarvol15 = parseFloat(m2mortarvol) + (parseFloat(m2mortarvol) * 0.15);

     var m2wetmortarvol = parseFloat(m2wetmortarvol15) + (parseFloat(m2wetmortarvol15) * 0.33);

    var m2drymortarvol = parseFloat(m2wetmortarvol)  * 0.9;
    var newm2drymortarvol=parseFloat(m2drymortarvol);
    alert(m2drymortarvol);

    {
        var cementwithoutwastagecum = parseFloat(m2drymortarvol) / (parseFloat(ratioc) + parseFloat(ratiom));
        var cementwithoutwastagebags = (cementwithoutwastagecum * 1000) / 35;

        if (isNaN(cementwithoutwastagecum))
        {
            cementwithoutwastagecum = 0;
        }

        var cementwithwastagecum = cementwithoutwastagecum + (cementwithoutwastagecum * (wastagecement / 100));
        var cementwithwastagebags = (cementwithwastagecum * 1000) / 35;

        var sandwithoutwastagecum = cementwithoutwastagecum * ratiom;
        var sandtwithoutwastagebrass = sandwithoutwastagecum / 2.83;

        var sandwithwastagecum = sandwithoutwastagecum + (sandwithoutwastagecum * (wastagesand / 100));
        var sandwithwastagebrass = sandwithwastagecum / 2.83;

        mainView.router.load({
            url: 'brickworkm2_report.html',
            context: {
                m2bricklencm: parseFloat(m2bricklencm).toFixed(2),
                m2brickwidcm: parseFloat(m2brickwidcm).toFixed(2),
                m2brickhegtcm: 	parseFloat(m2brickhgtcm).toFixed(2),
                Mortarthk: parseFloat(m2mortarthk).toFixed(2) + " " + "cm",
                m2bricklenmortarm: parseFloat(m2bricklenmortarm).toFixed(2),
                m2brickwidmortarm: parseFloat(m2brickwidmortarm).toFixed(2),
                m2brickhgtmortarm: parseFloat(m2brickhgtmortarm).toFixed(2),
                m2brickworkvol: parseFloat(m2brickvol).toFixed(2) + " " + "cu m",
                m2noofbricks: parseFloat(m2nofbricks).toFixed(1) + " " + "bricks",
                m2mortarvol: parseFloat(m2mortarvol).toFixed(2),
                m2wetmortarvol: parseFloat(m2wetmortarvol).toFixed(2),
                m2drymortarvolume: parseFloat(newm2drymortarvol).toFixed(2),
                m2cementwastage: parseFloat(wastagecement).toFixed(2) + " " + "%",
                m2sandwastage: 	parseFloat(wastagesand).toFixed(2) + " " + "%",
                m2cratio: parseFloat(ratioc).toFixed(3),
                m2mratio: parseFloat(ratiom).toFixed(3),
                m2cementqtywithoutwastagecum: parseFloat(cementwithoutwastagecum).toFixed(3) + "</br>" + "cu m",
                m2cementqtywithoutwastagebags: parseFloat(cementwithoutwastagebags).toFixed(2) + "</br>" + "bags",
                m2cementqtywithwastagecum: parseFloat(cementwithwastagecum).toFixed(3) + "</br>" + "cu m",
                m2cementqtywithwastagebags: parseFloat(cementwithwastagebags).toFixed(2) + "</br>" + "bags",
                m2sandqtywithoutwastagecum: parseFloat(sandwithoutwastagecum).toFixed(3) + "</br>" + "cu m",
                m2sandqtywithoutwastagebrass: parseFloat(sandtwithoutwastagebrass).toFixed(2) + "</br>" + "brass",
                m2sandqtywithwastagecum: parseFloat(sandwithwastagecum).toFixed(3) + "</br>" + "cu m",
                m2sandqtywithwastagebrass: parseFloat(sandwithwastagebrass).toFixed(2) + "</br>" + "brass",
            }
        });
    }
}

function Plastering() {


	checkLogin();

    var ratioc = document.getElementById("txtc").value;
    var ratiom = document.getElementById("txtm").value;

    var plastthikness = document.getElementById("txtthkn").value ;
    var plastarea = document.getElementById("txtarea").value ;
    var plastwastage = document.getElementById("txtwstg").value;
    var wastagecement = document.getElementById("txtcement").value;
    var wastagesand = document.getElementById("txtsand").value;

    //var noofbricks=

    if (plastthikness == "") {
        plastthikness=0;
    }
    if (plastarea == "") {
        plastarea=0;
    }
    if (plastwastage == "") {
        plastwastage=0;
    }
    if (ratioc == "" ) {
        ratioc = 0;
    }
    if (ratiom == "" ) {
        ratiom = 0;
    }
    if (wastagecement == "") {
        wastagecement = 0;
    }
    if (wastagesand == "") {
        wastagesand = 0;
    }

    var plastareaofwetvol = plastthikness * (parseFloat(plastarea) / 1000);

    var plastfillingjoints = (0.3 * plastareaofwetvol) + plastareaofwetvol;

    var plastdryvolby30percentage = (0.3 * plastfillingjoints) + plastfillingjoints;

    var plastdryvol = (plastdryvolby30percentage + (plastdryvolby30percentage * parseFloat(plastwastage) / 100));

    {
        var cementwithoutwastagecum = parseFloat(plastdryvol) / (parseFloat(ratioc) + parseFloat(ratiom));
        var cementwithoutwastagebags = (cementwithoutwastagecum * 1000) / 35;

        var cementwithwastagecum = cementwithoutwastagecum + (cementwithoutwastagecum * (wastagecement / 100));
        var cementwithwastagebags = (cementwithwastagecum * 1000) / 35;

        var sandwithoutwastagecum = cementwithoutwastagecum * ratiom;
        var sandtwithoutwastagebrass = sandwithoutwastagecum / 2.83;

        var sandwithwastagecum = sandwithoutwastagecum + (sandwithoutwastagecum * (wastagesand / 100));
        var sandwithwastagebrass = sandwithwastagecum / 2.83

        mainView.router.load({
            url: "plastering_report.html",
            context: {
                plastthikness: parseFloat(plastthikness).toFixed(2) + " " + "mm",
                plastarea: parseFloat(plastarea).toFixed(2) + " " + "m2",
                plastwastepercentage: parseFloat(plastwastage).toFixed(2),
                plastcementwastage: parseFloat(wastagecement).toFixed(2) + " " + "%",
                plastsandwastage: parseFloat(wastagesand).toFixed(2) + " " + "%",
                plastcratio: parseFloat(ratioc).toFixed(3),
                plastmratio: parseFloat(ratiom).toFixed(3),
                plastareaofwetvol: 	parseFloat(plastareaofwetvol).toFixed(2),
                plastfillingjoints: parseFloat(plastfillingjoints).toFixed(2),
                plastdryvolby30percentage: 	parseFloat(plastdryvolby30percentage).toFixed(2),
                plastdryvol: parseFloat(plastdryvol).toFixed(2),
                plastcementqtywithoutwastagecum: parseFloat(cementwithoutwastagecum).toFixed(3) + "</br>" + "cu m",
                plastcementqtywithoutwastagebags: parseFloat(cementwithoutwastagebags).toFixed(2) + "</br>" + "bags",
                plastcementqtywithwastagecum: parseFloat(cementwithwastagecum).toFixed(3) + "</br>" + "cu m",
                plastcementqtywithwastagebags: parseFloat(cementwithwastagebags).toFixed(2) + "</br>" + "bags",
                plastsandqtywithoutwastagecum: parseFloat(sandwithoutwastagecum).toFixed(3) + "</br>" + "cu m",
                plastsandqtywithoutwastagebrass: parseFloat(sandtwithoutwastagebrass).toFixed(2) + "</br>" + "brass",
                plastsandqtywithwastagecum: parseFloat(sandwithwastagecum).toFixed(3) + "</br>" + "cu m",
                plastsandqtywithwastagebrass: parseFloat(sandwithwastagebrass).toFixed(2) + "</br>" + "brass",
            },
        });
    }
}

function Flooring() {

	checkLogin();

    var ratioc = document.getElementById("txtc").value;
    var ratiom = document.getElementById("txtm").value;

    var florarea = document.getElementById("txtarea").value;
    var flortilesizelen = document.getElementById("txttilesizelen").value;
    var flortilesizewid = document.getElementById("txttilesizewid").value;
    var flormortarthk = document.getElementById("txtmortarthk").value;
    var wastagecement = document.getElementById("txtcement").value;
    var wastagesand = document.getElementById("txtsand").value;

    //var noofbricks=

    if (florarea == "") {
        florarea=0;
    }
    if (flortilesizelen == "") {
        flortilesizelen=0;
    }
    if (flortilesizewid == "") {
        flortilesizewid=0;
    }
    if (ratioc == "" ) {
        ratioc = 0;
    }
    if (ratiom == "" ) {
        ratiom = 0;
    }
    if (wastagecement == "") {
        wastagecement = 0;
    }
    if (wastagesand == "") {
        wastagesand = 0;
    }

    {
        var flornooftiles = parseFloat(florarea) / (parseFloat(flortilesizelen) * parseFloat(flortilesizewid));

        var flordwetvolofmortar = parseFloat(flormortarthk) * (parseFloat(florarea) / 1000);

        var florddryvolofmortar =  (parseFloat(flordwetvolofmortar) * 0.3)+ parseFloat(flordwetvolofmortar);

        var cementwithoutwastagecum = parseFloat(florddryvolofmortar) / (parseFloat(flortilesizelen) + parseFloat(flortilesizewid));
        var cementwithoutwastagebags = (cementwithoutwastagecum * 1000) / 35;

        var cementwithwastagecum = cementwithoutwastagecum + (cementwithoutwastagecum * (wastagecement / 100));
        var cementwithwastagebags = (cementwithwastagecum * 1000) / 35;

        var sandwithoutwastagecum = parseFloat(cementwithoutwastagecum) * parseFloat(flortilesizewid);
        var sandtwithoutwastagebrass = sandwithoutwastagecum / 2.83;

        var sandwithwastagecum = sandwithoutwastagecum + (sandwithoutwastagecum * (wastagesand / 100));
        var sandwithwastagebrass = sandwithwastagecum / 2.83;

        mainView.router.load({
            url: 'flooring_report.html',
            context: {
                florarea: parseFloat(florarea).toFixed(2) + " " + "sq m",
                flortilesizelen: parseFloat(flortilesizelen).toFixed(2),
                flortilesizewid: parseFloat(flortilesizewid).toFixed(2),
                flormortarthk: parseFloat(flormortarthk).toFixed(2) + " " + "mm",
                flornooftiles: parseFloat(flornooftiles).toFixed(2),
                flordwetvolofmortar: parseFloat(flordwetvolofmortar).toFixed(2),
                florddryvolofmortar: parseFloat(florddryvolofmortar).toFixed(4),
                florcementwastage: parseFloat(wastagecement).toFixed(2) + " " + "%",
                florsandwastage: parseFloat(wastagesand).toFixed(2) + " " + "%",
                florcratio: parseFloat(ratioc).toFixed(2),
                flormratio: parseFloat(ratiom).toFixed(2),
                florcementqtywithoutwastagecum: parseFloat(cementwithoutwastagecum).toFixed(3) + "</br>" + "cu m",
                florcementqtywithoutwastagebags: parseFloat(cementwithoutwastagebags).toFixed(2) + "</br>" + "bags",
                florcementqtywithwastagecum: parseFloat(cementwithwastagecum).toFixed(3) + "</br>" + "cu m",
                florcementqtywithwastagebags: parseFloat(cementwithwastagebags).toFixed(2) + "</br>" + "bags",
                florsandqtywithoutwastagecum: parseFloat(sandwithoutwastagecum).toFixed(3) + "</br>" + "cu m",
                florsandqtywithoutwastagebrass: parseFloat(sandtwithoutwastagebrass).toFixed(2) + "</br>" + "brass",
                florsandqtywithwastagecum: parseFloat(sandwithwastagecum).toFixed(3) + "</br>" + "cu m",
                florsandqtywithwastagebrass: parseFloat(sandwithwastagebrass).toFixed(2) + "</br>" + "brass",

                //flordwetvolofmortar = parseFloat(flormortarthk) * (parseFloat(florarea) / 1000);
                //var florddryvolofmortar =  (parseFloat(flordwetvolofmortar) * 0.3)+ parseFloat(flordwetvolofmortar);

                caltilesno: parseFloat(florarea) + " / (" + parseFloat(flortilesizelen) + " * " + parseFloat(flortilesizewid) + " )" + " = " + "<b>" + parseFloat(flornooftiles).toFixed(1) + " " + "Tiles" + "</b>",
                calwetvol: parseFloat(flormortarthk) + " * (" + parseFloat(florarea) + " / 1000" + " )" + " = " + "<b>" + parseFloat(flordwetvolofmortar).toFixed(2) + " " + "cu m" + "</b>",

                caldrymix: "(" + parseFloat(flordwetvolofmortar).toFixed(2) + " * ( 30 / 100 ))" + " + " + parseFloat(flordwetvolofmortar) + " = " + "<b>" + florddryvolofmortar + " " + "cu m" + "</b>",

                calcementcum: "( " + florddryvolofmortar + " / " + "( " + parseFloat(ratioc) + "+" + parseFloat(ratiom) + " ) ) * " + parseFloat(ratioc) + " = " + "<b>" + parseFloat(cementwithoutwastagecum).toFixed(3) + " " + "cu m" + "</b>",
                calcementbag: "( " + parseFloat(cementwithoutwastagecum).toFixed(3) + " * " + "( " + 1000 + "+" + 35 + " ) ) " + " = " + "<b>" + parseFloat(cementwithoutwastagebags).toFixed(3) + " " + "cu m" + "</b>",
                calsandcum: "( " + florddryvolofmortar + " / " + "( " + parseFloat(ratioc) + "+" + parseFloat(ratiom) + " ) ) * " + parseFloat(ratiom) + " = " + "<b>" + parseFloat(sandwithoutwastagecum).toFixed(3) + " " + "cu m" + "</b>",
                calsandbrass: +parseFloat(sandwithoutwastagecum).toFixed(3) + " / " + "2.83 " + " = " + "<b>" + parseFloat(sandtwithoutwastagebrass).toFixed(3) + " " + "cu m" + "</b>",
               
            },
        });
    }
}

function PCC() {

	checkLogin();

    var wetconcretevolume = document.getElementById("txtwetconcretevol").value;
    var pcccementprp = document.getElementById("txtcementprp").value;
    var pcccsandprp = document.getElementById("txtsandprp").value;
    var pcccaggrprp = document.getElementById("txtaggrprp").value;

    var wastagecement = document.getElementById("txtcement").value;
    var wastagesand = document.getElementById("txtsand").value;
    var wastageaggregate = document.getElementById("txtaggregate").value;

    if (wetconcretevolume == "") {
        wetconcretevolume=0;
    }
    if (pcccementprp == "" ) {
        pcccementprp=0;
    }
    if (pcccsandprp == "" ) {
        pcccsandprp=0;
    }
    if (pcccaggrprp == "" ) {
        pcccaggrprp=0;
    }
    if (wastagecement == "") {
        wastagecement=0;
    }
    if (wastagesand == "") {
        wastagesand=0;
    }
    if (wastageaggregate == "") {
        wastageaggregate=0;
    }
    {
        var drymixturevol = (parseFloat(wetconcretevolume) + ((parseFloat(wetconcretevolume) * 52) / 100));

        var cementwithoutwastagecum = (parseFloat(drymixturevol) / (parseFloat(pcccementprp) + parseFloat(pcccsandprp) + parseFloat(pcccaggrprp)) *parseFloat(pcccementprp) );
        var cementwithoutwastagebags = cementwithoutwastagecum / 0.035;

        var cementwithwastagecum = cementwithoutwastagecum + ((wastagecement * cementwithoutwastagecum) / 100);
        var cementwithwastagebags = cementwithwastagecum * (1000 / 35);

        var sandwithoutwastagecum = (parseFloat(cementwithoutwastagecum) * parseFloat(pcccsandprp));
        var sandtwithoutwastagebrass = sandwithoutwastagecum / 2.83;

        var sandwithwastagecum = sandwithoutwastagecum + ((wastagesand * sandwithoutwastagecum) / 100);
        var sandwithwastagebrass = sandwithwastagecum / 2.83;

        var aggregatewithoutwastage = (parseFloat(cementwithoutwastagecum) * parseFloat(pcccaggrprp));
        var aggregatewithoutwastagebrass = aggregatewithoutwastage / 2.83;

        var aggregatewithwastage = aggregatewithoutwastage + ((wastageaggregate * aggregatewithoutwastage) / 100);
        var aggregatewithwastagebrass = aggregatewithwastage / 2.83;

        mainView.router.load({
            url: 'pcc_report.html',
            context: {
                pcccementprp: pcccementprp,
                pccsandprp: pcccsandprp,
                pccaggrprp: pcccaggrprp,
                pccvolofwetconcrete: wetconcretevolume +" " +"cu m",
                pcccementwastage: parseFloat(wastagecement).toFixed(2) + " " + "%",
                pccsandwastage: parseFloat(wastagesand).toFixed(2) + " " + "%",
                pccaggrewastage: parseFloat(wastageaggregate).toFixed(2) + " " + "%",
                pccvolofdrymix: drymixturevol + " " + "cu m",
                pcccementqtywithoutwastagecum: parseFloat(cementwithoutwastagecum).toFixed(3) + "</br>" + "cu m",
                pcccementqtywithoutwastagebags: parseFloat(cementwithoutwastagebags).toFixed(2) + "</br>" + "bags",
                pcccementqtywithwastagecum: parseFloat(cementwithwastagecum).toFixed(3) + "</br>" + "cu m",
                pcccementqtywithwastagebags: parseFloat(cementwithwastagebags).toFixed(2) + "</br>" + "bags",
                pccsandqtywithoutwastagecum: parseFloat(sandwithoutwastagecum).toFixed(3) + "</br>" + "cu m",
                pccsandqtywithoutwastagebrass: parseFloat(sandtwithoutwastagebrass).toFixed(2) + "</br>" + "brass",
                pccsandqtywithwastagecum: parseFloat(sandwithwastagecum).toFixed(3) + "</br>" + "cu m",
                pccsandqtywithwastagebrass: parseFloat(sandwithwastagebrass).toFixed(2) + "</br>" + "brass",
                pccaggrqtywithoutwastagecum: parseFloat(aggregatewithoutwastage).toFixed(3) + "</br>" + "cu m",
                pccaggrqtywithoutwastagebrass: parseFloat(aggregatewithoutwastagebrass).toFixed(2) + "</br>" + "brass",
                pccaggrqtywithwastagecum: parseFloat(aggregatewithwastage).toFixed(3) + "</br>" + "cu m",
                pccaggrqtywithwastagebrass: parseFloat(aggregatewithwastagebrass).toFixed(2) + "</br>" + "brass",

                caldrymix: wetconcretevolume + " * 1.52 " + " = " + "<b>" + drymixturevol + " " + "cu m" + "</b>",
                calcementcum: "( " + drymixturevol + " / " + "( " + parseFloat(pcccementprp) + "+" + parseFloat(pcccsandprp) + "+" + parseFloat(pcccaggrprp) + " ) ) * " + parseFloat(pcccementprp) + " = " + "<b>" + parseFloat(cementwithoutwastagecum).toFixed(3) + " " + "cu m" + "</b>",
                calcementbag: "( " + parseFloat(cementwithoutwastagecum).toFixed(3) + " * " + "( " + 1000 + "+" + 35 + " ) ) " + " = " + "<b>" + parseFloat(cementwithoutwastagebags).toFixed(3) + " " + "cu m" + "</b>",
                calsandcum: "( " + drymixturevol + " / " + "( " + parseFloat(pcccementprp) + "+" + parseFloat(pcccsandprp) + "+" + parseFloat(pcccsandprp) + " ) ) * " + parseFloat(pcccsandprp) + " = " + "<b>" + parseFloat(sandwithoutwastagecum).toFixed(3) + " " + "cu m" + "</b>",
                calsandbrass: +parseFloat(sandwithoutwastagecum).toFixed(3) + " / " + "2.83 " + " = " + "<b>" + parseFloat(sandtwithoutwastagebrass).toFixed(3) + " " + "cu m" + "</b>",
                calaggregate: "( " + drymixturevol + " / " + "( " + parseFloat(pcccementprp) + "+" + parseFloat(pcccsandprp) + "+" + parseFloat(pcccaggrprp) + " ) ) * " + parseFloat(pcccaggrprp) + " = " + "<b>" + aggregatewithoutwastage + " " + "cu m" + "</b>",
                calaggregaterass: parseFloat(aggregatewithoutwastage).toFixed(3) + " / " + "2.83 " + " = " + "<b>" + parseFloat(aggregatewithoutwastagebrass).toFixed(3) + " " + "cu m" + "</b>",
            },
        });
    }
}

function Painting() {

	checkLogin();

    var paintarea = document.getElementById("txtarea").value;
    if (paintarea == "") {
        paintarea=0;
    }
    var paintscwhitewash = paintarea * 0.1;
    var paintdcwhitewash = paintarea * 0.3;
    var paintscdrydist = paintarea * 0.12;
    var paintdcdrydist = paintarea * 0.195;
    var paintdcdrycementpaint = paintarea * 0.2;
    var paintdcdryprimersyntheticenamle = paintarea * 0.08;
    var paintdcdrypaintsyntheticenamle = paintarea * 0.11;

   
    {
        mainView.router.load({
            url: 'painting_report.html',
            context: {
                paintscwhitewash: parseFloat(paintscwhitewash).toFixed(2) + "<br/>" + "kg",
                paintdcwhitewash: parseFloat(paintdcwhitewash).toFixed(2) + " <br/>" + "kg",
                paintscdrydist: parseFloat(paintscdrydist).toFixed(2) + "<br/> " + "kg",
                paintdcdrydist: parseFloat(paintdcdrydist).toFixed(2) + "<br/>" + "kg",
                paintdcdrycementpaint: parseFloat(paintdcdrycementpaint).toFixed(2) + "<br/>" + "lit",
                paintdcdryprimersyntheticenamle: parseFloat(paintdcdryprimersyntheticenamle).toFixed(2) + "<br/>" + "lit",
                paintdcdrypaintsyntheticenamle: parseFloat(paintdcdrypaintsyntheticenamle).toFixed(2) + "<br/>" + "lit",
                paintarea: paintarea + " " + "sq m",
            },
        });
    }
}


function DPC() {

	checkLogin();

    var dpcarea = document.getElementById("txtarea").value;
    var dpccementwastage = document.getElementById("txtcement").value;
    var dpcsandwastage = document.getElementById("txtsand").value;
    var dpcstonewastage = document.getElementById("txtstone").value;
    if (dpcarea == "") {
        dpcarea=0;
    }
    if(dpccementwastage=="")
    {
        dpccementwastage=0;
    }
    if(dpcstonewastage=="")
    {
        dpcstonewastage=0;
    }
    if(dpcsandwastage=="")
    {
        dpcsandwastage=0;
    }
    var dpccementqtywithoutwastagecum = dpcarea * 0.00945;
    var dpccementqtywithoutwastagebags = dpccementqtywithoutwastagecum * (1000 / 35);

    var dpcsandqtywithoutwastagecum = dpcarea * 0.018;
    var dpcsandqtywithoutwastagebrass = dpcsandqtywithoutwastagecum / 2.83;

    var dpcstoneqtywithoutwastagecum = dpcarea * 0.27;

    var dpccementqtywithwastagecum = dpccementqtywithoutwastagecum + (dpccementqtywithoutwastagecum * (parseFloat(dpccementwastage) / 100));
    var dpccementqtywithwastagebags = dpccementqtywithwastagecum * (1000 / 35);

    var dpcsandqtywithwastagecum = (dpcsandqtywithoutwastagecum + (dpcsandqtywithoutwastagecum * (parseFloat(dpcsandwastage) / 100)));
    var dpcsandqtywithwastagebrass = dpcsandqtywithwastagecum / 2.83;

    var dpcstoneqtywithwastagecum = (dpcstoneqtywithoutwastagecum + (dpcstoneqtywithoutwastagecum * (parseFloat(dpcstonewastage) / 100)));

    
    {
        mainView.router.load({
            url: 'dpc_report.html',
            context: {
                dpccementqtywithoutwastagecum: parseFloat(dpccementqtywithoutwastagecum).toFixed(2) + "<br/>" + "cu m",
                dpccementqtywithoutwastagebags: parseFloat(dpccementqtywithoutwastagebags).toFixed(2) + "<br/>" + "bags",
                dpcsandqtywithoutwastagecum: parseFloat(dpcsandqtywithoutwastagecum).toFixed(2) + "<br/>" + "cu m",
                dpcsandqtywithoutwastagebrass: parseFloat(dpcsandqtywithoutwastagebrass).toFixed(2) + "<br/>" + "brass",
                dpcstoneqtywithoutwastagecum: parseFloat(dpcstoneqtywithoutwastagecum).toFixed(2) + " <br/>" + "kg",
                dpccementwastage: parseFloat(dpccementwastage).toFixed(2)+" %",
                dpcsandwastage: parseFloat(dpccementwastage).toFixed(2) + " %",
                dpcstonewastage: parseFloat(dpcstonewastage).toFixed(2) + " %",
                dpccementqtywithwastagecum: parseFloat(dpccementqtywithwastagecum).toFixed(2) + "<br/>" + "cu m",
                dpccementqtywithwastagebags: parseFloat(dpccementqtywithwastagebags).toFixed(2) + "<br/>" + "bags",
                dpcsandqtywithwastagecum: parseFloat(dpcsandqtywithwastagecum).toFixed(2) + "<br/>" + "cu m",
                dpcsandqtywithwastagebrass: parseFloat(dpcsandqtywithwastagebrass).toFixed(2) + "<br/>" + "brass",
                dpcstoneqtywithwastagecum: parseFloat(dpcstoneqtywithwastagecum).toFixed(2) + " <br/>" + "kg",
                dpcarea: dpcarea + " " + "sq m",
            },
        });
    }
}

function NeeruFinish() {

	checkLogin();

    var neeruarea = document.getElementById("txtarea").value;
    var neerubthikness = document.getElementById("txtMortarthk").value;
    var neeruwastage = document.getElementById("txtcement").value;

    if (neeruarea == "") {
        neeruarea=0;
    }
    if (neerubthikness == "" ) {
        neerubthikness=0;
    }
    if (neeruwastage == "" ) {
        neeruwastage=0;
    }

    var cementwithoutwastagecum = parseFloat(neeruarea) * (parseFloat(neerubthikness) / 1000);
    var cementwithoutwastagebags = (cementwithoutwastagecum * 1000) / 35;

    var cementwithwastagecum = cementwithoutwastagecum + (cementwithoutwastagecum * (neeruwastage / 100));
    var cementwithwastagebags = (cementwithwastagecum * 1000) / 35;
    {
        mainView.router.load({
            url: 'NeeruFinish_report.html',
            context: {
                neeruthickness:	parseFloat(neerubthikness).toFixed(2) + " " + "mm",
                neeruarea: parseFloat(neeruarea).toFixed(2) + " " + "sq m",
                neerucementwastage: parseFloat(neeruwastage).toFixed(2) + " " + "%",
                neerucementqtywithoutwastagecum: parseFloat(cementwithoutwastagecum).toFixed(4) + "</br>" + "cu m",
                neerucementqtywithoutwastagebags: parseFloat(cementwithoutwastagebags).toFixed(4) + "</br>" + "bags",
                neerucementqtywithwastagecum: parseFloat(cementwithwastagecum).toFixed(4) + "</br>" + "cu m",
                neerucementqtywithwastagebags: parseFloat(cementwithwastagebags).toFixed(4) + "</br>" + "bags",
            },
        });
    }
}

function Pointing() {

	checkLogin();

    var ratioc = document.getElementById("txtc").value;
    var ratiom = document.getElementById("txtm").value;
    var pointingarea = document.getElementById("txtarea").value;
    var wastagecement = document.getElementById("txtcement").value;
    var wastagesand = document.getElementById("txtsand").value;

    if (ratioc == "" ) {
        ratioc = 0;
    }
    if (ratiom == "" ) {
        ratiom = 0;
    }
    if (pointingarea == "") {
        pointingarea = 0;
    }
    if (wastagecement == "") {
        wastagecement = 0;
    }
    if (wastagesand == "") {
        wastagesand = 0;
    }

    var pointingdrymortarvol = parseFloat(pointingarea) * 0.0036;
    var cementwithoutwastagecum = parseFloat(pointingdrymortarvol) / (parseFloat(ratioc) + parseFloat(ratiom));
    var cementwithoutwastagebags = (cementwithoutwastagecum * 1000) / 35;

    var cementwithwastagecum = cementwithoutwastagecum + (cementwithoutwastagecum * (wastagecement / 100));
    var cementwithwastagebags = (cementwithwastagecum * 1000) / 35;

    var sandwithoutwastagecum = cementwithoutwastagecum * ratiom;
    var sandtwithoutwastagebrass = sandwithoutwastagecum / 2.83;

    var sandwithwastagecum = sandwithoutwastagecum + (sandwithoutwastagecum * (wastagesand / 100));
    var sandwithwastagebrass = sandwithwastagecum / 2.83;

    {
        mainView.router.load({
            url: 'pointing_report.html',
            context: {
                pointingarea: parseFloat(pointingarea).toFixed(2) + " " + "sq m",
                pointingdrymortarvol: parseFloat(pointingdrymortarvol).toFixed(2),
                pointingcementwastage: parseFloat(wastagecement).toFixed(2) + " " + "%",
                pointingsandwastage: parseFloat(wastagesand).toFixed(2) + " " + "%",
                pointingcratio: parseFloat(ratioc).toFixed(3),
                pointingmratio: parseFloat(ratiom).toFixed(3),
                pointingcementqtywithoutwastagecum: parseFloat(cementwithoutwastagecum).toFixed(3) + "</br>" + "cu m",
                pointingcementqtywithoutwastagebags: parseFloat(cementwithoutwastagebags).toFixed(2) + "</br>" + "bags",
                pointingcementqtywithwastagecum: parseFloat(cementwithwastagecum).toFixed(3) + "</br>" + "cu m",
                pointingcementqtywithwastagebags: parseFloat(cementwithwastagebags).toFixed(2) + "</br>" + "bags",
                pointingsandqtywithoutwastagecum: parseFloat(sandwithoutwastagecum).toFixed(3) + "</br>" + "cu m",
                pointingsandqtywithoutwastagebrass: parseFloat(sandtwithoutwastagebrass).toFixed(2) + "</br>" + "brass",
                pointingsandqtywithwastagecum: parseFloat(sandwithwastagecum).toFixed(3) + "</br>" + "cu m",
                pointingsandqtywithwastagebrass: parseFloat(sandwithwastagebrass).toFixed(2) + "</br>" + "brass",
            },
        });
    }
}

function volume() {

	checkLogin();

    var slabthickness = document.getElementById("txtslabthickness").value;
    var slabarea = document.getElementById("txtslabarea").value;
    var salbsteel = document.getElementById("txtsalbsteel").value;

    var beamvol = document.getElementById("txtbeamvol").value;
    var beamsteel = document.getElementById("txtbeamsteel").value;

    var colvol = document.getElementById("txtcolvolume").value;
    var colsteel = document.getElementById("txtcolsteel").value;

    var footvol = document.getElementById("txtflooringvol").value;
    var footsteel = document.getElementById("txtflooringsteel").value;

    var wallvol = document.getElementById("txtwllvol").value;
    var wallsteel = document.getElementById("txtwallsteel").value;

    if (slabthickness == "") {
        slabthickness = 0;
    }
    if (slabarea == "") {
        slabarea = 0;
    }
    if (salbsteel == "") {
        salbsteel = 0;
    }
    if (beamvol == "") {
        beamvol = 0;
    }
    if (beamsteel == "") {
        beamsteel = 0;
    }
    if (colvol == "") {
        colvol = 0;
    }
    if (colsteel == "") {
        colsteel = 0;
    }
    if (footvol == "") {
        footvol = 0;
    }

    if (footsteel == "") {
        footsteel = 0;
    }
    if (wallvol == "") {
        wallvol = 0;
    }
    if (wallsteel == "") {
        wallsteel = 0;
    }

    var slabvol = parseFloat(slabthickness) * parseFloat(slabarea);
    var slabsteelvolcum = parseFloat(slabvol) * salbsteel / 100;
    var slabsteelvolkg = parseFloat(slabsteelvolcum) * 7850;
    var slabsteelvolton = parseFloat(slabsteelvolkg) / 1000;


    var beamsteelvolcum = parseFloat(beamvol) * beamsteel / 100;
    var beamsteelvolkg = parseFloat(beamsteelvolcum) * 7850;
    var beamsteelvolton = parseFloat(beamsteelvolkg) / 1000;

    var colsteelvolcum = parseFloat(colvol) * colsteel / 100;
    var colsteelvolkg = parseFloat(colsteelvolcum) * 7850;
    var colsteelvolton = parseFloat(colsteelvolkg) / 1000;

    var footsteelvolcum = parseFloat(footvol) * footsteel / 100;
    var footsteelvolkg = parseFloat(footsteelvolcum) * 7850;
    var footsteelvolton = parseFloat(footsteelvolkg) / 1000;

    var wallsteelvolcum = parseFloat(wallvol) * wallsteel / 100;
    var wallsteelvolkg = parseFloat(wallsteelvolcum) * 7850;
    var wallsteelvolton = parseFloat(wallsteelvolkg) / 1000;



    {
        mainView.router.load({
            url: 'volume_report.html',
            context: {
                slabthickness: parseFloat(slabthickness).toFixed(2) + "</br> " + "m",
                slabarea: parseFloat(slabarea).toFixed(2) + "</br> " + "sq m",
                slabvol: parseFloat(slabvol).toFixed(2) + "</br> " + "sq m",
                slabsteel: parseFloat(salbsteel).toFixed(2) + " </br>" + "%",
                slabsteelvolcum: parseFloat(slabsteelvolcum).toFixed(2) + "</br> " + "cu m",
                slabsteelvolkg: parseFloat(slabsteelvolkg).toFixed(2) + "</br> " + "kg",
                slabsteelvolton: parseFloat(slabsteelvolton).toFixed(3) + "</br> " + "ton",


                beamvol: parseFloat(beamvol).toFixed(2) + "</br> " + "sq m",
                beamsteel: parseFloat(beamsteel).toFixed(2) + " </br>" + "%",
                beamsteelvolcum: parseFloat(beamsteelvolcum).toFixed(2) + "</br> " + "cu m",
                beamsteelvolkg: parseFloat(beamsteelvolkg).toFixed(2) + "</br> " + "kg",
                beamsteelvolton: parseFloat(beamsteelvolton).toFixed(3) + "</br> " + "ton",

                colvol: parseFloat(colvol).toFixed(2) + "</br> " + "sq m",
                colsteel: parseFloat(colsteel).toFixed(3) + " </br>" + "%",
                colsteelvolcum: parseFloat(colsteelvolcum).toFixed(2) + "</br> " + "cu m",
                colsteelvolkg: parseFloat(colsteelvolkg).toFixed(2) + "</br> " + "kg",
                colsteelvolton: parseFloat(colsteelvolton).toFixed(3) + "</br> " + "ton",

                footvol: parseFloat(footvol).toFixed(2) + "</br> " + "sq m",
                footsteel: parseFloat(footsteel).toFixed(2) + " </br>" + "%",
                footsteelvolcum: parseFloat(footsteelvolcum).toFixed(2) + "</br> " + "cu m",
                footsteelvolkg: parseFloat(footsteelvolkg).toFixed(2) + "</br> " + "kg",
                footsteelvolton: parseFloat(footsteelvolton).toFixed(3) + "</br> " + "ton",

                wallvol: parseFloat(wallvol).toFixed(2) + "</br> " + "sq m",
                wallsteel: parseFloat(wallsteel).toFixed(2) + " </br>" + "%",
                wallsteelvolcum: parseFloat(wallsteelvolcum).toFixed(2) + "</br> " + "cu m",
                wallsteelvolkg: parseFloat(wallsteelvolkg).toFixed(2) + "</br> " + "kg",
                wallsteelvolton: parseFloat(wallsteelvolton).toFixed(3) + "</br> " + "ton",

            },
        });
    }
}

function gotoHome() {
    window.location.href = "index.html";
}

function GetOver()
{
    $("#myCalculator").html("Calculate");
}

function GetMouseOut() {
    $("#myCalculator").html("<i class=\"fa fa-calculator fa-2x\" ></i>");
}

function GetBackPage(page_name)
{
	mainView.router.load({
	    url: page_name,
	});
}



function UploadProfilePhoto()
{
	navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
	    destinationType: Camera.DestinationType.DATA_URL
	});

	function onSuccess(imageData) 
	{
	    var image = document.getElementById('profile_avatar');
	    image.src = "data:image/jpeg;base64," + imageData;

	    $("#profile_base_64_text").val(imageData);
	}

	function onFail(message) {
	    console.log('Failed because: ' + message);
	}
}

function getProfilePhotoFromGallery()
{
        navigator.camera.getPicture(picOnSuccessProfile, picOnFailure, { 
            quality: 20,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
            correctOrientation: true
        });
}

function picOnSuccessProfile(imageData)
{
    var image = document.getElementById('profile_avatar');
    image.src = "data:image/jpeg;base64," + imageData;
    $("#profile_base_64_text").val( imageData);
}

function picOnFailure(message)
{
    console.log('Failed because: ' + message);
}

function getServerUrl()
{
	return "http://192.168.0.199/CivilMantraAdmin/index.php?r=site/"
}

function RegisterMe()
{
	var REST=getServerUrl();

	var profile_photo=$("#profile_base_64_text").val();
	var user_profile_name=$("#user_profile_name").val();
	var email_id=$("#email_id").val();
	var mobile_number=$("#mobile_number").val();
	var password=$("#password").val();

	if(profile_photo=="")
	{
		myApp.alert("Please Select Profile Photo");
		return false;
	}
	else if(user_profile_name=="")
	{
		myApp.alert("Please Enter Profile Name");
		return false;
	}
	else if(email_id=="")
	{
		myApp.alert("Please Enter Email Id");
		return false;
	}
	else if(mobile_number=="")
	{
		myApp.alert("Please Enter Mobile Number");
		return false;
	}
	else if(password=="")
	{
		myApp.alert("Please Enter Password");
		return false;
	}
	else
	{
		var device_serial_no=window.localStorage.getItem("device_serial_no");
		var url= REST + "RegisterMe";
		$.ajax({
			type:"POST",
			dataType: 'json',
			data:{"profile_photo":profile_photo,"profile_name":user_profile_name,"email_id":email_id,"mobile_number":mobile_number,"password":password,"device_id":device_serial_no},
			url: url,
			success:function(response){
			    if(parseInt(response.success)==0)
			    {
			    	 myApp.alert('Mobile Number Already Registered With Us');
			    }
			    else 
			    {
			    	window.localStorage.setItem("profile_id", response.profile_id);
			    	window.localStorage.setItem("profile_name", response.profile_name);
			    	var local_profile_photo=response.profile_photo;
			    	window.localStorage.setItem("profile_photo", local_profile_photo);
			    	window.location.href="index.html";
			    }
			},
			error: function (error) {
                  myApp.alert('Please Check Internet Connection');
              }
		});
	}
}

function UpdateMyProfile()
{
	checkLogin();
		
	var REST=getServerUrl();

	var profile_photo=$("#profile_base_64_text").val();
	var user_profile_name=$("#user_profile_name").val();
	var email_id=$("#email_id").val();
	var mobile_number=$("#mobile_number").val();

	if(profile_photo=="")
	{
		myApp.alert("Please Select Profile Photo");
		return false;
	}
	else if(user_profile_name=="")
	{
		myApp.alert("Please Enter Profile Name");
		return false;
	}
	else if(email_id=="")
	{
		myApp.alert("Please Enter Email Id");
		return false;
	}
	else if(mobile_number=="")
	{
		myApp.alert("Please Enter Mobile Number");
		return false;
	}
	else
	{
		var url= REST + "UpdateProfile";
		$.ajax({
			type:"POST",
			dataType: 'json',
			data:{"profile_photo":profile_photo,"profile_name":user_profile_name,"email_id":email_id,"mobile_number":mobile_number},
			url: url,
			success:function(response){
		    	window.localStorage.setItem("profile_id", response.profile_id);
		    	window.localStorage.setItem("profile_name", response.profile_name);
		    	var local_profile_photo=response.profile_photo;
		    	window.localStorage.setItem("profile_photo", local_profile_photo);
		    	window.location.href="index.html";
			},
			error: function (error) {
                  myApp.alert('Please Check Internet Connection');
              }
		});
	}
}


function LoginMe()
{
	var REST=getServerUrl();
	var mobile_number=$("#mobile_number").val();
	var password=$("#password").val();
	if(mobile_number=="")
	{
		myApp.alert("Please enter mobile number", "Civil Mantra");
		return false;
	}
	else if(password=="")
	{
		myApp.alert("Please enter password", "Civil Mantra");
		return false;
	}
	else
	{
		var device_serial_no=window.localStorage.getItem("device_serial_no");
		var url= REST + "ProfileLogin";
		$.ajax({
			type:"POST",
			data:{"mobile_number":mobile_number,"password":password,"device_id":device_serial_no},
			url: url,
			dataType: "json",
			success:function(response){
			    if(parseInt(response.success)==0)
			    {
			    	myApp.confirm("Mobile Number Is Not Registered With Us. Please Register",function(){
			    		window.location.href="register.html";
					});
			    }
			    else  if(parseInt(response.success)==2)
			    {
			    	myApp.confirm("The mobile number is registered with another device already.Please register",function(){
			    		window.location.href="register.html";
					});
			    }
		    	else
			    {
			    	window.localStorage.setItem("profile_id", response.profile_id);
			    	window.localStorage.setItem("profile_name", response.profile_name);
			    	var local_profile_photo=response.profile_photo;
			    	window.localStorage.setItem("profile_photo", local_profile_photo);
			    	window.location.href="index.html";
			    }
			},
			error: function (error) {
            	myApp.alert('Please Check Internet Connection',"Civil Mantra");
              }
		});
	}
}
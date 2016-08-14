$(document).ready(function() {

// Variables

		// Top Logo
		var cjd = Snap.select(' #cjd-logo-box ');

		/* Logo Group */
		var logo_group = Snap.select(' #logo-group ');
		var logo = Snap.select(' #logo ');
		var logo_tab = logo_group.select(' #logo-tab ');
		var logo_tab_open = "M103.871,509.457V138.543L0,34.672v578.655L103.871,509.457z";
		var logo_tab_close = "M0,509.457V138.543V34.672v578.655V509.457z";

		/* Logo Animation */
		var p0 = "M357.493,310.983L357.493,310.983l70.354-74.36l0,0l0,0l0,0l0,0l0,0c0,0,0.006,0,0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0L357.493,310.983L357.493,310.983L357.493,310.983z"
		var p1 = "M575.279,517.396c3.055,2.896,7.891,2.75,10.773-0.256l59.979-63.323c1.319-1.367,1.908-3.149,1.967-4.95l0,0v-3.576l0,0l-78.111-74.089c0,0,0,0-0.006,0h0.006l0,0l0,0h-0.006l0,0l0,0l0,0h0.006l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l-49.821-47.213l-86.584-82.1c-3.045-2.888-7.92-2.77-10.777,0.235l-59.947,63.305c-2.918,3.044-2.81,7.871,0.269,10.769L575.279,517.396z"
		var p2 = "M575.278,517.396c3.055,2.896,7.891,2.75,10.773-0.256l59.979-63.323c1.319-1.367,1.908-3.149,1.968-4.95l0,0v-249.49c-0.006-1.86-0.682-3.729-2.091-5.228l-59.879-63.266c-2.89-3.054-7.729-3.171-10.778-0.254h0.006l0,0l0,0h-0.006l0,0l0,0l0,0l-5.364,4.705l0,0l0,0l0,0l0,0l0,0v141.472l0,0l0,0v94.396l-49.822-47.213l-86.584-82.1c-3.043-2.888-7.918-2.77-10.775,0.235l-59.947,63.305c-2.918,3.044-2.81,7.871,0.268,10.769L575.278,517.396z"
		var p3 = "M575.278,517.392c3.055,2.897,7.891,2.751,10.773-0.254l59.979-63.325c1.319-1.365,1.908-3.147,1.968-4.948l0,0v-249.49c-0.006-1.86-0.682-3.73-2.091-5.227L586.03,130.88c-2.89-3.054-7.729-3.171-10.778-0.254L321.506,371.208l0,0l0,0H321.5l0,0l0,0l0,0l-75.233,71.198l0,0c0,0-2.864,2.312-2.864,6.05l0,0l0,0c0,1.801,0.646,3.969,1.979,5.355l59.977,63.325c2.878,3.034,7.685,3.151,10.729,0.254l253.802-240.59v94.396l-49.821-47.211l-86.584-82.1c-3.044-2.888-7.919-2.77-10.777,0.235l-59.946,63.305c-2.918,3.044-2.811,7.871,0.268,10.768L575.278,517.392z"
		var p4 = "M575.278,517.392c3.055,2.897,7.891,2.751,10.773-0.254l59.979-63.325c1.319-1.365,1.909-3.147,1.968-4.948l0,0v-249.49c-0.006-1.86-0.682-3.73-2.091-5.227L586.03,130.88c-2.89-3.054-7.729-3.171-10.778-0.254L321.506,371.208v-94.414l0,0l-0.006-14.959V136.328c0,0-0.037-0.636-0.983-1.531l-4.431-4.174c-3.055-2.917-7.851-2.771-10.729,0.254l-59.909,63.266c-1.409,1.458-2.046,3.367-2.046,5.208v249.511l0,0c0,1.801,0.646,3.562,1.979,4.95l59.978,63.323c2.878,3.034,7.684,3.151,10.729,0.254L569.89,276.801v94.396l-49.82-47.212l-86.584-82.1c-3.044-2.888-7.919-2.77-10.777,0.235l-59.947,63.305c-2.918,3.044-2.81,7.871,0.269,10.768L575.278,517.392z"
		var p5 = "M575.278,517.392c3.055,2.897,7.891,2.751,10.773-0.254l59.979-63.325c1.319-1.365,1.909-3.147,1.968-4.948l0,0v-249.49c-0.006-1.86-0.682-3.73-2.091-5.227L586.03,130.88c-2.89-3.054-7.729-3.171-10.778-0.254L321.507,371.207v-94.414l19.474,18.491c3.062,2.917,7.896,2.75,10.76-0.254l59.996-63.306c2.896-3.054,2.751-7.831-0.274-10.768l-95.373-90.333c-3.055-2.917-7.851-2.771-10.729,0.254l-59.909,63.266c-1.409,1.458-2.046,3.367-2.046,5.208v249.511l0,0c0,1.801,0.646,3.562,1.979,4.95l59.977,63.323c2.878,3.034,7.684,3.151,10.729,0.254l253.802-240.589v94.396l-49.82-47.212l-86.584-82.1c-3.044-2.888-7.919-2.77-10.777,0.235l-59.947,63.305c-2.918,3.044-2.81,7.871,0.269,10.768L575.278,517.392z"

		/* Hire me */
		var hire_me_et = Snap.select(' #hire-me-et ');
		var hire_me = hire_me_et.select(' #hire-me ');
		var hire_me_e = hire_me.select(' .elip ');

		/* Main-menu */
		var main_menu = Snap.select(' #main-menu ');
		var contact = Snap.select(' #contact ');
		var portfolio = main_menu.select(' #portfolio ');
		var resume = main_menu.select(' #resume ');

		/* Contact-menu */
		var contact_menu = Snap.select(' #contact-menu ');
		var contact_back = contact_menu.select(' #contact-back ');
		var web = contact_menu.select(' #web ');
		var social = contact_menu.select(' #social ');
		var email = contact_menu.select(' #email ');
		var me = contact_menu.select(' #me ');
		var contact_info = Snap.select(' #contact-info ');
		var prof = Snap.select(' #prof ');
		var headline = Snap.select(' #headline ');

		var navGradient = Snap.select(' #navGradient ');
		var ewe_path = Snap.select(' #ewe-path ');

		var bio = Snap.select(' #bio ');
		var port_copy = Snap.select(' #port-copy ');

// Actions

		// Onload Animations

		function fire() {	
			ewe_path.animate({
				opacity: ' 1 '
			}, 1000, mina.easeoin);
			navGradient.attr({
				y1: ' 0% ',
				y2: ' 2% ',
				x1: ' 7% ',
				x2: ' 0% '
			});	
			navGradient.animate({
				y2: ' 1% ',
				y1: ' 0% ',
				x2: ' 0% ',
				x1: ' 1% '
			}, 4000, mina.easein);
		};

		function logo_in() {
			logo.removeClass (' poof ');	
			cjd.animate({
				opacity: ' 1 '
			}, 500, mina.easeoin);
			logo_tab.animate({
					d: logo_tab_open
			}, 200, mina.easeout);
			setTimeout(function() {
				logo.animate ({
					d: p1
				}, 75, mina.easein);
				setTimeout(function() {
					logo.animate ({
						d: p2
					}, 75, mina.easein);	
				}, 100);
				setTimeout(function() {
					logo.animate ({
						d: p3
					}, 75, mina.easein);	
				}, 200);
				setTimeout(function() {
					logo.animate ({
						d: p4
					}, 75, mina.easein);	
				}, 300);
				setTimeout(function() {
					logo.animate ({
						d: p5
					}, 50, mina.easein);	
				}, 400);
			}, 250);
		};

		function logo_out() {
			cjd.animate({
				opacity: ' 0 '
			}, 500, mina.easeoin);
			logo_tab.animate({
						d: logo_tab_close
				}, 500, mina.easeout);
				logo.animate ({
					d: p4
				}, 75, mina.easein);
						setTimeout(function() {
							logo.animate ({
								d: p3
							}, 75, mina.easein);	
						}, 100);
						setTimeout(function() {
							logo.animate ({
								d: p2
							}, 75, mina.easein);	
						}, 200);
						setTimeout(function() {
							logo.animate ({
								d: p1
							}, 75, mina.easein);	
						}, 300);
						setTimeout(function() {
							logo.animate ({
								d: p0
							}, 50, mina.easein);	
						}, 400);
						setTimeout(function() {
							logo.addClass (' poof ');	
						}, 500);
		};
		
		function openning() {
			logo.removeClass("ghost");
			logo_in();
					setTimeout(function() {
							contact.removeClass(' out ');
					}, 500);
					setTimeout(function() {
							portfolio.removeClass(' out ');
					}, 700);
					setTimeout(function() {
							resume.removeClass(' out ');
					}, 900);
					setTimeout(function() {
							hire_me.removeClass(' out ');
					}, 1000);
					setTimeout(function() {
							fire();
					}, 1000);
		};

		function innout() {
			portfolio_close();
			logo.animate ({
					d: p4
			}, 75, mina.easeinout);
						setTimeout(function() {
							logo.animate ({
								d: p3
							}, 75, mina.easeinout);	
						}, 100);
						setTimeout(function() {
							logo.animate ({
								d: p2
							}, 75, mina.easeinout);	
						}, 200);
						setTimeout(function() {
							logo.animate ({
								d: p1
							}, 75, mina.easeinout);	
						}, 300);
						setTimeout(function() {
							logo.animate ({
								d: p0
							}, 50, mina.easeinout);	
						}, 400);
				setTimeout(function() {
				logo.animate ({
					d: p1
				}, 75, mina.easeinout);
						setTimeout(function() {
							logo.animate ({
								d: p2
							}, 75, mina.easeinout);	
						}, 100);
						setTimeout(function() {
							logo.animate ({
								d: p3
							}, 75, mina.easeinout);	
						}, 200);
						setTimeout(function() {
							logo.animate ({
								d: p4
							}, 75, mina.easeinout);	
						}, 300);
						setTimeout(function() {
							logo.animate ({
								d: p5
							}, 50, mina.easeinout);
						}, 400);
				}, 600);
		};

		function mm_out() {
				portfolio_close()
				contact.addClass(' out '),
						setTimeout(function() {
								portfolio.addClass(' out ');
						}, 50),
						setTimeout(function() {
								resume.addClass(' out ');
						}, 100);
						setTimeout(function() {
						main_menu.addClass(' poof ');
						}, 500);
		};

		function mm_in() {
				main_menu.removeClass(' poof '),
						setTimeout(function() {
								contact.removeClass(' out ');
						}, 100);
						setTimeout(function() {
								portfolio.removeClass(' out ');
						}, 300),
						setTimeout(function() {
								resume.removeClass(' out ');
						}, 500);

		};

		function contact_out() {
				bio.animate({
					opacity: ' 0 '
				}, 200, mina.easeoin);
				contact_info.addClass("ghost");
				contact_back.addClass(' out ');
				cjd.animate({
					opacity: ' 1 '
				}, 500, mina.easeoin);
						setTimeout(function() {
								prof.addClass("out-right");
								web.addClass(' out ');
						}, 50);
						setTimeout(function() {
								social.addClass(' out ');
						}, 100);
						setTimeout(function() {
								email.addClass(' out ');
						}, 150);
						setTimeout(function() {
								me.addClass(' out ');
						}, 200);
						setTimeout(function() {
								mm_in();
						}, 200);
						setTimeout(function() {
								contact_menu.addClass(' poof ');
						}, 500);
						setTimeout(function() {
								logo_in();
								ewe_path.animate({
									opacity: ' 1 '
								}, 500, mina.easeoin);
						}, 1000);					
		};

		function contact_in() {
			    cjd.animate({
					opacity: ' 0 '
				}, 100, mina.easeoin);
				portfolio_close()
				mm_out();
				logo_out();
				ewe_path.animate({
					opacity: ' 0 '
				}, 500, mina.easeoin);
				contact_menu.removeClass(' poof ');
				setTimeout(function() {
							prof.removeClass("out-right");
							contact_back.removeClass(' out ');
						}, 200);
			
						setTimeout(function() {
								web.removeClass(' out ');
								bio.animate({
									opacity: ' 1 '
								}, 500, mina.easeoin);
						}, 400);
						setTimeout(function() {
								social.removeClass(' out ');
						}, 600);
						setTimeout(function() {
								email.removeClass(' out ');
						}, 800);
						setTimeout(function() {
								me.removeClass(' out ');
						}, 1000);
						setTimeout(function() {
								contact_info.removeClass("ghost");
								ewe_path.animate({
									opacity: ' 0 '
								}, 500, mina.easeoin);
						}, 1000);
		};
 
		var me_elip = me.select(".elip");
		var email_elip = email.select(".elip");
		var social_elip = social.select(".elip");
		var web_elip = web.select(".elip");

		var chris = Snap.select("#chris");
		var at = Snap.select("#at");
		var c = Snap.select("#c");
		var john = Snap.select("#john");
		var dot = Snap.select("#dot");
		var design = Snap.select("#design");

		function un_lit() {
				me_elip.removeClass("lit")
				email_elip.removeClass("lit") 
				social_elip.removeClass("lit") 
				web_elip.removeClass("lit")
		}

		function show_me() {
				un_lit()
				chris.removeClass("dim");
				at.addClass("dim");
				c.addClass("dim");
				john.addClass("dim");
				dot.addClass("dim");
				design.addClass("dim");
				me_elip.addClass("lit");
		};

		function show_email() {
				un_lit()
				chris.removeClass("dim");
				at.removeClass("dim");
				c.removeClass("dim");
				john.removeClass("dim");
				dot.removeClass("dim");
				design.removeClass("dim");
				email_elip.addClass("lit");
		};

		function show_social() {
				un_lit()
				chris.addClass("dim");
				at.removeClass("dim");
				c.removeClass("dim");
				john.removeClass("dim");
				dot.addClass("dim");
				design.removeClass("dim");
				social_elip.addClass("lit");	
		};

		function show_web() {
				un_lit()
				chris.addClass("dim");
				at.addClass("dim");
				c.removeClass("dim");
				john.removeClass("dim");
				dot.removeClass("dim");
				design.removeClass("dim");
				web_elip.addClass("lit");
		};

		me.click(show_me);
		email.click(show_email);
		social.click(show_social);
		web.click(show_web);



// Portfolio


var line = Snap.select(" #line ");

var portfolio_links = Snap.select(" #portfolio-links ");
var behance = Snap.select(" #behance ");
var codepen = Snap.select(" #codepen ");
var github = Snap.select(" #github ");

		function portfolio_open() {
				cjd.animate({
					opacity: ' 0 '
				}, 100, mina.easeoin);
				port_copy.removeClass(' out-right ');
				portfolio_links.removeClass(' poof ');
				ewe_path.animate({
					opacity: ' 0 '
				}, 500, mina.easeoin);
				portfolio_links.removeClass(' poof ');
				line.removeClass(' out ');
						setTimeout(function() {
								behance.removeClass(' out ');
						}, 300);
						setTimeout(function() {
								codepen.removeClass(' out ');
						}, 400);
						setTimeout(function() {
								github.removeClass(' out ');
								ewe_path.animate({
									opacity: ' 0 '
								}, 500, mina.easeoin);
								cjd.animate({
									opacity: ' 0 '
								}, 100, mina.easeoin);
						}, 500);
		};

		function portfolio_close() {
				cjd.animate({
					opacity: ' 1 '
				}, 100, mina.easeoin);
				port_copy.addClass(' out-right ');
				line.addClass(' out ');
				github.addClass(' out ');
						setTimeout(function() {
								codepen.addClass(' out ');
						}, 100);
						setTimeout(function() {
								behance.addClass(' out ');
						}, 200);
						setTimeout(function() {
								portfolio_links.addClass(' poof ');
						}, 800);						
		};

		openning();

		portfolio.click(portfolio_open)

		logo_group.click(innout);

		contact.click(contact_in);

		contact_back.click(contact_out);


// Browser JS

//    var userAgent = navigator.userAgent.toLowerCase();
//
//    // Figure out what browser is being used.
//    var Browser = {
//        Version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
//        Chrome: /chrome/.test(userAgent),
//        Safari: /webkit/.test(userAgent),
//        Opera: /opera/.test(userAgent),
//        IE: /msie/.test(userAgent) && !/opera/.test(userAgent),
//        Mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent),
//        Check: function() { alert(userAgent); }
//    };
//
//    if (Browser.Chrome || Browser.Mozilla) {
//
//
//
//    }
//    else if (Browser.IE) {
//        // Do something related to Internet Explorer.
//    }
//    else {
//
//$( "body" ).addClass( "saf" );
//    	
//    };




});
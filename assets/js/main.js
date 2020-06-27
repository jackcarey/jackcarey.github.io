function formatTitle(str) {
	var defaultTitle = "Jack Carey";
	if(str=="Home"){str=defaultTitle;}
	return str + (str.indexOf(defaultTitle) == -1 ? (" | "+defaultTitle) : "");
}

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$main = $('#main'),
		$panels = $main.children('.panel'),
		$nav = $('#nav'), $nav_links = $nav.children('a');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['361px', '736px'],
		xsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Nav.
	$nav_links
		.on('click', function (event) {
			var href = $(this).attr('href');

			// Not a homepage panel link? Bail.
			if (href.substring(0, 3) != '/#' || $panels.filter(href).length == 0)
				return;

			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Change panels.
			if (window.location.hash != href)
				window.location.hash = href;
		});

	// Panels.

	// Initialize.
	(function () {
		//We only need to initialize the panels and links if we're on the index page
		if (window.location.pathname == "/") {
			
			var $panel, $link;

			// Get panel, link.
			if (window.location.hash) {

				$panel = $panels.filter(window.location.hash);
				$link = $nav_links.filter('[href="/' + window.location.hash + '"]');

			}

			// No panel/link? Default to first.
			if (!$panel || $panel.length == 0) {

				$link = $nav_links.first();
				$panel = $panels.filter(`[id='${$link.attr("href").substring(2)}']`);

			}

			// Deactivate all panels except this one.
			$panels.not($panel)
				.addClass('inactive')
				.hide();

			// Activate link.
			$link
				.addClass('active');

			//Change the title of the page
			if ($panel[0] && $panel[0].dataset.title) {
				document.title = formatTitle($panel[0].dataset.title);
			}

			// Reset scroll.
			$window.scrollTop(0);
		}
	})();

	// Hashchange event.
	$window.on('hashchange', function (event) {

		var $hash = window.location.hash;
		var $panel, $link;

		// Get panel, link.
		if ($hash.indexOf("filter=") == -1) {

			$panel = $panels.filter(window.location.hash);
			$link = $nav_links.filter('[href="/' + window.location.hash + '"]');

			// No target panel? Bail.
			if ($panel.length == 0)
				return;

		}

		// No panel/link? Default to first.
		else {

			$link = $nav_links.first();
			$panel = $panels.filter(`[id='${$link.attr("href").substring(2)}']`);

		}

		// Deactivate all panels.
		$panels.addClass('inactive');

		// Deactivate all links.
		$nav_links.removeClass('active');

		// Activate target link.
		$link.addClass('active');

		//Change the title of the page
		if ($panel[0] && $panel[0].dataset.title) {
			document.title = formatTitle($panel[0].dataset.title);
		}

		// Set max/min height.
		$main
			.css('max-height', $main.height() + 'px')
			.css('min-height', $main.height() + 'px');

		// Delay.
		setTimeout(function () {

			// Hide all panels.
			$panels.hide();

			// Show target panel.
			$panel.show();

			// Set new max/min height.
			$main
				.css('max-height', $panel.outerHeight() + 'px')
				.css('min-height', $panel.outerHeight() + 'px');

			// Reset scroll.
			$window.scrollTop(0);

			// Delay.
			window.setTimeout(function () {

				// Activate target panel.
				$panel.removeClass('inactive');

				// Clear max/min height.
				$main
					.css('max-height', '')
					.css('min-height', '');

				// IE: Refresh.
				$window.triggerHandler('--refresh');

				// Unlock.
				locked = false;

			}, (breakpoints.active('small') ? 0 : 500));

		}, 250);

	});

	// IE: Fixes.
	if (browser.name == 'ie') {

		// Fix min-height/flexbox.
		$window.on('--refresh', function () {

			$wrapper.css('height', 'auto');

			window.setTimeout(function () {

				var h = $wrapper.height(),
					wh = $window.height();

				if (h < wh)
					$wrapper.css('height', '100vh');

			}, 0);

		});

		$window.on('resize load', function () {
			$window.triggerHandler('--refresh');
		});

		// Fix intro pic.
		$('.panel.intro').each(function () {

			var $pic = $(this).children('.pic'),
				$img = $pic.children('img');

			$pic
				.css('background-image', 'url(' + $img.attr('src') + ')')
				.css('background-size', 'cover')
				.css('background-position', 'center');

			$img
				.css('visibility', 'hidden');

		});

	}

})(jQuery);
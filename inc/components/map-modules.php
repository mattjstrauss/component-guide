<div class="component-wrapper">

	<div class="container">

		<?php $molecule1 = file_get_contents('molecules/map-finder.php');  ?>

		<div class="row">

			<div class="col-sm-8">

				<?php include 'molecules/map-finder.php'; ?>

			</div>

		</div>

		<span class="spacer spacer-md-3"></span>

		<div class="row">
			<div class="col-sm-12">
				<h2>Markup</h2>
				<pre><code class="language-html"><?php echo htmlspecialchars($molecule1); ?></code></pre>
			</div>
		</div>

		<span class="spacer spacer-md-3"></span>

		<?php $molecule2 = file_get_contents('molecules/map-location.php');  ?>

		<div class="row">

			<div class="col-sm-4">

				<?php include 'molecules/map-location.php'; ?>

			</div>

		</div>

		<span class="spacer spacer-md-3"></span>

		<div class="row">
			<div class="col-sm-12">
				<h2>Markup</h2>
				<pre><code class="language-html"><?php echo htmlspecialchars($molecule1); ?></code></pre>
			</div>
		</div>

		<div class="row">

			<div class="col-sm-12">
				
				<div class="component-rules">
					
					<p>The first is a larger version to highlight multiple locations; a change zip field is also present. The smaller version is to be used to highlight a single location.</p>

					<p><em>Variants: Not all locations have a car care center. Locations that do are highlighted via an icon and rendering below the location title.</em></p>

				</div>

			</div>

		</div>

	</div>

	<script>

		var mapFinder, mapLocation;

		function initMap(condition) {
		    // create the maps
		    var myOptions = {
		        center: {lat: 39.9515474, lng: -75.1624958},
				zoom: 15,
				disableDefaultUI: true,
				scrollwheel: false
		    }
		    mapFinder = new google.maps.Map(document.getElementById("map-finder"), myOptions);

		    mapLocation = new google.maps.Map(document.getElementById("map-location"), myOptions);
		}

    </script>

</div>
<?php $molecule = file_get_contents('molecules/card-feature-carousel.php');  ?>

<div class="component-wrapper">

	<div class="container">

		<div class="row">

			<div class="flex-wrapper flex-columns">

				<div class="col-sm-12 flex-item">

					<?php include 'molecules/card-feature-carousel.php'; ?>

				</div>

			</div>

		</div>

		<span class="spacer spacer-md-3"></span>

		<div class="row">
			<div class="col-sm-12">
				<h2>Markup</h2>
				<pre><code class="language-html"><?php echo htmlspecialchars($molecule); ?></code></pre>
			</div>
		</div>

		<div class="row">

			<div class="col-sm-12">
				
				<div class="component-rules">
					
					<p>Used on the index page to display featured initiatives. No less than 3 slides should be featured, and no more than six. Never to be used twice on a page.</p>
					<p>This component is based on a element called a "card". Modifier classes are applyed to the card element to apply certain styles. In this instance the "feature" class is used to facilitate the horizontal layout with an image to the left and the "carousel" class is used to initiate the carousel functionality via javascript.</p>

				</div>

			</div>

		</div>

	</div>

</div>
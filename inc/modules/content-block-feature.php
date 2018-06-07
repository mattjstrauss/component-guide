<?php $molecule = file_get_contents('molecules/card-feature.php');  ?>

<div class="module-wrapper">

	<div class="container">

		<div class="row">

			<div class="flex-wrapper flex-columns">

				<div class="col-sm-12 flex-item">

					<?php include 'molecules/card-feature.php'; ?>

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
				
				<div class="module-rules">
					
					<p>Used on the business line landing pages to highlight business line services. It should not be used more than once on a particular page and always above all other content or support modules.</p>

					<p>This module is based on a element called a "card". Modifier classes are applyed to the card element to apply certain styles. In this instance the "feature" class is used to facilitate the horizontal layout with an image to the left.</p>

				</div>

			</div>

		</div>

	</div>

</div>
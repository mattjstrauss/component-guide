<?php $molecule = file_get_contents('molecules/accordion.php');  ?>

<div class="component-wrapper">

	<div class="container">

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/accordion.php'; ?>

				<?php include 'molecules/accordion.php'; ?>

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
					
					<p>Used for support to content or on specific FAQ pages. Set up as accordions to save real-estate.  A hit anywhere on the container will trigger expansion and another will collapse it.</p>

				</div>

			</div>

		</div>

	</div>

</div>
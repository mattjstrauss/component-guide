<?php $molecule = file_get_contents('molecules/card-small.php');  ?>

<div class="component-wrapper">

	<div class="container">

		<div class="row">

			<div class="flex-wrapper flex-columns">

				<div class="col-sm-6 col-md-3 flex-item">

					<?php include 'molecules/card-small.php'; ?>

				</div>

				<div class="col-sm-6 col-md-3 flex-item">

					<?php include 'molecules/card-small.php'; ?>

				</div>

				<div class="col-sm-6 col-md-3 flex-item">

					<?php include 'molecules/card-small.php'; ?>

				</div>

				<div class="col-sm-6 col-md-3 flex-item">

					<?php include 'molecules/card-small.php'; ?>

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
					
					<p>Used on any third – fifth level page to highlight less important or relevant content. It should not be used more than once on a particular page and never above any other content block</p>

					<p>This component is based on a element called a "card". Modifier classes are applyed to the card element to apply certain styles. In this instance the "small" class is used to adjust the heading (h2) size.</p>

				</div>

			</div>

		</div>

	</div>

</div>
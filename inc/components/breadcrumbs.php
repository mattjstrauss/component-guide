<?php $molecule = file_get_contents('molecules/breadcrumbs.php');  ?>

<div class="component-wrapper">

	<div class="container">

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/breadcrumbs.php'; ?>

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

					<p>This component is used in conjunction with the hero image on all non-landing pages. This element is to be eliminated on mobile.</p>
					
					<p>To apply the "current" page state style, add the current class to the list item.</p>

				</div>

			</div>

		</div>

	</div>

</div>
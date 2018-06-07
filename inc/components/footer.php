<?php $molecule = file_get_contents('molecules/footer.php');  ?>

<div class="component-wrapper">

	<?php include 'molecules/footer.php'; ?>

	<div class="container">
		
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
					
					<p>The footer should be used on all pages. It should contain links to each business line landing page, as well as the main content pages within each.</p>

				</div>

			</div>

		</div>

	</div>
		
</div>
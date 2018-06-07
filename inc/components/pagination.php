<?php $molecule = file_get_contents('molecules/pagination.php');  ?>

<div class="component-wrapper">

	<div class="container">

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/pagination.php'; ?>

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
					
					<p>The pagination is designated to be used when more "pages" are needed to display the amount of content that can comfortably fit on a single page. Most commonly found on the search results page with the search header bar (Results Form). Ideally no more than 10 results would be displayed on the search results page.</p>

				</div>

			</div>

		</div>

	</div>

</div>
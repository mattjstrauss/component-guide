<?php $molecule = file_get_contents('molecules/results-form.php');  ?>

<div class="component-wrapper">

	<div class="container">

		<div class="row">

			<div class="col-sm-12">

				<?php include 'molecules/results-form.php'; ?>

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
					
					<p>This form is designated to be used when displaying the search results. It should always be displayed with both the search list/results, and pagination (Pagination) should it be needed. Ideally no more than 10 results would be displayed on the search results page.</p>

				</div>

			</div>

		</div>

	</div>

</div>